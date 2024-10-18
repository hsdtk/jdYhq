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
{"qName":"川酒-300","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-23","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D9A1E536DFABC5916BDDF38A9B2A8272723BB6C16C62BBF699877ED2B3BED50FF4BB766D898E6C4BC613F70F698FE019B_bingo%2CroleId%3D169C6E3DF58B18FA739F884AB9CC18C24B68166298717C3D809A3DF76807410FF91011532AE40800646ACC14D93D773684AA8205A2C1E6EB6E63FBC7ABE4F98E9DB8A5EDD868EEBE6152C711AE54F1275E72FC2829BE4BF07EDD7638125269FD7B956461234F5B80B5317705BB4C59CCADF7D0C86E2E2B458503C1FF9C44359F2E6211D1D239942EA5FF43112C64E261F3D260579FF7DD55D021BCA55F87A71971DDB6FA2503F0F75B933A6763AB1CA9_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F8E1EA65658B55DE16DA0F413C3D4CF1F_bingo%22%7D"},
{"qName":"川酒-150","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-23","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D8538CC1BF058E06C96C009DB9A878DD15451F05B474F3B2C2E379A90271048F3269E518FA3AF3B8B770626267B59E1BF_bingo%2CroleId%3D169C6E3DF58B18FA739F884AB9CC18C2D430EF422D8955CFED34452990ABC0383BB5FDFBC2C4BD042FDBA2E788AAD287341EC00E0BE3EBBBB782F7C51BE9BACD2BFCF9DE1F431CFA7EEB15DA9A993695352D0536F4EE94376A0FB1919C6C9D9E66E4813C18D55A1492503B0378276CB391AD24FCB6461E021DD94155334A8CB4B676386E5006BFDC5E04B4FF3AE376B6E280C609C24A6717E12C9CDF6D44D4A1A5110DF450636AB89AE21CEDC0A2A2AB_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F5A25A6A0B6A11ECC446A05CBD08B7A8F_bingo%22%7D"},
];
module.exports = {
  apiList
};
