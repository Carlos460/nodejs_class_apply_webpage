const express = require('express');
var app = express();
var db = require('./lib/db.js');
var template = require('./lib/template.js');

app.use(express.static('front-end'));

app.get('/', (req,res) => {
  template.main(req,res);
});

app.get('/apply_class', (req,res) => {
  template.main(req,res);
});

app.post('/apply_class_process', (req, res) => {
  template.apply(req,res);
});

app.post('/customer_list', (req,res) => {
  template.customer_list(req, res);
});

app.listen(8081);
