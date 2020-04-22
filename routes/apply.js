const express = require('express');
const router = express.Router();
const fs = require('fs');
const qs = require('querystring');
const db = require('../lib/db');


router.get('/class', (req,res) => {
  fs.readFile('./front-end/pages/apply.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
  });
});

router.post('/class_process', (req, res) => {
  var body='';
  req.on('data', function(data){//gives the data to the body which we got from the method post
    body+=data;
  });
  req.on('end', function(){//write a new file that has the name as title and file data as description
    var post = qs.parse(body);
    console.log(post.user_name);
    console.log(post.password);
    db.query(`
      INSERT INTO customer (first_name, last_name, email, phone_number, book_date) VALUES(?,?,?,?,NOW())`,
      [post.first_name, post.last_name, post.email, post.phone_number],
      function(err, result){
      if(err) throw err;
      res.writeHead(302, {Location:`/`});
      res.end();
    });
  });
});

module.exports = router;

