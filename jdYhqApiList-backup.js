/*
备用券库
这个文件所有的券都不会抢
如有需要复制到jdYhqApiListMy.js里 或者直接改名这个为jdYhqApiListMy.js 删除掉不要的券（不会删除就改券的结束时间为过去的时间）就可以
{
        "qName": "",
        "qTime": "0,10,14,18,22",
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2022-11-30",
        "qApi":""
},
*/
let apiList=[ 
{
        "qName": "plus1200-50G",
        "qTime": "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=4MLKKICY5SALC7LJ7H3KIW7GVRDYMJ6RSJ4PJY6ACWPJIV2RL3FAUUW5W27NO6SOWVWTSAWUVPDFNTWYK2TEDSSJGE&fp=9430a47a403ff89cea3bcde389cf9b65&activityId=qyb_0934&_=1654178406393"
},
{
        "qName": "plus1000-40G",
        "qTime":  "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=4MLKKICY5SALC7LJ7H3KIW7GVRDYMJ6RSJ4PJY6ACWPJIV2RL3FAUUW5W27NO6SOWVWTSAWUVPDFNTWYK2TEDSSJGE&fp=9430a47a403ff89cea3bcde389cf9b65&activityId=qyb_0933&_=1654178617554"
}
,
{
        "qName": "plus500-20G",
        "qTime":  "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2023-12-31",
        "qApi":"https://rsp.jd.com/coupon/receiveDayCoupon/v2?lt=m&an=plus.mobile&platform=3&eventId=MPlusCoupon_Get&eid=PTLFZ7KPMK6CJWYTRLMA32NGOGMPD57I4UDJJ6MJJ5IJPECJONE6Y5U7WSQTP3MLG4E356J2QR3FEFPORIUAYPQAOE&fp=81d417f45a19cc4d16aaa58cc47e6297&activityId=qyb_0969&_=1668519499769"
}
];
module.exports = {
  apiList
};