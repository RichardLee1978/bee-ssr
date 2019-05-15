import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import session from 'koa-session'
import router from './router/index'
import koaBody from 'koa-body'
import json from 'koa-json'

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '0.0.0.0'
  const port = process.env.PORT || 5060

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(koaBody());
  
  
  
  app.use(json())
  app.use(router.routes(), router.allowedMethods());
  app.keys = ['kAawRD9G3uJWdV']

  const CONFIG = {
    key: 'BITBEESESSION', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
  }
  app.use(session(CONFIG, app))
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.body = ctx.request.body;
    //ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    ctx.req.session = ctx.session
    nuxt.render(ctx.req, ctx.res)
  })
  
  

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()