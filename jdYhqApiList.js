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
{"qName":"四川智能-900","qTime":"20","lqSpace":1,"ckIndex":0,"endDate":"2024-10-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22GM5MLe57FJ9KqX9sm5579hqBfwk%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DABB28EBF760B1844EA764FADD77B5D3EC2326AADACC01466DE190F058BAA7396889E91B7FDF2916AFE66254F029FED8A_bingo%2CroleId%3D5793D38EE8FA2902B6A85F21F4173E8DE429132D4E83BE7650176022D820E33AB3EA977817A39C46FB2B871C8024612A270D2FF2FC0995DD8A2554454CA3F63A3884E4527AB3D629070D824294CBE4654CD78251D90829C07EE53C4BF937646EF4CDC2E4D6D7F743C4B24025845EB61CE9C6EE7EA47B4ADC6D4B867097691E0F1BC6B0EABFB1D58D9671933AEDFAF5E0848AF599F0FCF1BB1A9CFA0B2BB612978FA8EA190E4B2E2EC41E837DDC195A29_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FA2D0A0ED11F638F017ECEA6E4A0768A1_bingo%22%7D"},
{"qName":"四川智能-1500","qTime":"20","lqSpace":1,"ckIndex":0,"endDate":"2024-10-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22GM5MLe57FJ9KqX9sm5579hqBfwk%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DD0032E3C17D0136C5E7A886BBBA64CAB4C3F850E4A60AD7DDC0400019FD73EF3A6B82E425D69E3E874D65BFD2413CBCF_bingo%2CroleId%3D5793D38EE8FA2902B6A85F21F4173E8D00FD54695D0056AB50945F6BEDDF58B89B9F8EFD2E5821F122FDDE9B7CD84B0A5082D78B24AC9FBA9C0069B21100412AF0346AE9E5D8B63547227654BBDEA76BB3D724FEA23EB4460886F02C5E2AE209998779CC0B9EC5E741A337E64ED28F1F67D47B19B97F157409E023C63412255E69605B1C8A9415FD0B7CDFECF7BA55E287ED7B597C65A9DE6F82E1BD60E590658C4D6DE654462E93A0E2CB90117EF99E_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F413C8BCDEE6D23A2AB756B55B736316E_bingo%22%7D"},
];
module.exports = {
  apiList
};
