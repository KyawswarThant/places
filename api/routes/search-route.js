const express=require("express");
const bodyParser = require('body-parser'); 
const mongoJs=require("mongojs");
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db=mongoJs('Kyawswar:Kyawswar@localhost/places',['information'])
const router=express.Router();
let response;
router.post("/",urlencodedParser,function(req,res){
    response=req.body.content;
    console.log(response);
    res.redirect(`http://localhost:9000/search-route/${response}`);  
});
router.get("/:place",function(req,res){
    db.information.find({place:response},function(err,result){
        response=result.map(i=>{
            return i.content;
        })
        res.status(200).send(JSON.stringify(response[0]));
    })
})
router.get("/",function(req,res){
    db.information.find({place:"mandalay"},function(err,result){
        response=result.map(i=>{
            return i.content;
        })
        console.log(JSON.stringify(response[0]));
        console.log("hey")
        res.status(200).send(JSON.stringify(result));
    })
})
module.exports=router;