
# jdYhq
jd_yhq_api.js 自己修改里面配置文件
jdYhqApiList.js 需要抢的优惠券列表

拉取优惠券
cron 12 19 * * *
ql repo https://gitee.com/cxtwg2/jdYhq.git "jd_" "" "^jd[^_]"

领取优惠券 cron请修改为
55 0,1,6-23 * * *
