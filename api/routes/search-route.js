const express=require("express");
const bodyParser = require('body-parser'); 
const mongoJs=require("mongojs");
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db=mongoJs('places',['information','fs.files'])
const router=express.Router();
let response;
router.use(bodyParser.json());
router.get("/:place",urlencodedParser,function(req,res){
    response=req.params;
    console.log(req.params.place);
    db.information.find({place:response.place},function(err,result){
        console.log(result.place);
        res.status(200).send(JSON.stringify(result));
    });
});
router.get("/",function(req,res){
    db.fs.files.find(function(err,result){
        if(err)
        res.json(err);
        else
        console.log(result.uploadDate);
        res.send(JSON.stringify(result.filename));
    });
});
module.exports=router;