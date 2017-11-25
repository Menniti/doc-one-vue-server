'use strict'

const koa = require('koa')
    , cors = require('koa2-cors')
    , bodyParser = require('koa-bodyparser')
    , router = require('./routes')
    , db = require('./data/database')

const app = new koa()

// setup no app do koa, body-parser para garantiro res.body da applicacao
app.use(bodyParser())

// setup do cors - Configures the Access-Control-Allow-Origin CORS header. 
// controla acesso de medodos, creditials, headers permitidos
app.use(cors())

// setup database
app.use(async (ctx, next) => {
    ctx.state.db = db
    await next()
})

// handle general errors
app.on('error', (err) => console.error('[ERROR]', err))


app.use(router.routes());




module.exports = app