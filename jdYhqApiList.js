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
        "endDate":"2023-05-31",
        "qApi":""
},
抢券提示很抱歉的可能是服务器ip黑了或者账号等因素
api.m.jd.com域名的post请求券名称不需要带G 会自动带log请求
rsp/lps.jd.com等域名的get请求券名称带G
上面为注释不会抢如有需要复制到jdYhqApiListMy.js里 下面才是真正会抢的券 
*/
let apiList=[ 
	{
			"qName": "耳机-220",
			"qTime": "0,10,20",
			"lqSpace": 1,
			"ckIndex": 0,
			"endDate":"2023-06-18",
			"qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223fNa4gg4udob1juiWbWWBp9z9PBs%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DBB1732F2D50242655A447605E67688C1D78276939B489C226E40AD2E7B6FF5F64B063794D56769D2D5AC3F6886D9C3CD_bingo%2CroleId%3DDC42C3E0AB0C1CA594A06C1AA13F3F404FE9CF1214AE4A09DBF80E2826431D282AB0130BB2CB593190D828F018F9BD98D72383C538552940CA9DC3F8AC156992E6787F6531F87D183C436AE94205A51EA92A49702183EB2BF0B1F1D9018983E1B66DB9F89C8E847A0E2DDAC4DD0FDB8A12F7F8BB4063489A84A3F0989841F3A564E5DC4C949402D9CFDC3589BFCA68D7831DD8FD9C55278FDEDBD22916918EE34344181BCF50E23CE01DBD5368B020FF_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FEA953A7C6DBBDF240E360C5147F92132_bingo%22%7D&client=wh5"
	},
	{
			"qName": "watch-210",
			"qTime": "0,10,20",
			"lqSpace": 1,
			"ckIndex": 0,
			"endDate":"2023-06-18",
			"qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22pPrapiQ5i3rd7T48wCvFvqxCVgw%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DEACD40AB9F75B72415C138D3A0A2E216E099462F14599B95F9C21F7C4F0385D31B37FFDEE442992AC5379F75A1B2AAA9_bingo%2CroleId%3DDC42C3E0AB0C1CA594A06C1AA13F3F40FFA57431EC428114DE6E1595A2089CA847ED13A6897119FCE23BD16A8A6C8FB2DF227C28D160AEF63082BCE9A74FECA702E8B1AC1812E82B1330BD80295B3765E7E3072DBC8F7AC9D3EBB1D050DCD47508A3D681D484074C319719EFF753F010D7B8B7B963497A6072D42734342A4711A4EC6418AAE91F4E6579FF42E56BC877AEA50F45F4D39B1BB06CBA4E899C51D5_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AF98A608A27BC58BADF5E2C674BBBABEF_bingo%22%7D&client=wh5"
	},
];
module.exports = {
  apiList
};
