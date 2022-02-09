const $ = new Env('领取优惠券');


//cron  55 0,1,6-23 * * *
//jd ck
//Node.js用户请在jdCookie.js处填写jdck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const apiList = $.isNode() ? require('./jd_yhq_api_list.js').apiList : [];
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';

//下面参数可根据自己情况修改
let tryNum=3;//券最大重试次数 每个账号尝试几次
let maxQq=1;//每个整点最多抢几种类型的券
let maxXc=3;//最大线程数 maxQq如果大于1请缩小该值
let qqjgTime=250;//抢券间隔 单位毫秒 请尽量不要低于200
let maxAccount=8;//默认抢前多少个账号的券 不要大于10 除非你间隔设置大点 线程设置少点
let jdNotify = true;//是否通知，false关闭通知推送，true打开通知推送


//下面参数不需要修改
let canTaskFlag=[];//是否继续领取
let TgCkArray=[];//需要跳过领取的ck
let lqSucArray=[];//领取成功的账号
let AllEendCode="|A9|A6|A14|D2|";//全部结束代码 A8还未开始 应该执行
let PEendCode="|A1|A13|A19|A26|A28|";//个人跳过
let JDTimes=new Date().getTime();//JD时间
let apiArray=[];//本次需要抢的优惠券
let nowIndex=0;//当前运行数量

if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
  if (process.env.JDFACTORY_FORBID_ACCOUNT) process.env.JDFACTORY_FORBID_ACCOUNT.split('&').map((item, index) => Number(item) === 0 ? cookiesArr = [] : cookiesArr.splice(Number(item) - 1 - index, 1))
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {
  if (!cookiesArr[0]) {
    console.log('【提示】请先获取JD账号一cookie');
    return;
  }
 
  let nextHour=nextHourF();//下一个整点时间
  console.log("下次抢券时间："+nextHour+":00:00");
  for(var al in apiList){
      //判断该优惠券是否需要抢
      if(checkYhq(apiList[al],nextHour)&&apiArray.length<maxQq){
          apiArray.push(apiList[al]);
          console.log("名称："+apiList[al].qName);
      }
      
  }
  if(apiArray.length<=0){
     console.log('没有优惠券需要领取！');
     return;
  }
  await getJDTime();
  let xcTimes=jgNextHourF()+(new Date().getTime()-JDTimes)-100;//修正延迟
  if(xcTimes>30*60*1000){
      console.log(parseInt(xcTimes/60/1000)+"分后才开始，时间设置错误或任务延迟时间过多！");
      return;
  }
  if(xcTimes>0){//差距10分钟以上立即执行
      console.log(parseInt(xcTimes/60/1000)+"分后开始任务，请不要结束任务！");
      await $.wait(xcTimes);
  }
  for(let an in apiArray){//需要领取的优惠券
      doAPIList(an);
  }
})()
	.catch((e) => {
		$.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
	})
	.finally(() => {
		$.done();
	});

async function doAPIList(an){
    canTaskFlag[an]=true;
    TgCkArray[an]=[];//需要跳过领取的ck
    lqSucArray[an]=[];//领取成功的账号
    //console.log("\n\n******开始领券【"+apiArray[an].qName+"】******");
    for(let cn=1;cn<=tryNum;cn++){
      if(canTaskFlag[an]&&TgCkArray.length<cookiesArr.length){
        console.log("\n\n***开始领券【"+apiArray[an].qName+"】第"+cn+"次请求***");
        for (let i = 0; i < cookiesArr.length&&i<maxAccount; i++) {
         if(canTaskFlag[an]){
            //cookie = cookiesArr[i];
            if (cookiesArr[i]) {
              if(TgCkArray[an].includes(i)){
                  console.log(`跳过账号${i+1}！`); 
                  continue;
              }
             
               if(nowIndex>0){
                   if(nowIndex%maxXc==0){
                      await $.wait(qqjgTime);
                  }else{
                      //默认间隔20毫秒防止黑号
                      await $.wait(20);
                  }
                }
               nowIndex++;
                //await doApiTask(an,i);//轮流请求账号
               doApiTask(an,i);//同时多线程请求账号 慎用
            }
         }else{
             console.log("该券已无或者无账号需要请求！"); 
             break;
         }
        }
     }else{
         break;
     }
  }
  if(lqSucArray[an].length>0){
      let tips="";
      if(apiArray[an].qName){
          tips+="券【"+apiArray[an].qName+"】";
      }
      tips+="成功领取的用户有：";
      for(var ii in lqSucArray[an]){
          cookie=cookiesArr[lqSucArray[an][ii]];
          let userName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          tips+=`\n${userName}`;
          
      }
      console.log("\n************************\n");
      console.log(tips);
      if(jdNotify){
          await notify.sendNotify($.name, tips)
      }
  }

}


function doApiTask(an,ckindex) {
  console.log(`\n\n${nowIndex}、`+timeFormat()+`:开始领取${apiArray[an].qName}_账号${ckindex+1}`);
  return new Promise(resolve => {
    if(canTaskFlag[an]){
        $.post(getApiUrl(an,ckindex), async (err, resp, data) => {
        try {
            if (err) {
                //console.log(`${JSON.stringify(err)}`)
                console.log(`API请求失败，请检查网路重试`)
            } else {//请求成功
                cookie=cookiesArr[ckindex];
                let userName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
                console.log(`\n\n*${apiArray[an].qName}_【账号${ckindex+1}】${userName}*`);
                data = JSON.parse(data);
                let retMsg=data.subCodeMsg;
                let subCode="|"+data.subCode+"|";
                //A1成功 A8还未开始A13已领取 A19A28黑号 跳过 A9结束 A14今日没有 D2领取完 所有结束
                //console.log(subCode);
                 if(data.subCode=="A1"){//领取成功
                    lqSucArray[an].push(ckindex);
                }
                if(AllEendCode.indexOf(subCode)>-1){//活动结束
                    canTaskFlag[an]=false;
                    console.log(timeFormat()+":"+retMsg);
                }else if(PEendCode.indexOf(subCode)>-1){//领取成功
                    TgCkArray[an].push(ckindex);
                    console.log(timeFormat()+":"+retMsg);
                }else{//继续
                    console.log(timeFormat()+":"+JSON.stringify(data));
                }
                
            }
        } catch (e) {
            TgCkArray[an].push(ckindex);//异常也跳过改账号
            $.logErr(e, resp)
        } finally {
            resolve(data);
        }
        })
    }else{
        console.log("该活动今日已结束！");
    }
  })
}
function getJDTime(){
    //{"currentTime":"2022-02-08 23:03:02","currentTime2":"1644332582990","returnMsg":"empty parameter ids","code":"0","subCode":"1-3"}
     return new Promise(resolve => {
      $.post({url:"https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5"}, async (err, resp, data) => {
        try {
            if (err) {
                console.log(`获取JD时间失败`);
            } else {//请求成功
                data = JSON.parse(data);
                if(data.code=="0"){
                    JDTimes=parseInt(data.currentTime2);
                    console.log("获取JD时间成功："+data.currentTime+"与服务器时间差为："+(new Date().getTime()-JDTimes)+"毫秒");
                }
            }
        } catch (e) {
            $.logErr(e, resp)
        } finally {
            resolve(data);
        }
     })
  
  })
}
//判断该券是否需要抢
function checkYhq(entity,hour){
    //活动未结束
    if(entity.endDate&&(new Date(entity.endDate+" 23:59:59").getTime()>new Date().getTime())){
        let qTimeArr=entity.qTime.split(",");
        if(qTimeArr.length>0&&qTimeArr.includes(hour+"")){
            return true;
        }
    }
    return false;
   
}
function getApiUrl(an,ckindex) {
  return {
    url: apiArray[an].qApi,
    headers: {
      'User-Agent':$.user_agent,
      'Content-Type':'application/x-www-form-urlencoded',
      'Host':'api.m.jd.com',
      'Origin':'https://api.m.jd.com',
      'Cookie': cookiesArr[ckindex],
    }
  }
}
//计算距离下一次整点的时间间隔
function jgNextHourF(){
  let newDate=timeFormat().substr(0,13)+":00:00";//计算当前整点时间
  let dataCurPar = Date.parse(new Date(newDate))+60*60*1000;//转换为时间戳+3600秒
  return dataCurPar-new Date().getTime();
}
//获取下一个整点时间
function nextHourF(){
  let date = new Date();
  return (date.getHours()+1)>=24?0:(date.getHours()+1);
}
function timeFormat(time) {
  let date;
  if (time) {
    date = new Date(time);
  } else {
    date = new Date();
  }
  return date.getFullYear() + '-' + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate())+' '+(date.getHours() >= 10 ? date.getHours() : '0' + date.getHours())+":"+(date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes())+":"+(date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds())+":"+date.getMilliseconds();
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}