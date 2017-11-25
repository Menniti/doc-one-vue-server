'use strict'

const mongoose = require('mongoose')
const db = require('../data/database')

const Schema = mongoose.Schema

const documentSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    cpf: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    agree: {
        type:Boolean
    }
})

module.exports = db.model('Document', documentSchema)