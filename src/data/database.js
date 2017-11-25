'use strict'

const mongoose = require('mongoose');

require('../models/document')

mongoose.Promise = require('bluebird');

const dbURI = 'mongodb://127.0.0.1:27017/mvp-docone'

const db = mongoose.createConnection(dbURI);

// rastreamento de eventos de connecao com o mongoose
db.on('connect', () => {
    console.log('mongoose connect to ' + dbURI);
});

db.on('error', () => {
    console.log('Mongoose connection error ' + err);
});

db.on('disconnect', () => {
    console.log('Mongoose Disconnect')
});

module.exports = db
