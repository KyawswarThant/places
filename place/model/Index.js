const express=require("express");
const mongoJs=require("mongojs");
const bodyParser = require('body-parser'); 
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db=mongoJs('Kyawswar:Kyawswar@localhost/places',['information']);
//const search_route=require("./search-route.js");
const app=express();
let response;
app.listen(4000,function(){
    console.log("server is working on port 4000");
    //app.use("/search-route",search_route);
    app.post("/",urlencodedParser,function(req,res){
        response=req.body.content;
        console.log(response);
        res.redirect(`http://localhost:4000/home/${response}`);  
    });
    app.get("/home/:place",function(req,res){
        db.information.find({place:response},function(err,result){
            response=result.map(i=>{
                return i.content;
            })
            res.status(200).send(JSON.stringify(response[0]));
        })
    })
    
});