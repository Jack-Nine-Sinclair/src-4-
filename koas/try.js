const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next) => {
  ctx.body = 'Hello World';
  console.log("第一次")
  await next()
  console.log("第一次")
});
app.use(async (ctx,next) => {
    ctx.body = 'Hello World';
    console.log("第二次")
    await next()
    console.log("第二次")
  });
  app.use(async (ctx,next) => {
    ctx.body = 'Hello World';
    console.log("第三次")
    await next()
    console.log("第三次")
  });

app.listen(3000);