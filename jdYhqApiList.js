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
{
        "qName": "京喜299-30",
        "qTime": "0,10,15,20",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%224P7TtgZ23cTUU3tpzqTGzNZrUY83%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D7ADD6BF71EAA707D69708EED669B846D855B76B8F879D473D2CC5DEF49792D27068DAAEE7EFF0BFEAEF6CA0977ADF2D8_bingo%2CroleId%3DC75520B4ED3BA333F7FE69C7506F118AB970ACEB2A79CAB4FC4A3CCFE7B02EF4F37ADAF9F3526026DE102952A4C8789248DE05B74DF7DACA63CD105DD94E0C37E1C7F03F7923DF690BA3C79384B7298575374267FC5C939EBA681EDB35AF3122591694B3081C6FB293234A9F217BAFD7E45E4E2DB0419430B376DF2384AA22701F841108DA47AB6E53C343AAD789E9B836B19CC0687D653E1B150BD3376A7677_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A9E603D5E144DDD0FD0144715611B5787_bingo%22%7D&client=wh5"
},
{
        "qName": "京喜5-2",
        "qTime": "0,10,15,20",//7,12,16,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%224P7TtgZ23cTUU3tpzqTGzNZrUY83%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D3789F0339515D7F8A462E9E202A8029308D33CAE77EA2C04755A6431DA0E61CB4C629040DB4F1CC276A948F5B94813A2_bingo%2CroleId%3DC75520B4ED3BA333F7FE69C7506F118AA100B036344F40481466BC9A86AA2E4CF314C07FD27C4CB54B29E108C20D8EBAB3B30811648124619A2242E27C41C775119D6CB75654EDC0EBE91699BA24933A3FBED0B6F749256B2BDE541FFE6AE58FC7100341CB6DD62E6C4C7135B7724940430DA3106D39D68F06A6DAFF8D3AC4CDC34EF995894AD9E9D6DD2ABA695F9DB812F4C1ECAD2708F2E95A0DDF422814ED_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A860EE614D133673FF5430AE53AC80185_bingo%22%7D&client=wh5"
},
{
        "qName": "京喜9-3",
        "qTime": "0,10,15,20",//7,12,16,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%224P7TtgZ23cTUU3tpzqTGzNZrUY83%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D7689E1D6B9FC49A44626E4041BDA1B0E910CF6AF1169B4F8CAC751D9CF4DBB82D545DB3409C6198F90D716AD4AFD0F29_bingo%2CroleId%3DC75520B4ED3BA333F7FE69C7506F118AB0804311901626F630CFEF06574CC4C4D89530A9B4CE2E1DF078D927995F8CF113CEAEAF82B25A5B21FEE8CCEED11E33726D2A2D214D517CB45E09966DF7709EBDD390889D9A2648BCFED7A29433D9C0B6DA57863FBAA72C200577EAA52A422FE541E537C0F01E54A8C75C5A393504574B7EED26F8D785C9E85A197847DA9D3BAB238CA61B98EAB272F70AE86DD6B2CB_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AFFE6442423E1A8770F5F8C4772B17CB1_bingo%22%7D&client=wh5"
},
{
        "qName": "京喜19-4",
        "qTime": "0,10,15,20",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%224P7TtgZ23cTUU3tpzqTGzNZrUY83%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D0BE7083CE9CB8ACD6A202682E2F42C1B361F3B534606AED562480DCA722620560DD3EAAA24F1A12E41D3FEB530F18274_bingo%2CroleId%3DC75520B4ED3BA333F7FE69C7506F118A158D6EAD250B561B6619F3D5BE2ABA0AB0D68ED45745B6C5BEA8DEAA937A922BEA2749C67767542475F735417DAFFBADBC942B843EF8929148B07B7D753EC9295AA242D095F778134674151A0A9CC1B81BB49969B541950F5C42E31BA87107F133AA2056716B4F7C29527E2E6164D0A9F4EDA6880D90D6DDB68E19A945E198C0FBC44D079E0059439C08DC63DFFB8E05_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A6BD13A457F10B52A8D2F30302FCF387B_bingo%22%7D&client=wh5"
},
{
        "qName": "极速8-2",
        "qTime": "0,20",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-03-08",
        "qApi":""
},
抢券提示很抱歉的可能是服务器ip黑了或者账号等因素
api.m.jd.com域名的post请求券名称不需要带G 会自动带log请求
rsp/lps.jd.com等域名的get请求券名称带G
上面为注释不会抢如有需要复制到jdYhqApiListMy.js里 下面才是真正会抢的券 
*/
let apiList=[ 
{
        "qName": "极速100-20",
        "qTime": "9,20",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D3C2A44E3E6443FE977CA14237EDF89D54C0C40C7CF1DE3E02F6839A1225C651A06A50B5C4A67971F86E3A50B1A1CB8BC_bingo%2CroleId%3DA6B3B67B97C45D6F4E42FE865344B7C2C8435896FD3338659A032EA359A89DD3098C0EE4F55F1E8BE8674A6561EB257F7309A52901BA954F1EBF65E3681BF61E59FA2A93AFDF129E20C42C0B64336DB955B6BDB484DC7239102F86EC8AB8F2A45FA1D0D2B13C720762134D87506E90446966916A5E05088909CECCC59487878F23B8ACBF3D9EDAC5CD41860680622A755F23F9A8B45B78D7933EFE09ACF78D547A7701D3BE6127EDADB06C6F0A3C19CA_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F6671ACE93A58DFDAB43BFB26C7E15267_bingo%22%7D&client=wh5"
},
{
        "qName": "极速29.9-8",
        "qTime": "7,14,20",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D3A22A3D66AB7EA477828E462300BE1121A584BD7D927EA36435C78E5B07A3D6D6BF7A7C0DA1959BDC6BC0F0774601775_bingo%2CroleId%3DA6B3B67B97C45D6F4E42FE865344B7C2DD04522FD699DB5ABD481A57A82F1BE01E45FBE91BFC9DE04063BA01C60A2A1912942A3937F55F6D4E0D28285B362EFCF37EBE9349465167E942FAF19E741C27708729236A34F5443852CA293A6C8804A930D6EF8B3AA0F3B0B3DD0A2FC0596D4AE0E286CF579794142874A8794BC85DABF46C92982681A49301CDB70FD2B3E4CBA52A745B66373CD78BBBEAC1913E73496E7292F03B426E7E226D621C99B8D7_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FDC24E75E3384690D644D6D70EF1B7329_bingo%22%7D&client=wh5"
},
{
        "qName": "极速19.9-5",
        "qTime": "9,20",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DC1B741001DE2C6210DC766E5E472203E0F7FF74C083DE9A44ED8B6D376EFA9FDD9FEDAD39BFBB2C9757E5F8B0D3405E2_bingo%2CroleId%3DA6B3B67B97C45D6F4E42FE865344B7C2FD6F3C4B05220F7CD20B145A9037E6F52DA01DE553F6368304FFBA0B8CA3BFFD4A2FC52F4C37CF971565447D802D9009E31542C3649D4B0E3E662C820B746AA36449BF60EF99FCD397B9B49931474CC03B00DC4028DF1E9E3371A63C7BF82A1DDA020E018E6FDA9ED23F18CC5FDFDECDA4DCAD8F2F60DED6E3E0ECEF6491E91A932268338F14C99D14F0AB76690F5FF6A7609EB10450911F347A098565312272_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F617B03CCDD18494792DC0EC95685D414_bingo%22%7D&client=wh5"
},


{
        "qName": "1号店会员卡9元",
        "qTime": "10",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%224SLvMz2isQNCSSdF8JuAZivTncPB%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D6FD733E5DFDDD7FC150B6350B6624BFC97930F10456120BAF1D69B0C1C35C21E6567B2F4E530B8D91B95BAD0E4A57A96_bingo%2CroleId%3D59F1FBE77D3D5ABE1E90C9698306C91AFDEC670545C6E67E2C473E8EF6AB7D77E09EC50014153724695D54D840553374DF4A3F6D68F943671D56DE6178564445D3E23548259BBA49C937060CDF4D3F09356A8540520E609A5920164C947AEF1F368C6221389EF3F20109722692BF9A28B1C6B228B9D9B10304ADD83EC64DD9839D62D87B9E936F1E0CEB385DF508CDDC221DD7BFEAE91226F999AE6EC651AE61201B33646EF724C5FEA63AA8AF0DED52_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FB2F91DEC91B8E7B67ABA69843F36BDC0_bingo%22%7D&client=wh5"
},



];
module.exports = {
  apiList
};
