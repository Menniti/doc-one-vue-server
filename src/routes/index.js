'use strict'

const Router = require('koa-router')
    , document = require('./document')

const router = new Router()

document(router)


router.get('/', (ctx) => {
    ctx.body = 'Server is ready!'
})


module.exports = router