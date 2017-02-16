const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

//自动扫描controllers目录，找到所有js文件，导入，然后注册每个URL：
const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');