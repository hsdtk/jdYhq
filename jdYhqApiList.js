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
{"qName":"25号川酒-300","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D2E25C262E187160356F4BD67CE7A95CEBF6D2A9F985C28D881881B4F1E53C3D57EA539CAC046E15EC2393B27568F8489_bingo%2CroleId%3DCDC516E4BEFDC8008EE41B8744F2C8F5A0C1A8CC231DB0328ED47D52711F2D2D11A765796DC01448715DE58F9119670FE9996EF9E6B3BDBD16D050D588A053525D383D15ABA7225508FA7F9CA31153934E2C082FC52AB592C51D40A3F8ADA9B0A41FC39599D3CB328BD8052DC51A2E878E96E7B91CE4E86B6AC506E8074867A5A0BE44A37E729AA8C8C8D0CF17A0607273B36D38731A8FCF4705F90EBE6509FB2090BF311B7E62CF7BF8ABA728B3EC36_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F2263F7A7271150AED0778DF33B4A4108_bingo%22%7D"},
{"qName":"25号川酒-150","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DF92DFB0545F97EA4506EEFBB2C743015AAEE7BA2308890D3781CEF4B54961BE9DC803A749EBCEE8E1E21B74EFCBA75A6_bingo%2CroleId%3DCDC516E4BEFDC8008EE41B8744F2C8F5425A236509CCB1D4B709DD430CF154CB60C4418D75020FD0DEEF6880371E972FB887EE9B85A3CC6BA58F49A071B9BA6B4D1FB5F4FB1E95656EE89A8E9BB87EB210DEBF04A0E37A3DD9A439B4D5944A95234BE58933FA3E7D28773ADB9C0B623FED865E86228890A7687748361C674BE538FC0A7AD49F5727D8A085ADC970377496E3AC206BA4B9C74AD2752A69EBAD2081D156274A96F3CB915E277CFCF1D6AA_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F78EBFE3A527A1E981C36D53E9C334069_bingo%22%7D"},
{"qName":"25号川酒-90","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE1C8DB062990027636E900BB939DE4A794E6F9348C6531B6ED29DEB1B9DC53C195F6471658B74954C1637582738805DD_bingo%2CroleId%3DCDC516E4BEFDC8008EE41B8744F2C8F55D6E3428D896DED1114D0E8DA3BA33CC83050DEBB9EC206B522D6DBFC168D5E0099D33742852656DED71AE80AD8EE1A4C6BE7F1570004EE03A27352B6EB99EBC3242FEB61790071C19C386C573FA5B54134D054F31D09E6D37D6F77AE98D9504111C29936B7A4ADCA127C5C608FF40B8D20100DE57E0FAFA95FD2194352DE9546B9CA72CA78F61CFA8A9FE4DBD02F4D89120AF16783D07B710B71C17C81D352D_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FBE3A9F8C21F18207EE12BC7C1702D9C1_bingo%22%7D"},
];
module.exports = {
  apiList
};
