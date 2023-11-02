/*参数说明
*请不要修改此文件 如需增加自定义api复制此文件改名为jdYhqApiListMy.js然后修改新文件里面的券 注意会同时加载2个文件的券 所以不要重复
*qName：String类型 券名称 不能重复
*qTime：String类型 领取券的时间 小时 多个用英文逗号隔开
*lqSpace：int（数字）类型 多久可以领取一次，1天可领取一次就设置为1 永久一次可设置999
*ckIndex：int（数字）类型 指定账号抢专属ck 0为所有账号都会抢 1仅账号1会执行该api以此类推 不支持同时多账号，多个账号请复制api改不同名字
*endDate：String类型 券结束日期 不用时分秒
*qApi：String类型 券API地址

{
        "qName": "plus500-20G",
        "qTime":  "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2099-12-31",
        "qApi":"https://api.m.jd.com/api?functionId=coupon_receiveDayCoupon_v2&loginType=2&loginWQBiz=&appid=plus_business&body=%7B%22platform%22%3A3%2C%22eventId%22%3A%22MPlusCoupon_Get%22%2C%22eid%22%3A%22ZTZNNSE6PQJWCVS5DIORLCJG7OKJKNSEPGWOOAFHAVLKMFBDABXW25BAMDEMRMD4PAOZGMNVHKMBHS64C6QJ2M7OQU%22%2C%22fp%22%3A%225d2eebfdb79fb4e44739c293e4e89d30%22%2C%22activityId%22%3A%22qyb_1004%22%7D&scval="
},
{
        "qName": "plus1000-40G",
        "qTime":  "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2099-12-31",
        "qApi":"https://api.m.jd.com/api?functionId=coupon_receiveDayCoupon_v2&loginType=2&loginWQBiz=&appid=plus_business&body=%7B%22platform%22%3A3%2C%22eventId%22%3A%22MPlusCoupon_Get%22%2C%22eid%22%3A%22ZTZNNSE6PQJWCVS5DIORLCJG7OKJKNSEPGWOOAFHAVLKMFBDABXW25BAMDEMRMD4PAOZGMNVHKMBHS64C6QJ2M7OQU%22%2C%22fp%22%3A%225d2eebfdb79fb4e44739c293e4e89d30%22%2C%22activityId%22%3A%22qyb_1005%22%7D&scval="
},
{
        "qName": "plus1200-50G",
        "qTime":  "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2099-12-31",
        "qApi":"https://api.m.jd.com/api?functionId=coupon_receiveDayCoupon_v2&loginType=2&loginWQBiz=&appid=plus_business&body=%7B%22platform%22%3A3%2C%22eventId%22%3A%22MPlusCoupon_Get%22%2C%22eid%22%3A%22ZTZNNSE6PQJWCVS5DIORLCJG7OKJKNSEPGWOOAFHAVLKMFBDABXW25BAMDEMRMD4PAOZGMNVHKMBHS64C6QJ2M7OQU%22%2C%22fp%22%3A%225d2eebfdb79fb4e44739c293e4e89d30%22%2C%22activityId%22%3A%22qyb_1006%22%7D&scval="
}
{
        "qName": "极速8-2",
        "qTime": "0,20",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-11-30",
        "qApi":""
},
抢券提示很抱歉的可能是服务器ip黑了或者账号等因素
api.m.jd.com域名的post请求券名称不需要带G 会自动带log请求4
rsp/lps.jd.com等域名的get请求券名称带G
上面为注释不会抢如有需要复制到jdYhqApiListMy.js里 下面才是真正会抢的券 
*/
let apiList=[ 

{
        "qName": "9.9保养",
        "qTime": "0,20,22",
        "lqSpace": 999,
		"ckIndex": 0,
        "endDate":"2023-11-11",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%220%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3Dcemcc5s6o3a34d6ba49f27e3110b8fc8%2CroleId%3D127810521%22%7D&client=wh5"
},
{
        "qName": "联名卡-1111",
        "qTime": "9",
        "lqSpace": 999,
		"ckIndex": 0,
        "endDate":"2023-11-11",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223ZCXjnEc7H3LTYRMXHr34tVBtayZ%22%2C%22scene%22%3A%223%22%2C%22actKey%22%3A%224A932D24ED5519BFE4D4F23DDB74AF0FAF9C12910DA0B9B154D8805487C267F1424FFC73EAF8CA7B9E962F4FDEEB3F63F24D0C23B1C135FD6F3CA57B20449864BA23EB5E7549FB670B05AFB27638B653E7A8C07836BB470A0643580D4FFE76DE2EEA3055897D5DD751967A269FA044BADA6D711ADE0332362A02C1BA6EF0C1B0EB2430464D18975920773C7869B744F2401D852DF838BB9C15733ABD7D61798CDC2FF7EEBEDFB4144049EEA34E2C9E53AB06A2FCC2A6FCE472256AEC1D2DBC31_bingo%22%7D&client=wh5"
},
{
        "qName": "联名卡-222",
        "qTime": "9",
        "lqSpace": 999,
		"ckIndex": 0,
        "endDate":"2023-11-11",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223ZCXjnEc7H3LTYRMXHr34tVBtayZ%22%2C%22scene%22%3A%223%22%2C%22actKey%22%3A%224A932D24ED5519BFE4D4F23DDB74AF0FEE84810904079DA75487A306EFFC5C646846039B71601D7ECE080D4ED0567463078BEC2333AE45B6FBBB9AC7DAFA47435603F0088B08B81D8041BF96FE79FD83A30427774B6A424D1BA09CF919652292BC207DAC821E9AB1EB2A7EEC54BB083DB133029CDA660BA75C72822F1F976075BB4F34E42EA4E0D607E011EC2BE17857C1F1D57B4A1C33F4752A446432B0EDD8F70058B02D2C153557B123C2EFFE7A47E75267E2D684043FF9A70CCBB9D22814_bingo%22%7D&client=wh5"
}
];
module.exports = {
  apiList
};
