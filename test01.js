

//氧气听书

//console.log('测试写出日志'); //输出日志

//$notification.post('title标题', 'subTitle子标题子标题子标题','body内容内容内容内容') //用于通知栏提醒




var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理


obj.userInfo.isMember=true;//修改为true
obj.userInfo.startDate = "2020-09-17 12:30:45";
obj.userInfo.endDate = "2025-09-09 12:19:19";


body = JSON.stringify(obj); // 重新打包回json字符串
$done({body}); // 结束修改





