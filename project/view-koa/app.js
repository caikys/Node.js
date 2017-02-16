const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

//自动扫描controllers目录，找到所有js文件，导入，然后注册每个URL：
const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();
//关联templating，定义了一个常量isProduction，它判断当前环境是否是production环境。如果是，就使用缓存，如果不是，就关闭缓存。在开发环境下，关闭缓存后，我们修改View，可以直接刷新浏览器看到效果，否则，每次修改都必须重启Node程序，会极大地降低开发效率。
const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
//第一个middleware是记录URL以及页面执行时间：
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

//第二个middleware处理静态文件：
// static file support:(能让middleware使用起来)，middleware的作用是给ctx对象绑定一个render(view, model)的方法
if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

//第三个middleware解析POST请求：
// parse request body:
app.use(bodyParser());

//第四个middleware负责给ctx加上render()来使用Nunjucks：
// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

//最后一个middleware处理URL路由：
// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');