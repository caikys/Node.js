// 写个类
/*
function User() {
	//成员变量
	this.id;
	this.name;
	this.age;

	this.enter=function(){
		console.log(this.name+"进入图书馆")
	}
}
*/
// 将上面的类写成构造函数方法
function User(id,name,age) {
	//赋值的成员变量
	this.id=id;
	this.name=name;
	this.age=age;

	// 没有赋值的成员方法
	this.enter=function(){
		console.log(this.name+"进入图书馆")
	}
}

module.exports    =    User;