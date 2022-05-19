/*参数说明
*请不要修改此文件 如需增加自定义api复制此文件改名为jdYhqApiListMy.js然后修改新文件里面的券 注意会同时加载2个文件的券 所以不要重复
*qName：String类型 券名称 不能重复
*qTime：String类型 领取券的时间 小时 多个用英文逗号隔开
*lqSpace：int类型 多久可以领取一次，1天可领取一次就设置为1 永久一次可设置999
*endDate：String类型 券结束日期 不用时分秒
*qApi：String类型 券API地址
{
        "qName": "极速299-30",
        "qTime": "9,12,20",
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi":""
},
{
        "qName": "9.9-3",
        "qTime": "7,15",
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://lps.jd.com/aip/sendCoupon?batchId=0&roleId=0&encryptedKey=CILaySMSIGM1bWFjM3Mxb2ZhMjQzYjViNzgwZDM4NGZiNmMxOTZiGLrkppgDIiA2ODkzZmNlNDI5MmQ3ODkwMWViZWVlOTI3ZWVmZjY3MCjmjYiUBg"
},
*/
let apiList=[    
{
        "qName": "极速15-8",
        "qTime": "9,12,15,18,20",
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DDDF1B71D0AF91A8547973CE5362A890F18C8E73AAC10BA9179CE5D2D745E95AC9AC125029761397270C947AC9F5E11CE_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E2112EC5A32B22271AD04523B3C66AE5807591E0DB913F0F40F86F97AAA49D12C568D47FEEE50418AD25C6B23D81C476A40CB07BCCE74C4EDAD2E0D1BCF515F06DECEDB16967A37448F69C2724C57AC42E7ADB9F87C373D59446E1444C625AEF9F351984FABF92A6CA2F66933FE0A986E40D792FECA0F40E072709E123702285C23C58DD223503AA76B6FCB33A399D3366193_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42ACA0FE1926F09E921F485C960EFB3462C_bingo%22%7D"
},
 {
        "qName": "极速5-2",
        "qTime": "9,12,18,22",
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DBCE52145EC2FBDDE212899674C8CA1C12A3A133EEA5D70CB9D998AF6B3F4648C22AC20BFEB2B797D1292322C150A0DC2_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E211241BC51D1C03478640D4EF32FA22832B7C93468B462C8C368D7E33CA18F54891E8F724E3FA38C39E3AFF697601E6A963307103764559652634BA6CCE6381F1828B73F349076FAE36A8552CE465F1059F3751CEB2F155574F89360443DC43A466462F2CAD351D755B348032FDF6FDE20CF6F1CA1BF8ECAB03B327485C094572AFC3D721B39710B411CE75DE205FEB88AA9_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A1ED8F3383A7B5DC402D2980243A1312E_bingo%22%7D"
},{
        "qName": "极速15-5",
        "qTime": "0,10,18,20",
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D751709DD793408174D56C44D3BFC3C434680AB42380C39D573683566316F1F090B3C468368A1FA0640C15E1A2A6BB25A_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E21122587E42E9489C92604E9B1CD426BF61F9DA8FF4F6F381F7CE14913B40C4A4E49DBD8A0F39C4428871CEA2BFB7AC136DBBC79AE321F4D5D092EFE0978EEEDB540EEE7D12BB491ECBE8EED47E3A2038461275DC7CE64BA016EE4FED74741BE686315495C99C4E9322C8F1B1AFD867E3599767D7054A4E0FC481F922E410D2C20FC568C5C67F6E2232124870EEC42166F6B_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A83880C27EA00E5A7DF564D095F19F994_bingo%22%7D"
}
,
{
        "qName": "极速19-5",
        "qTime": "0,10,18,22",//0,10,18,22
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE72F2D6FD3B257AE6EAEEF81FEF44D9C3EFB9B5E0F0E11C4562D68BDA7BA69BF5C4E716FB9BBD7B1678E83551EA3A72E_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E21120520F1A5AFE5C9E8D77BD263F6726B9E3576C6C5571777201DA90CF204F2336AB211D7BA6D0E7255BAFF71BCC9ED7782F4BB5E97DDCA47183788BB228E79E0C3D6D9613C7FC7F959A45038CC7BDEF82DD7E61013399964509B5CDEF36C73EAE9EB6B63DA849EA90E7C87A96AB3C6FA44C65C483C9EECCB166A80C30000930072AC3B866785B1639C2C26FE898F623B48_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A42C9753D63098BF8E18509B9BE302B5B_bingo%22%7D"
}
,{
        "qName": "极速10-2",
        "qTime": "7,10,16,20",//7,16,20
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D99E9BFB397BB9E081C3D211644F4D63B80C6629BF10290DBE13C6C11E1DF025FE3774FB37875ED1B720ABB1A6023D3B4_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E21129412DAD4469A00C14E234FFC59430A3B03E9CF1047D2889AA3D9F3A3AC9845F06DD6177A62EF3A4A570EC8E5C227CE0E4892C7A1A2B984AB9B022706661B4828769759F089C6F22E26FB7BF32005D75B1BB6CDBC6F14191980CD819AAC1EA39539BB607CACE82D7FD0DA2D81160FE981D268AE832E62FFB08E4FFCF09090F6F1500E99612952CF8BE19FECE40CAA4C79_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A8C0EF783D810D5CD0608FD5820DD37F6_bingo%22%7D"
}  
];
module.exports = {
  apiList
};