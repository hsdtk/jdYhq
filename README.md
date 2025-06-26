20250520更新加密方式 记得在青龙依赖管理nodejs模块右上角新建依赖 jsdom

# jdYhq
一、拉库命令

名称：随意自己能找到就行

命令：ql repo https://github.com/hsdtk/jdYhq.git "jd_" "" "^jd[^_]"

拉库失败的可以最后加上 "main" 例如：

ql repo https://github.com/hsdtk/jdYhq.git "jd_" "" "^jd[^_]" "main"

或代理地址

ql repo https://ghfast.top/https://github.com/hsdtk/jdYhq.git "jd_" "" "^jd[^_]"



定时规则： 29 19 * * *

（代表每天19点29拉取，29请自行修改为1到59任意数字 防止所有人同时拉库压力过大）

拉取成功后会新增2个任务 请不要修改定时 不要修改定时

激活码环境变量名称为 YHQ_QL_SIGN


二、增加配置环境变量（不修改参数不需要增加）

参数环境变量名称为  YHQ_API

参数环境变量值为 3,3,3,250,8,220  

六个值不能少请自己修改，英文逗号隔开分别对应： 

重试次数,整点抢几种类型,最大线程数,间隔毫秒,默认抢前几个账号的,提前多少毫秒


三、其他环境变量（不需要则不用增加）

1、排除不需要抢的

参数环境变量名称为  YHQ_REMOVE

参数环境变量值为 jdYhqApiList.js中qName 不要双引号多个用英文逗号隔开

如果值设置为all则不抢jdYhqApiList.js中的 只会抢自定义

例如：

2、立即执行

作用：用于账号批量测试

参数环境变量名称为 YHQ_NOWRUN

参数环境变量值为  jdYhqApiList.js中qName 要一样且只能一个 跑完切记删除或禁用该环境变量 要不每次都跑 多个英文逗号分隔

3、代理

参数环境变量名称为 YHQ_DL

代理地址 http开头 非代理池模式 代理池取代理来不及


四、自定义如何添加API？

如需增加自定义api请复制jdYhqApiList.js改名为jdYhqApiListMy.js放于同一目录 然后修改新文件里面 注意会同时加载2个文件 所以请不要有重复的

或者把jdYhqApiList-backup.js直接改名为jdYhqApiListMy.js 删除掉不要的就可以



