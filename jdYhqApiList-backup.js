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
,
{
        "qName": "plus105-5G",
        "qTime":  "0,10,16,20,22",//时间段自己设置
        "lqSpace": 1,
		"ckIndex": 0,
        "endDate":"2099-12-31",
        "qApi":"https://api.m.jd.com/api?functionId=coupon_receiveDayCoupon_v2&loginType=2&loginWQBiz=&appid=plus_business&body=%7B%22platform%22%3A3%2C%22eventId%22%3A%22MPlusCoupon_Get%22%2C%22eid%22%3A%22ZTZNNSE6PQJWCVS5DIORLCJG7OKJKNSEPGWOOAFHAVLKMFBDABXW25BAMDEMRMD4PAOZGMNVHKMBHS64C6QJ2M7OQU%22%2C%22fp%22%3A%225d2eebfdb79fb4e44739c293e4e89d30%22%2C%22activityId%22%3A%22qyb_1002%22%7D&scval="
}
];
module.exports = {
  apiList
};