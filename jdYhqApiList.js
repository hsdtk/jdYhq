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
api.m.jd.com域名的post请求券名称不需要带G 会自动带log请求4
rsp/lps.jd.com等域名的get请求券名称带G
上面为注释不会抢如有需要复制到jdYhqApiListMy.js里 下面才是真正会抢的券 
*/
let apiList=[ 
{
        "qName": "plus20-20部分",
        "qTime": "0",
        "lqSpace": 999,
		"ckIndex": 0,
        "endDate":"2023-11-11",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22XSkeNVfHGaTkMZFYX9q3mCezEEf%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D13D04B90E7CC9F0D7C34D232F49A7D95C60B67A7745DB3EF9C5D445A7F372A5A07841E2F23BF45C22282D5259EFB412C_bingo%2CroleId%3D3B29ED6E4067A217129724BD8C2975F3F3F8E06E572158663A27E6E9EB45825FE7D128A727B00FA151C5DF1F0EF349733EC2C31D71DDFE18597F98F11BA07284D26642FD30A6FCDAE67B0D2C31B5F52DFED80B72EAD966268D1A8C51ED6B6976371F96EC503223D03ECB96101B75AE180DB9F7A8007D6EDCE1AAAA1E83BFF3F61F2021F7752BA9714D85FA8D6EE2713DAF39D2F214A0A75B5D13602449D1FF631E0158D16218706D2056374D572654D8_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FC48D82E25929B28E801FDCCCC81C199B_bingo%22%7D&client=wh5"
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
},

	{
			"qName": "-1111神券",
			"qTime": "20",
			"lqSpace": 1,
			"ckIndex": 0,
			"endDate":"2023-11-12",
			"qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%222i8kKtaS3TG88AywDEWbyCKrQMhC%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DBC9E9F3D5A02CB9FE617DF8AB71D02FEF3A3E321B5FD67EFDF6C148B8D2DC998209C5F37DCC2AF2E54D5264E687A316D_bingo%2CroleId%3D290B6CB678484038863F262DA8122BAC72EE4CA04BB4C0BA369FFC43E0A01C3C9D7F98A87D88E533BC3344EFBCB071E96DB6BD54B80C15AE86F786A70FE3728FAA95358E8DCDC143A1956C7760715FA0E3782F55F06877B5CD9F6A4B87DE859559F017E56179D883E62B5C3F51F22F54F2F242B06878C2AF5B280EB21AD385ED3E2A8F75FEAE1F8AE9591163507E7B0A9AC18F5A06E544447FFAD94437F5FF3FD3856F7E89A965756046B451A55AC4D1_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F3A59546D330CBD61994154E60FBFDA88_bingo%22%7D&client=wh5"
	}
];
module.exports = {
  apiList
};
