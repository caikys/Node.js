const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// 注意require('koa-router')返回的是函数:
/*相当于
    const fn_router = require('koa-router');
    const router = fn_router();
*/
const router = require('koa-router')();

const app = new Koa();
app.use(bodyParser());
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
//使用router.get('/path', async fn)来注册一个GET请求。可以在请求路径中使用带变量的/hello/:name，变量可以通过ctx.params.name访问。
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });

//简单的登录表单
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});


router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');