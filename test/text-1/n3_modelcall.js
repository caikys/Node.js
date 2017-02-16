var        http        =        require('http');    
//导入前记得在相应的js文件加入“module.exports    =    User;”
// var  User  =  require('./models/User');

// var  Teacher  =  require('./models/Teacher');

var  Student  =  require('./models/Student');

http.createServer(function        (request,        response)        {        
                response.writeHead(200,        {'Content-Type':        'text/html;        charset=utf-8'});        
        if(request.url!=="/favicon.ico"){        //清除第2此访问
         	
         	/*-------User------*/
         	/*-------写成类的时候------*/
         	// 实例化
         	//user = new User();
         	// user.id=1;
         	// user.name="张三";
         	// user.age=20;
         	/*-------写成构造方法的时候------*/
         	//user = new User(1,'张三',20);

         	//user.enter();//赋值了
         	
         	/*---------老师-------*/
         	//实例化
         	/*
         	teacher = new Teacher(1,'张三',20);

         	teacher.enter();
         	//浏览器会打出来的话
         	teacher.teach(response);//response=张三讲课
			*/
		

         	/*---------学生-------*/
         	//实例化
         	student = new Student(1,'张三',20);

         	student.enter();
         	//浏览器会打出来的话
         	student.student(response);//response=张三讲课
        	

        response.end('');    
    }
}).listen(8000);        
console.log('Server        running        at        http://127.0.0.1:8000/');