import koa from koa
const app = new koa()
app.listen(3000, () => {
  console.log('server is running at 3000')
})