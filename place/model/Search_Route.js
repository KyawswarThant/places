const express=require("express");
    const bodyParser = require('body-parser'); 
    const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
    const router=express.Router();
    let response;
    router.post("/",urlencodedParser,function(req,res){
    response=req.body.content;
    console.log(response);
    res.redirect(`http://localhost:4000/home/${response}`);  
    });
    router.get("/places",function(req,res){
    res.sendFile("d:/Myanmar/place/places.html");
res.type("html");
})