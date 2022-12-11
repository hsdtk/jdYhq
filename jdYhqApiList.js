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
        "qName": "plus1200-50G",
        "qTime": "20,22",//时间段自己加 
        "lqSpace": 1,
        "endDate":"2022-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=4MLKKICY5SALC7LJ7H3KIW7GVRDYMJ6RSJ4PJY6ACWPJIV2RL3FAUUW5W27NO6SOWVWTSAWUVPDFNTWYK2TEDSSJGE&fp=9430a47a403ff89cea3bcde389cf9b65&activityId=qyb_0934&_=1654178406393"
},
{
        "qName": "plus1000-40G",
        "qTime":  "20,22",//时间段自己加 
        "lqSpace": 1,
        "endDate":"2022-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=4MLKKICY5SALC7LJ7H3KIW7GVRDYMJ6RSJ4PJY6ACWPJIV2RL3FAUUW5W27NO6SOWVWTSAWUVPDFNTWYK2TEDSSJGE&fp=9430a47a403ff89cea3bcde389cf9b65&activityId=qyb_0933&_=1654178617554"
},


{
        "qName": "黄金-300",
        "qTime": "0,10,14,20,22",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-6",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22S91YWHHPNW5urPnsRoiKnwDEznn%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D7ECD4A55F25E49BD6BC3EECBA60663CC2E0E984B90EEB5F17D2D0AE49DAA5AC9B2D633BCC939BFDC59F9F50BD567E342_bingo%2CroleId%3DFDD67B59FFD2DE0B9E427F5EE74F57C74ABB5C798565C9476F47A714EFFB6C28CDAC08D7BB7341086A1024A1F255FCE32430367B4CCA902776D6294A25F1B54798DD6CAA8C1C1564BF5A76FEECBE9F9A691438A15C5F21EEBAB4CDAF2D8A879356B977FEA44F925267652B3637550D3278B99F7EAB6D9E94EA5BFCF0345B370A2FD98C55869D5626DAE2EDF464E4EEF22D8CDA1821ED0F1AD283476A6697685BA098C082346D8E3B399EE755D228ED6F_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FA14B94A1DE95C3BF151E5FE7C2E5F414_bingo%22%7D&client=wh5"
},

{
        "qName": "黄金-520",
        "qTime": "0,10,14,20,22",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-6",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22S91YWHHPNW5urPnsRoiKnwDEznn%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D6EC5DD0B64F6023792BD7E8FC629CF2345BAE5FBA3AA23E802940A98FA33DB3A9B0FE1F8496605E2D0B918BE9E65B386_bingo%2CroleId%3DFDD67B59FFD2DE0B9E427F5EE74F57C7EBC7A7985C8055FD1E41625E545FDE71675B93CB2B161D8D6E606FB50385C2B74908A341FE22E08029DB0F8BB3D3E26D9970DBB6F2E13DB65B5AF877138F9885825AC6CF125505111CCF81F724B59C6D947074B9A504B71D146E9CFFE57710E46029A632234FA4EDAA4A124AB06F9A5F48135E6CE5AF979A1C05187F2B385F6B4C4E11F1805BD16A6D5CF651D053D02A64BDB0F982977314CF59B18CBAD0AE0E_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FD987FAB0675BA2791CABD0B2184F00C2_bingo%22%7D&client=wh5"
},
{
        "qName": "黄金-400",
        "qTime": "0,10,14,20,22",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-6",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22S91YWHHPNW5urPnsRoiKnwDEznn%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D40B09C815D4BAF915DD570278B0EA46DAB4615AA09326FD0813392442889927E4D515514366C254C437DCDA83F69D9BA_bingo%2CroleId%3DFDD67B59FFD2DE0B9E427F5EE74F57C73F49D6B4C344C067C1D7BC8D9E53C63B57CC11CBCDB07A247F70DBBAED7C29E79F9BFEC44DF30113427BE50BAC8B024AA9573FB64F7BFEC60379B2E8B0AF6DDF7C97C55EF6D043103BCAEB62CA4E33BFF07416730A2AE58D052A395E92B043744EA253D27444D6DA710306AC6D8F0677A13CC49646AFE3CB0CD265DBB2021888691FF3C3757E3718BCAE2BB48C267FE199160C9CEC617C9DC3ED69F87D82CEAD_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F09898C2463C3E235413D5A15B4F53EEC_bingo%22%7D&client=wh5"
},
{
        "qName": "-3000手机",
        "qTime": "0,10,14,18,22",//
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-30",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%224R1aqRFZyyrmRyaZMjhhTXQbxco4%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D3AAB994EEC2A8BAB84D70E0AFB899BA623EC6CCB80F2E73E0B2F7960B4D5B9DBD3E4AFA62F3C7BACB5F955D2BECF2577_bingo%2CroleId%3DE31591E684F6C327744472AE78D52D4A2D23E81FC2893E87D2335A9A48903F9B7AF356AE4ADC896E109FE1E40CD808BFC61069FE247E9BFD1A363A9770AEDA793F5D00D971B11F072254B4A338834C305DE96E92910EA004D1692E1327B95E0B974EBCDF2EAA820C385081F3F61B94702CAC12BD2FD41F341D0959B5FA207F38823EE5A6D61DA0E9221F30DF478D59A9D045EF607D74DCC2C7B124703A1CE0AC645F9CEFC9E94E94BEE7D14AEF911231_bingo%2CstrengthenKey%3DFABC80E88456FCFF695D50D3BB567ED6686F083C7B72FFD775F20E6C1CBA537101A6E3BC5D6334CF08F852DBF9200A69_bingo%22%7D"
},
{
        "qName": "2299-666",
        "qTime": "18,20,22",//
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-13",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22UFLuHKSB4od7TG6XEu5zSVkwaKz%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D8E3CB972D005BA6AC14254A516577D680B19F1371C01E9BE820DC8DA64BDC25F46F774A19B2F5035445088121AD1EF2D_bingo%2CroleId%3DA720B9F947B71E8B1681664C0203C37940CEC3AADC75A207A1348CB9DFEB1ED8EB9FE63B057CF958E6228333FEBF8029A4E4E69565ED1EFAC87F4635A73C0C9484209D850F3AC5A774DDAB171D67B9C9BAFCF4BD445836EB68A4D693329F59288EF2BCE80BAF8178B133E6700406B4EEA2F4E67E3CF0B124B9725920D49D0E54B143AD369BE99BFAC4A768BCB09020E80D9F68969A7F639F9D4B167E52CA1112D1A9691FF670B54549215936B73FE90B_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F114E67216F48BFA7DA312CC2AFDBFF46_bingo%22%7D&client=wh5"
},


{
        "qName": "59-20",
        "qTime": "0,10,14,18,22",//
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-30",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22mcGQa2HPDjDMD96An6T5y3L7GdHi%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3Dm3a0t3e0r5i3a6l8c8mcs3f3e48bc0f8%2CroleId%3D90328163%22%7D&client=wh5"
},
{
        "qName": "家电5折",
        "qTime": "20",//
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-12-11",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%224JoMQoF2oL7ZKCxTcHxRgjBQXkMt%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D9731E2BB6C3B787DE158B57C6E8345C02D62FDBA31B10B8FCCAD07C65499124258F3110F57448A3669ADBE32B31A1AF4_bingo%2CroleId%3D2C462F604EF0E79A08457F2ADFD7401031B4A8DF40335990846BF355D82817A03E745A49AFAB70EF3EED07584F7E886AF70F4E9971CE56C5AA9E0753137CF66B3C5247E4D04C2ED3E6D69E5D6936817D564A17AA7E3527667651637B26C2F5E1D44AF1F2536C9CB383C2581601A0C4D32BFBFBD141AAEF40078F30BB30A81241B333BCD90D6CE7E199D6C47C7ABF899215A8F5457221B1DC3A7A1754559B04B4C3FBFCE0739E36A51EC912514F8E731B_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F0D4AA2F107AB2EA28145961CF32D3E19_bingo%22%7D&client=wh5"
},
{
        "qName": "全品1000-50",
        "qTime": "20,21,22,23",//
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-12-12",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223qHFEYDE7puGzrQLSbaCxdyzUs56%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DEC54602C68426AEB7D2380D347D30B753E642337FCD29342FB8A59251A8CBD1DE383F6D54A65E321E151289C0C50A05A_bingo%2CroleId%3D562564DF9F50CE740DC2CF52863827C60DEC13569A6BBC87B83AEBF5317B9ED72CEF0D64EE2FF283AC3E73C14B183167D56550EC9088B874AE91B299625A6DEF67132D96C1E294B028759ECC09A9FCCD93488B13907BA475DA0A56DAC561468AE5F6CFF00F8F533CBC4C919B75CC75199C45B212D3EBA1EFE0723A428E956609C2D0E94EECC31A2398D0DE17C74D27FF2056866CD72227BC01F1360CF293CA2F11819C783294CB2242BDAE52B94FF6F3_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F3E84037B794B0478EBC819960CEAE72E_bingo%22%7D&client=wh5"
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
        "endDate":"2022-12-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE61EB52E0A331237F0B470C8AF65D51B5FD2D2E342B456634ED3578314B369472BBA1F7498256886A88D3545CC92FA4D_bingo%2CroleId%3DDFA527DAB656121EC55AAF58C1F10841E0CE314A286A8DE6C70D82707276D5B0B24F235F52C4C47544F685C1DD3CCC5A3BE6EC75A9EF2C880EE0A4AAA6D1A0A99ADD745845C986F781916A0DEB7F8D02051CFD648B28848A8AD6FBA021A942E055ACD167E53995DE31CCD0AAD83F63D32B7567CC0F51819F07F10D3957DC80934283C81C47D15D6EBBB52B995906F37749D686B7927813B569E90D399FAABC025E46AB9BC6DD37938F33C8AAD672A5F6_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F6DF1569AF777E349F4025DB8ADDF3172_bingo%22%7D&client=wh5"
},
{
        "qName": "极速10-4",
        "qTime": "7,12,16,20",//7,12,16,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-12-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DAF55BC22EF3EBC44F28919EE34B3835ABE5C573C117F01A6A3D8F8CF3C168A08138963DDFFE0C2AB8E9AF062CFAF191D_bingo%2CroleId%3DDFA527DAB656121EC55AAF58C1F10841B12A24EFFA45F776EF6BD09851D33D26BB067058CC0082933425C3E1E6DF953520E5E1F68BE7E6A21C5042664648B378401C1007A7FDF66AB9FE83FCA0A4748DF9E14C58CF9FC94F8EB3FF0F9B07087C4EBFDD31AD0F7200E04B7970478A47AACFFF6FDA8E3D6451E47E55A37B6900FBF1A7FF0F4644F923434338ABA8E259E38B77B527F8B2FF75BB306D8ECE1A79E5F876404B78B7B89166BFE355548CD3C9_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636F5D7D54FB8D978A35D551BF500F427A8D_bingo%22%7D&client=wh5"
},
{
        "qName": "极速15-5",
        "qTime": "0,10,15,20",//0,10,15,20
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-12-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE5C4099AC12CA45D0E1392A0395132BB089A2C409B4CDA6B70FD5029A59C3E0B3C181682F3E1732FAC58DB24B9848D90_bingo%2CroleId%3DDFA527DAB656121EC55AAF58C1F10841784A28A4284BC0382CA98D709DCB6B71FC4A630392E6611D106F0995B2F5BE5A55014C97F678F311D1F5391B5C888BBE08FCC8F75C99007DAF32582F8576B48DA67A62120CC0DDA08442F340952D85BC2E2FB97F301C90CC7B193B14CDD4754A9928B8BDA78F902872C1CF3BF14B6036166B7A5C816BFD3C4F6339B37B414D568D15CF131A6F4741B62467F6EA9471A744455ABF3F0DBADD441E025231C2B3B1_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FC3FC1141B7352647688B99A1C9611D42_bingo%22%7D&client=wh5"
},
];
module.exports = {
  apiList
};