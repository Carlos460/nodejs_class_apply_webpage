var http = require('http');
var url = require('url');
var fs = require('fs');
// var path = require('path');
// var qs = require('querystring');
var db = require('./lib/db.js');
var template = require('./lib/template.js')


var app = http.createServer(function (req, res) {

  var _url = req.url;
  var pathname = url.parse(req.url).pathname;
  var querydata = url.parse(req.url).query;

  console.log(`_url : ${_url}`);
  console.log(`pathanme : ${pathname}`);
  console.log(`querydata : ${querydata}`);

  if(pathname === '/'){
    template.main(req,res);
  }else if(pathname === '/apply_class'){
    template.apply(req,res);
  }else if(pathname === '/apply_class_process' && req.method=='POST'){
    template.apply_class_process(req,res);
  }else{
    res.writeHead(404);
    res.end('404 NOT FOUND');
  }

  

});


app.listen(8081);
