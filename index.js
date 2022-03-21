const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router = require('./routes/route')
const server = express()


server.listen(3001, async()=>{
    console.log('%s listening at 3001'),
    await mongoose.connect('mongodb+srv://admin:pass1234@cluster0.ze0ck.mongodb.net/prueba2?retryWrites=true&w=majority');
})

server.use(bodyParser.json());
server.use('/',router);
