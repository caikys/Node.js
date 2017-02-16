// 继承父类
var User = require('./User.js');

// 方法
function Student(id,name,age) {
	// 继承父类,就会把User.js里面的值继承下来
	User.apply(this,[id,name,age]);

	// 它自己的
	// 匿名函数
	this.student=function(res){
		// 输出
		res.write(this.name+"听课");
	}
}

module.exports    =    Student;