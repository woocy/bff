import Koa from 'koa'
import co from 'co'
import render from 'koa-swig';

import initController from './controllers'
import config from './config'
const app = new Koa()
const { viewDir } = config

app.context.render = co.wrap(render({
  // ...your setting
  root: viewDir,
  ext: 'html',
  // varControls: ["[[", "]]"]
}));
initController(app)

app.listen(3000, () => {
  console.log('server is running at 3000')
  console.log(process.env.node_env)
})