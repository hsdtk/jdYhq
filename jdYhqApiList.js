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
        "qName": "95折",
        "qTime": "10,12,20",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2024-03-31",
        "qApi":"https://api.m.jd.com/client.action?appid=h5_awake_wxapp&functionId=mcoupon_getcoupon&client=wh5&body=%7B%22key%22%3A%22%22%2C%22roleId%22%3A%22%22%2C%22linkKey%22%3A%22AAROH_xIpeffAs_-naABEFoe18phuaMrw-rxCYgaHJZKH40vb7SFOPgY3ge1SVr2Bz4OAB5WExSzSL-tCYPhkoqXo5N_1Q%22%2C%22to%22%3A%22m.jd.com%22%2C%22venderid%22%3A%22%22%7D&_stk=appid%2Cbody%2Cclient%2CfunctionId%2Ct&_ste=1&sceneval=2&g_login_type=1&appCode=msd95910c4&g_ty=ajax"
},
{"qName":"200-20","qTime":"10,20","lqSpace":1,"ckIndex":0,"endDate":"2024-03-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%222tViKwx8TayPnJDVhFaZVxo7Mstv%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DA360BBA6455C75144F11183B59DF26F7EF34625C9C7D823B4AF9A6CAD931BEFA5D0E60A8A4102C445854F9D4FA941D64_bingo%2CroleId%3D433F37B7E558E58B398E99822251348A5B0260FB40168A2A9D9F871C1DBD011B660D24FE4ADC0C5395FFA286384955BB987B3EB5952BFD585C54B9A6A4CB0730E529A6B7BEFC9547BE22EC37737FEF4E59038B5C8B7D67B413F23B2C94F1D6EA0ABBB089FE3EB538391EF130D8B13ED29D3AA64973C689297F2B389EDB638F16D02CE65E3381A2B51F5309DACA4C0D95C3D9668297A398A3E9E80A4459195D02636B16E7205953E1E2A5942428279C90_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FD698EFCEF4197D84D965FFDEAC4E41FC_bingo%22%7D&client=wh5"},
{"qName":"济南50-25","qTime":"10","lqSpace":1,"ckIndex":0,"endDate":"2024-03-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%224CioTvP7fn34dUutX57WiKR3AhXt%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE0318086FCE8FA82FDD15CBBBD2B8ECD56B18B477A399CCDBB653EE03B9F941B7D46A9B6FC0345A9812A87777D1CF2C7_bingo%2CroleId%3D187F46C43D585D16504DAA43E1118E441E9259A4617BD8DBF9859CE5B6DF77D54B21019CA31F791E7F70BCEED3286A04E98503060F1F7DBCC4D557A9CA8FF4CA8CC9CF8FD09B4E4790EDD9F4FA4D672FE032B573BC6D10F67FBEEAB584F0BB657C957E378EB7AFE5513A14B21A5846762F6A495D3DEB7E0619258F876C722BA68591D478CCC87E832F996D4588178DC9B4417D77581588326EBFA78892757E9E25080B29633D3DF88E31500F4EA04DEB_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FF9AEBB23AE0269EFA2E2179F232D311E_bingo%22%7D"},
{"qName":"济南600-120","qTime":"10","lqSpace":1,"ckIndex":0,"endDate":"2024-03-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%224CioTvP7fn34dUutX57WiKR3AhXt%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D808C12EEEE3F2E03333E82EE30B9674D4FC1B5B83676D58A7245CCF5AAF61BF1F531E3EC09BBFAF86376E1B837C197AE_bingo%2CroleId%3D187F46C43D585D16504DAA43E1118E448ECE95F3BD07C6F72D22FD459BC7523AB64E73F4DE2C505B23245D479082FFB3CC656D8266B97560C8E707D1A299A7ACC357D6281204C51E948A7BDDCDC64E4B542E5EC4953C235A13C16F711CE4936861AF2D160846F4D7B86294376E63AD31F4C549198D2572D803E9EA444B63BE890A01A45F5780403C16F678A5C923BC5FCE74A279DDA88FB2CE0E6C23744449127A69ACF6C9903025ED62B5BA8625834C_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F645B4DD8336E52436FF5A0597EBBAEB6_bingo%22%7D"},
];
module.exports = {
  apiList
};
