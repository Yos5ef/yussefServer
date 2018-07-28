const router = require('koa-router')()

router.prefix('/api')

router.get('/', (ctx, next) => {
    ctx.body = 'hellow api';
})

router.get('/name', (ctx, next) => {
    ctx.body = {
        name: 'name'
    };
})

router.post('/register', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 1;
})

module.exports = router;