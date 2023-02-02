/*参数说明
*请不要修改此文件 如需增加自定义api复制此文件改名为jdYhqApiListMy.js然后修改新文件里面的券 注意会同时加载2个文件的券 所以不要重复
*qName：String类型 券名称 不能重复
*qTime：String类型 领取券的时间 小时 多个用英文逗号隔开
*lqSpace：int（数字）类型 多久可以领取一次，1天可领取一次就设置为1 永久一次可设置999
*ckIndex：int（数字）类型 指定账号抢专属ck 0为所有账号都会抢 1仅账号1会执行该api以此类推 不支持同时多账号，多个账号请复制api改不同名字
*endDate：String类型 券结束日期 不用时分秒
*qApi：String类型 券API地址

{
        "qName": "券1",
        "qTime": "0,10,14,20,22",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 1,
        "endDate":"2022-11-6",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22S91YWHHPNW5urPnsRoiKnwDEznn%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D7ECD4A55F25E49BD6BC3EECBA60663CC2E0E984B90EEB5F17D2D0AE49DAA5AC9B2D633BCC939BFDC59F9F50BD567E342_bingo%2CroleId%3DFDD67B59FFD2DE0B9E427F5EE74F57C74ABB5C798565C9476F47A714EFFB6C28CDAC08D7BB7341086A1024A1F255FCE32430367B4CCA902776D6294A25F1B54798DD6CAA8C1C1564BF5A76FEECBE9F9A691438A15C5F21EEBAB4CDAF2D8A879356B977FEA44F925267652B3637550D3278B99F7EAB6D9E94EA5BFCF0345B370A2FD98C55869D5626DAE2EDF464E4EEF22D8CDA1821ED0F1AD283476A6697685BA098C082346D8E3B399EE755D228ED6F_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FA14B94A1DE95C3BF151E5FE7C2E5F414_bingo%22%7D&client=wh5"
},
{
        "qName": "券2",
        "qTime": "0,10,14,20,22",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 2,
        "endDate":"2022-11-6",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22S91YWHHPNW5urPnsRoiKnwDEznn%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D7ECD4A55F25E49BD6BC3EECBA60663CC2E0E984B90EEB5F17D2D0AE49DAA5AC9B2D633BCC939BFDC59F9F50BD567E342_bingo%2CroleId%3DFDD67B59FFD2DE0B9E427F5EE74F57C74ABB5C798565C9476F47A714EFFB6C28CDAC08D7BB7341086A1024A1F255FCE32430367B4CCA902776D6294A25F1B54798DD6CAA8C1C1564BF5A76FEECBE9F9A691438A15C5F21EEBAB4CDAF2D8A879356B977FEA44F925267652B3637550D3278B99F7EAB6D9E94EA5BFCF0345B370A2FD98C55869D5626DAE2EDF464E4EEF22D8CDA1821ED0F1AD283476A6697685BA098C082346D8E3B399EE755D228ED6F_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FA14B94A1DE95C3BF151E5FE7C2E5F414_bingo%22%7D&client=wh5"
},

{
        "qName": "万达免费阿凡达G",
        "qTime": "10",
        "lqSpace": 999,
		"ckIndex": 0,
        "endDate":"2022-12-18",
        "qApi":"https://rsp.jd.com/resource/lifePrivilege/receive/v1?lt=m&an=plus.mobile&uniqueId=71704447587533"
},
{
        "qName": "plus1200-50G",
        "qTime": "0,10,16,20,22",//时间段自己加 
        "lqSpace": 1,
        "endDate":"2022-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=4MLKKICY5SALC7LJ7H3KIW7GVRDYMJ6RSJ4PJY6ACWPJIV2RL3FAUUW5W27NO6SOWVWTSAWUVPDFNTWYK2TEDSSJGE&fp=9430a47a403ff89cea3bcde389cf9b65&activityId=qyb_0934&_=1654178406393"
},
{
        "qName": "plus1000-40G",
        "qTime":  "0,10,16,20,22",//时间段自己加 
        "lqSpace": 1,
        "endDate":"2022-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=4MLKKICY5SALC7LJ7H3KIW7GVRDYMJ6RSJ4PJY6ACWPJIV2RL3FAUUW5W27NO6SOWVWTSAWUVPDFNTWYK2TEDSSJGE&fp=9430a47a403ff89cea3bcde389cf9b65&activityId=qyb_0933&_=1654178617554"
},
抢券提示很抱歉的可能是服务器ip黑了或者账号等因素
api.m.jd.com域名的post请求券名称不需要带G 会自动带log请求
rsp/lps.jd.com等域名的get请求券名称带G
上面为注释不会抢如有需要复制到jdYhqApiListMy.js里 下面才是真正会抢的券 
*/
let apiList=[ 
{
        "qName": "极速5-2",
        "qTime": "9,12,16,20",//7,12,16,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-01-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D17040E307B03DEFB00E5CDAE96D88725A9B01A13FB809E60B0B8B180EF9FCE28D66A3856707640BE93D2231EC31B612F_bingo%2CroleId%3DFDC4FE2CB6E8465BBB9D6363E08F7707E70D0FD45976E0E62F3BFBADF0418D417EC01D90F8386756942643AB98275D35DD375A201709D9F539BFB7D28BDC4270E8AB218F81659B97787DD39608E12A232F8CA444031CA72AB7E89A718E7BD157A1B048F195674A0CA4CC0B723F093EFABC45A83A77F5751F78B4A261A65A8AD059279D7A6075547B3E5F5CF63AA2829745616CD39877EF1C6455BF2025765A3D7B3C22AEEC9207465CE9A3FD181D1766_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FEF5A140150C8B8E84572CC2964326660_bingo%22%7D&client=wh5"
},
{
        "qName": "极速10-3",
        "qTime": "7,12,16,20",//7,12,16,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-01-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D00B0D3E7C6647F2DCBB27B83B407F64CE3B4DEFC1DA4E5A7E162A1F6BE48622224FDD1CB8ABD942923E6AD9A9ADDECB0_bingo%2CroleId%3DFDC4FE2CB6E8465BBB9D6363E08F77074127494A73563CF622D06B636ED63016F784DC6C22809244BB407156BA68832A94A000BBB29A02F8DFEE3F6F3AAEFAC35F2F40E295E2EFBBAFAC867171AA83A62CE6AF5D0AB8561EF7A574467192D524488F0CD2B3C484DDCA68437B5B94F0023CA427B0DFFEB5EBEB4408B1BB7A6E591C2E39374FC1200B387687951ACF561ACEB9FEFB74E77DD94D026CFC1BD1147807ECA1F6FC3BBCEA8A1ADB36D486BB33_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FA0E12E677CB602C7976B687939B34043_bingo%22%7D&client=wh5"
},
{
        "qName": "极速20-5",
        "qTime": "0,10,15,20",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-01-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D0F45EA9B8E323F4EA787E9A6036FC561528FBBB3015348A41275CC16CDE1F575036DD59B9D7FE0A751D46F3FD8308D7A_bingo%2CroleId%3DFDC4FE2CB6E8465BBB9D6363E08F7707CB325075CD7E7FC6926FEE6F0BF0BEBFB08FB9E7CCCD8472C8E537EFBC362316E1E6F539233CD596A19F1C4255A3CC23DAAAE4A0A99C70CC4E176AFDE126745A5020CE923681271EA2826534710380B423B0EDDA02EA5A174522004DCDE758C1163E554D7837936D73F5623D6D99C43D90896F28D5F4ECA2D45A49CD8D007E52B85BDD93F0171833130BC303740577168882A00E11A467E64F33CC61FE85F8F0_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F9826D57E5CAC3EFE9C0E1D98D905EAC5_bingo%22%7D&client=wh5"
},
];
module.exports = {
  apiList
};
