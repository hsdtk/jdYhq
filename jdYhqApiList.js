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
{"qName":"川酒-150","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-14","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DF5F77E8969F9CC6A2F50B7304AB29D766077D1EED39CD7E240CC6FE321B80CECC6D273C23680C7667C1C30BC2460B23C_bingo%2CroleId%3DB89452372C82B75FB6C0D71CD37474684D57A08703409072854EB85B49984ED3036AA3E235F6781DEC17B4CBEA6C967DCF527DC8C2050919716AB3BE3ACF75F49E5E6AB0826A98DD040E7C3A5169F0A65C5316C05CF0940C164958C8BA63524F99D54600DCA9BD4DF6DCAE262924B319704AC2424D1A04B71A9EF32BD878A92984981BB771DB8F46FDB8AD4C915EBD1F916F391C85E2E76D6DEDE2662D45BFEFF0D71645A5A1E3DBD452B867425D80B3_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FA94924A2DF80AF82ED278348A790F6AB_bingo%22%7D"},
{"qName":"川酒-90","qTime":"0,21","lqSpace":1,"ckIndex":0,"endDate":"2024-10-14","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223DWfSJJR12upK6gugY8BD2ixLMUV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D27F911A11A5B256EC044C5E905800F4F20C0D60CAD302DB2165DE1F0F8DA53A1185828D0C1077E56DBFBB41CFD5B4540_bingo%2CroleId%3DB89452372C82B75FB6C0D71CD3747468E64AF50053CBBC32CC62EF36A943952C08618BCE9C0B106077FF0F11212DAD463501312891E070613D868520F329BAA89451612378B5671F80327280155D6929D9C72BB4AAB5546C4C98323E79D81C61C43538CB1DC4BA21513C527C311B69231DDCDB369DBC164C926C1309FA55D833B428CC4EDEFCD4CD9F044160661FFCC8FA62442F079141E9B14199A865BFE8B742C016B94CAF50B8FB391C06EBF4245E_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F0854D47F17272B1E2D91306DE58EC4AA_bingo%22%7D"},

];
module.exports = {
  apiList
};
