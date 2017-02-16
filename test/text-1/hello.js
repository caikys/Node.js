//导入一个http服务
var  http  =  require('http'); 
//createServer创建一个web服务
http.createServer(function  (request,  response)  { //request请求，response输出
	response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});//Content-Type：http协议头，有协议头就要有协议尾response.end()
	if(request.url!=="/favicon.ico"){  //清除第2此访问  
        console.log('访问');  
        response.write('hello,world');  
        response.end('hell,世界');//不写则没有http协议尾,但写了会产生两次访问(就是会不停的转圈)，而且必须要有输出  
    }     
}).listen(8000); //监听端口，官网去掉00，
console.log('Server  running  at  http://127.0.0.1:8000/'); 


