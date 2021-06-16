import Router from '@koa/router'
const router = new Router()


export default (app) => {
  router.get('/', async (ctx) => {
    await ctx.render('index', {
      message: 'hello'
    })
  })
  app.use(router.routes()).use(router.allowedMethods());
}