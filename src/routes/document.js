'use strict'

const service = require('../services/document')


module.exports = (function(router) {
    router.get('/documents', async(ctx) => {
        await service()
            .getAll()
            .then(data => { ctx.body = data} )
            .catch(err => { ctx.body = { fail: true, message: err.toString() } } )
    })

    router.get('/documents/:id', async(ctx) => {
        await service()
            .getOne(ctx.params.id)
            .then(data => { ctx.body = data} )
            .catch(err => { ctx.body = { fail: true, message: err.toString() } } )
    })

    router.post('/documents', async(ctx) => {
        await service()
            .save(ctx.request.body)
            .then(data => { ctx.body = data})
            .catch(err => { ctx.body = { fail: true, message: err.toString() } } )
    })
})