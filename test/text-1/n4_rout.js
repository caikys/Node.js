var    http    =    require('http');

//node.js自带的
var    url    =    require('url');

var    router    =    require('./router');
http.createServer(function    (request,    response)    {
        response.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});
        // request.url获取了路径
        if(request.url!=="/favicon.ico"){
                var pathname=url.parse(request.url).pathname;
        		pathname = pathname.replace(/\//,'');//替换掉前面的"/"为空字符串        		
        		console.log(pathname);
        		router[pathname](request,response);
                response.end('');
        }
}).listen(8000);
console.log('Server    running    at    http://127.0.0.1:8000/'); 