
# jdYhq
一、拉库命令

名称：随意自己能找到就行

命令：ql repo https://github.com/hsdtk/jdYhq.git "jd_" "" "^jd[^_]"

定时规则： 25 19 * * *

（代表每天19点25拉取，25请自行修改为1到59任意数字 防止所有人同时拉库压力过大）

激活码环境变量名称为 YHQ_QL_SIGN 请添加微信cxtwg22回复”青龙“查看如何获取

二、增加环境变量（不修改参数不需要增加）

参数环境变量名称为  YHQ_API

参数环境变量值为 3,2,3,250,8,220  

六个值不能少请自己修改，英文逗号隔开分别对应： 

重试次数,整点抢几种类型券,最大线程数,抢券间隔毫秒,默认抢前几个账号的券,提前多少毫秒



三、自定义如何添加API？

如需增加自定义api请复制jdYhqApiList.js改名为jdYhqApiListMy.js放于同一目录 然后修改新文件里面的券 注意会同时加载2个文件的券 所以请不要有重复的券


四、如何监控商品库存（不监控不用加）？

监控商品库存环境变量：

TK_SIGN 激活码 请关注公众号cxt_wg回复“监控激活码”获取激活码

STOCK_GOODS 监控商品Id多个用&符号分隔 不需监控了该值改为0

STOCK_AREA 监控地区ID不设置默认江苏南京 示例12_904_3375或12-904-3375



