var    http    =    require('http');
// 调用其他文件的js文件,导入
var otherfun = require("./models/otherfuns.js");    
http.createServer(function    (request,    response)    {      
        response.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});      
    if(request.url!=="/favicon.ico"){    //清除第2此访问  
        // fun1(response);//js本地直接调用
        
        //调用一个方法的时候
        //fun2(response)或者是otherfun(response);//直接这样访问会报错，没定义，要在你所要引用的js文件，加入“module.exports  =  controller;    //只支持一个函数   ”
        // fun2(response);导入的时候已经取了别名了otherfun，所以要用otherfun
        // otherfun(response);
         
        //调用多个方法的时候
        // otherfun.fun2(response);
        // otherfun.fun3(response);
        //---------------用字符串调用对应的函数，等价于上面两种写法-------------
        // otherfun['fun2'](response);//路由的时候一定得用这个方法
        // otherfun['fun3'](response);
        // 例子,通过改名，调用不同的方法
        funname = 'fun2';
        otherfun[funname](response);



        response.end('');    
    }  
}).listen(8000);      
console.log('Server    running    at    http://127.0.0.1:8000/');   

//js本地
function fun1(res) {
	console.log("fun1");
	res.write("hello,我是fun1")
}