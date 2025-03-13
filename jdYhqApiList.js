/*参数说明
*qName：String类型 券名称 不能重复
*qTime：String类型 领取券的时间 小时 多个用英文逗号隔开
*lqSpace：int类型 多久可以领取一次，1天可领取一次就设置为1 永久一次可设置999
*endDate：String类型 券结束日期 不用时分秒
*qApi：String类型 券API地址
{
        "qName": "极速299-30",
        "qTime": "9,12,20",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":""
},        
        
*/
let apiList=[
  {"qName":"100-50话费","qTime":"10,15,18,20,22","lqSpace":1,"ckIndex":0,"endDate":"2025-03-31","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223aEzDU3fpqYYtnNTFPAkyY3tRY8Y%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE744818A220D449927D70F4661C09967FD9670FEC889E9810E1CC5F2E89FAE02574B1138C168420D89C4E34D7357FD1A_bingo%2CroleId%3DED984375AED7DAF959DB735186B688BFB2B9C2D56BEEC887A3AFC0EDC926FF76672C71E21EDE6DE1A5AC646211C5927E25887277BE410BD86E78991B107967FC9FA7B583CB49772B356411278F6482CA34E54EB4062A4F79D598808DA6917A3178C7CB34BB8315B4B7E89EAD0485A82196DDDC5DD2F5FEDCAE2C814082ECCA4FF3C06FEDCCFEBE39AE950F68DE223784FFC6F19D3CD536ABF29E189EA029C4B252E891D656EAE5224E16539BCE0CB1BD_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FFB716C8D859DBECE25A92B044A278A67_bingo%22%7D&client=wh5"},
];
module.exports = {
  apiList
};