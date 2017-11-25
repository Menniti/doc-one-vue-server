'use strict'

const Document = require('../models/document')

const document = (function(){

    return {
        getAll() {
            return Document.find({})
        },

        getOne(id) {
            
            if(id == '') return Promise.reject('The id should not be null')

            return Document.find({_id: id})
        },

        save(data) {
            
            if(data.name == '') return Promise.reject('Name could not be null')
            if(data.lastname == '') return Promise.reject('Lastname could not be null')
            if(data.cpf == '') return Promise.reject('Cpf could not be null')
            if(data.email == '') return Promise.reject('Email could not be null')
            if(data.title == '') return Promise.reject('Title could not be null')
            if(data.description == '') return Promise.reject('Description could not be null')
            if(data.agree == '') return Promise.reject('Agree could not be null')
            

            const model = new Document({
                name: data.name,
                lastname: data.lastname,
                cpf: data.cpf,
                email: data.email,
                title: data.title,
                description: data.description,
                agree: data.agree
            })

            return model.save()
        }
    }
})

module.exports = document