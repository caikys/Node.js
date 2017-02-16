//mocha会启动Node.js进程，然后运行测试，但是，这个过程中并没有加载Babel转换器，因此，遇到async和await关键字就会报错。

//解决方法是让mocha在测试前加载Babel即可。mocha提供了一个命令行参数--require可以加载指定的包。
require('babel-core/register')({
    presets: ['stage-3']
});