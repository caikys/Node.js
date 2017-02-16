// fs操作文件的对象（类）。node.js自带的
var  fs=  require('fs');
// module.exports表示导出多个文件
module.exports={
    //考虑到速度问题,不建议用同步
    readfileSync:function(path){      //readfileSync同步读取：html-->同步方法-->主程序

        // fs.readFileSync表示同步读取文件（utf-8格式），最先执行
        var  data  =  fs.readFileSync(path,'utf-8');
        // 后台打出
        console.log(data);
        console.log("同步方法执行完毕");                
    },

    readfile:function(path,recall){          //异步执行：异步方法-->主程序-->html
        fs.readFile(path,  function  (err,  data)  {
            if  (err)  {
              console.log(err);
            }else{
              console.log(data.toString());
              recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readImg:function(path,res){
        // binary表示读取的是二进制形式
        fs.readFile(path,'binary',function(err,  filedata)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                console.log("输出文件");
                    //res.writeHead(200,  {'Content-Type':'image/jpeg'});
                    //客户端输出
                    res.write(filedata,'binary');
                    res.end();
            }
        });
    },
    writefile:function(path,data,recall){    //异步方式
        fs.writeFile(path,  data,  function  (err)  {
            if  (err)  {
                throw  err;
            }
            console.log('It\'s  saved!');  //文件被保存
            //客户端也能看到就添加一个回调
            recall('写文件成功')
          });
    },
    writeFileSync:function(path,data){  //同步方式
        fs.writeFileSync(path,  data);
        console.log("同步写文件完成");
    }
    
}