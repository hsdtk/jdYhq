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
{"qName":"济南50-25","qTime":"10","lqSpace":1,"ckIndex":0,"endDate":"2024-03-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%224CioTvP7fn34dUutX57WiKR3AhXt%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE0318086FCE8FA82FDD15CBBBD2B8ECD56B18B477A399CCDBB653EE03B9F941B7D46A9B6FC0345A9812A87777D1CF2C7_bingo%2CroleId%3D187F46C43D585D16504DAA43E1118E441E9259A4617BD8DBF9859CE5B6DF77D54B21019CA31F791E7F70BCEED3286A04E98503060F1F7DBCC4D557A9CA8FF4CA8CC9CF8FD09B4E4790EDD9F4FA4D672FE032B573BC6D10F67FBEEAB584F0BB657C957E378EB7AFE5513A14B21A5846762F6A495D3DEB7E0619258F876C722BA68591D478CCC87E832F996D4588178DC9B4417D77581588326EBFA78892757E9E25080B29633D3DF88E31500F4EA04DEB_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FF9AEBB23AE0269EFA2E2179F232D311E_bingo%22%7D"},
{"qName":"济南600-120","qTime":"10","lqSpace":1,"ckIndex":0,"endDate":"2024-03-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%224CioTvP7fn34dUutX57WiKR3AhXt%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D808C12EEEE3F2E03333E82EE30B9674D4FC1B5B83676D58A7245CCF5AAF61BF1F531E3EC09BBFAF86376E1B837C197AE_bingo%2CroleId%3D187F46C43D585D16504DAA43E1118E448ECE95F3BD07C6F72D22FD459BC7523AB64E73F4DE2C505B23245D479082FFB3CC656D8266B97560C8E707D1A299A7ACC357D6281204C51E948A7BDDCDC64E4B542E5EC4953C235A13C16F711CE4936861AF2D160846F4D7B86294376E63AD31F4C549198D2572D803E9EA444B63BE890A01A45F5780403C16F678A5C923BC5FCE74A279DDA88FB2CE0E6C23744449127A69ACF6C9903025ED62B5BA8625834C_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F645B4DD8336E52436FF5A0597EBBAEB6_bingo%22%7D"},
];
module.exports = {
  apiList
};
