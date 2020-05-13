var express = require('express');
var router = express.Router();
const mongoJs=require("mongojs");
const bodyParser = require('body-parser'); 
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db=mongoJs('Kyawswar:Kyawswar@localhost/places',['information'])
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/",urlencodedParser,function(req,res){
  response=req.body.content;
  console.log(response);
  res.redirect(`http://localhost:9000/home/${response}`);  
});
router.get("/home/:place",function(req,res){
  db.information.find({place:response},function(err,result){
      response=result.map(i=>{
          return i.content;
      })
      res.status(200).send(JSON.stringify(response[0]));
  })
})

module.exports = router;
