/*参数说明
*qName：String类型 名称 不能重复
*qTime：String类型 执行的时间 小时 多个用英文逗号隔开
*lqSpace：int类型 多久可以执行一次，1天可执行一次就设置为1 永久一次可设置999
*endDate：String类型 结束日期 不用时分秒
*qApi：String类型 API地址
{
        "qName": "",
        "qTime": "9,12,20",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":""
},        
        
*/
let apiList=[
{"qName":"黑5鸡蛋","qTime":"10,16,20,22","lqSpace":2,"ckIndex":0,"endDate":"2025-06-27","qApi":"https://api.m.jd.com/atop_cart_black5_rushBuy?appid=jd-super-market&functionId=atop_cart_black5_rushBuy&client=m&body=%7B%22provinceId%22%3A12%2C%22cityId%22%3A904%2C%22countyId%22%3A3378%2C%22townId%22%3A57899%2C%22bizCode%22%3A%22cn_retail_jdsupermarket%22%2C%22scenario%22%3A%22default%22%2C%22productId%22%3A14857%2C%22token%22%3A%22B959813722FE91581D1B2F6187DECB0FC3A45E00F93E3FB8BC30625E2DA18EC18FC81979A5EF524173C01AE2915C25E890D9D65C3958C77B37A07AABF1C7F10C97D9AA5BCF6FC0A1F376EB144338D62E%22%2C%22babelChannel%22%3A%22ttt29%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D"},
{"qName":"话费100-50","qTime":"10,15,18,20,22","lqSpace":20,"ckIndex":0,"endDate":"2025-06-30","qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223aEzDU3fpqYYtnNTFPAkyY3tRY8Y%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DD13B7F6D8192FF5BE243F5A3E07A45192B989C18A5F5BDD00F4B07608E0C8522C563EA8CFE983A8FF87F59DF95B22044_bingo%2CroleId%3D6D9DD4D7C626122B36F1784470F60C64678C1BF27E062FFFCED363DBD3ED0F2D06DC287BB6993CD7804BA46B9D64EC316140F003AE56D6EAF29D0A2EF1AC05E3AF9ECF8EB575CF9EB4009B7E9C3DD886A70485B3EFF3B0224C3C97A729902D6AB776DBC548E78B71F1C35575090BBF7655C843F2D7B1E9E53538BD6667846B1CC85EB207305ACEDA41C7C5699E541680891DA6ACA3E80D53CAEB230E81B7343B9C0DE34793899A7C0388CC0FC804E96A_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FBFEECB8C17453D938D267122DAFDCA5F_bingo%22%7D&client=wh5"},
]
module.exports = {
  apiList
};