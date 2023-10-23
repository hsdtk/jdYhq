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
			"qName": "冰洗5折神券",
			"qTime": "20",
			"lqSpace": 999,
			"ckIndex": 0,
			"endDate":"2023-10-24",
			"qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%227ooZUnJ6JSgpdyqUNzqJVsmAd5U%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D115118E217F679B1C5D002F20ADB2D37F8AE976FC06112BD2849F900439DDE0FC67FF8BF7C45DE967324FB50F7A66E0D_bingo%2CroleId%3D66D04BB382F5BD90152EA858862C68D783FB810A35AD707FE512EC00C1A1E2835707C5654836AC5EB8A2A6143DE8527789B7B46044C2A85A3233804C9BA961B823C2370F2852982B091BEAC706F3D4D2E0A576C525721C078D762FD1F40540B23E9CF4F720B3C8167BE66BD83F10A83C64C3887D70452C40FA0009E46A8D839006471FD4C7086FCCBA599E41D0F282658F2FB5CBC47014C07E06951588DC4C878D69E68CC6D5A3020D723457B70F67D5_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F9628E9CA9E4326ACFCCD83786759DA42_bingo%22%7D&client=wh5"
	}
];
module.exports = {
  apiList
};
