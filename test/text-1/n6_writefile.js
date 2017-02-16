var  http  =  require('http');
//node.js自带的
var    url    =    require('url');
var    router    =    require('./router');

// var  optfile  =  require('./models/optfile');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问

    	var pathname=url.parse(request.url).pathname;
    		pathname = pathname.replace(/\//,'');//替换掉前面的"/"为空字符串        		
    		// console.log(pathname);
    		router[pathname](request,response);
            // response.end('');

    	/*
    	//同步
        // optfile.readfileSync('./views/login.html');
        // 闭包
        function recall(data){
        	response.write(data);
        	response.end('ok');//不写则没有http协议尾
        }
        optfile.readfile('./views/login.html',recall);
        // optfile.readfile('./views/login.html',response);
        // response.end('ok');//不写则没有http协议尾
        console.log('主程序执行完毕')
        */
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');