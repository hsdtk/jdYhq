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
{"qName":"可乐-198","qTime":"10,12,18,20","lqSpace":1,"ckIndex":0,"endDate":"2024-01-16",
	"qApi":"jdq.min.js?v=0.6369984779226341:1 https://api.m.jd.com/client.action?appid=h5_awake_wxapp&functionId=mcoupon_getcoupon&client=wh5&body=%7B%22key%22%3A%22%22%2C%22roleId%22%3A%22%22%2C%22linkKey%22%3A%22AAROH_xIpeffAs_-naABEFoe3raMU5jh05emi4vFjdRpEERMMefGeTvCS7Rmt0NEAejtpCvTkWDPTL_8Cxbq3b52QdOyVw%22%2C%22to%22%3A%22m.jd.com%22%2C%22venderid%22%3A%22%22%7D&_stk=appid%2Cbody%2Cclient%2CfunctionId%2Ct&_ste=1&sceneval=2&g_login_type=1&appCode=msd95910c4&g_ty=ajax"
	},
{"qName":"南山4000-600","qTime":"10","lqSpace":1,"ckIndex":0,"endDate":"2024-01-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22ysmdh9qsPiw71CTG5WdfvqiqxtC%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DB7514224E7657E1692EA1D644979C0B0EE62D0C783A1A8EC5ED9E3AE5C7478EB4CC9B1D12BB1DF9A393C5E9C06CF63AC_bingo%2CroleId%3D2F205BAB6B4FA9E72B17985908C14298FBC39AC574B6F0203758F7A2B96FD315D80D42C8CDC8F70AA360FDB78BEC5C85A3C600E5FB0D756FC2CFA90EFEB5D13506442DC8043D100B17097E931123945E061DF5B46463655FEEFAB2008C8FBEDAB7766AFCE75375FFD16E65A89BC6E92D33E3D9C2FF37AF70CFAF49B44BF894FD40C039907BB5031802BAA9822830B4FC891A0AEADB6C396C73944B04F95A7737ED5F0B72C56927FAF78E35B2AB54C03D_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FEBA5736F1BEEEC120DDA715B198C21B0_bingo%22%7D"},
{"qName":"南山2000-300","qTime":"10","lqSpace":1,"ckIndex":0,"endDate":"2024-01-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22ysmdh9qsPiw71CTG5WdfvqiqxtC%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D01FCE299D6A005B23FB9A1EFB00DA927263DCAB9528B66F3465496B103AFC02429CF0CD39C5DF6B43507E81A30212419_bingo%2CroleId%3D2F205BAB6B4FA9E72B17985908C1429849F45BF0BCAE617F903F07F215DAE11DB45D142964CD6F70BFAB5545B44C6D321EBCB32EE0CBC6E14F047E362AAD45BC8A5B0BE174A160F15CF3E4FC191F2C321B6711759467EE40A86A95DD94AED335A6811F9611F3EFB28D2769EE65C00B727DDFF660D7F965A022BCA17E6C8388170F170650B56F5CDC1D6C1D8DC1E0D0EF5E92743241D4E76B3E9C4FA31850BDAABF6B332D0FB2A9C3E9F67DDD5B24940C_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F9C45FD6F91383754C454198400123820_bingo%22%7D"},
];
module.exports = {
  apiList
};
