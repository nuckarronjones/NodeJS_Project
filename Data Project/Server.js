/*/////////////////////////////////////////////////////////////////
			TEST: debug feature, remove later
//////////////////////////////////////////////////////////////////*/
let result ={/*TEST ejs template*/
	1: "1",
	2: "2",
	3: "3"
}

const express = require('express');//express server module
const fs = require("fs");//file system retrieval module
const app = express();//app = instance of express. Holds all properties
const bodyParser = require('body-parser');//middleware for html form POST requests
const port = 3000;//port listen

let urlencodedParser = bodyParser.urlencoded({extended:false});//bodyparser parameters, handles POST data (actual middleware)

app.set(("view engine","ejs"));//sets view to accomodate ejs template, in default, looks for '/view'

app.use(express.static('public'));//access to contents in public directory


app.get('/home',(req,res)=>{
	res.render("Results.ejs",{item: result[1]});
});

app.post('/home',urlencodedParser,(req,res)=>{
	if(!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.render('Results.ejs',{item: result[1]})
})


app.listen(port, () =>{
	console.log(`Example app listening on port ${port}!`)
});