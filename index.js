const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const xmlparser= require('express-xml-bodyparser');
const pool= require('./data/config.js')

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(xmlparser);


app.get('/', (req,res)=>{
    let id= req.query.id;
    res.send(304,`Hola majos: ${id}`);
});

app.post(/)

const server = app.listen(process.env.PORT || 9000, ()=> {
    console.log("Servidor excuchando en", server.address().port)
});