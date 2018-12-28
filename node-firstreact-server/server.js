var http = require('http');
var nodule1=require('./nodule1');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(nodule1.lll());
}).listen(8888);
console.log('http://localhost:8888');