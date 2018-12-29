var http = require('http');
var nodule1=require('./nodule1');
var querystring=require('querystring');
var url = require('url');
var util = require('util');
http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	   // 解析 url 参数
    var params = url.parse(req.url, true).query;  //parse将字符串转成对象,req.url="/?url=123&name=321"，true表示params是{url:"123",name:"321"}，false表示params是url=123&name=321
    res.write("网站名：" + params.ID);
    res.end();
	
}).listen(8888);
console.log('http://localhost:8888');