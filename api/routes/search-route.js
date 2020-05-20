const express=require("express");
const bodyParser = require('body-parser'); 
const mongoJs=require("mongojs");
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db=mongoJs('Kyawswar:Kyawswar@localhost/places',['information'])
const router=express.Router();
let response;
router.use(bodyParser.json());
router.post("/",urlencodedParser,function(req,res){
    response=req.body;
    console.log(req.body);
    db.information.find({place:response},function(err,result){
        /*response=result.map(i=>{
            return i.content;
        })
        console.log("hey")*/
        res.status(200).send(JSON.stringify(result));
    })
    //res.redirect(`http://localhost:9000/search-route/${response}`);  
});
router.get("/",function(req,res){
    db.information.find(function(err,result){
        response=result.map(i=>{
            return i.content;
        })
        console.log(JSON.stringify(response[0]));
        console.log("hey")
        res.status(200).send(JSON.stringify(result));
    })
})
module.exports=router;