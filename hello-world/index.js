const koa = require('koa');
const app = new koa();

app.use(function *(){
    this.body = 'hello world';
    this;
    console.log(this.request);
    console.log(this.response);
});

app.listen(3000);