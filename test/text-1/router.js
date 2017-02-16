var  optfile  =  require('./models/optfile');

//封装函数
function getRecall(req,res){
	res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); 
	function recall(data){
		res.write(data);
        res.end('');//不写则没有http协议尾
	}
	return recall;
}

// 声明函数级
module.exports={
    login:function(req,res){
    	//也可以读取.html页面
        // res.write("我是login方法");
        /*
        function recall(data){
        	res.write(data);
        	res.end('');//不写则没有http协议尾
        }
        */
	    recall = getRecall(req,res);
	    optfile.readfile('./views/login.html',recall);
    },
    zhuce:function(req,res){
        // res.write("我是注册方法");
        /*
        function recall(data){
        	res.write(data);
        	res.end('');//不写则没有http协议尾
        }
        */
       	recall = getRecall(req,res);
        optfile.readfile('./views/zhuce.html',recall);
    },
    writefile:function(req,res){
    	function recall(data){
        	res.write(data);
        	res.end('');//不写则没有http协议尾
        }
        optfile.writefile('./views/one.txt','我的写入文件',recall);
    },
    showimg:function(req,res){ 
    	res.writeHead(200,  {'Content-Type':'image/jpeg'});  
    	optfile.readImg('./imgs/bg-1.png',res);  
    }
}