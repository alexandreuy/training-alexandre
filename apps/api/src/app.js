const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');

var upload = multer();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/reverso', upload.none() ,(req, res, next) => { 
    recupNom = req.body.name;
    res.status(201).json({
      reverse: recupNom.split('').reverse().join('')
    });
});

module.exports = app;