/*/////////////////////////////////////////////////////////////////
			TEST: debug feature, remove later
//////////////////////////////////////////////////////////////////*/


const express = require('express');//express server module
const fs = require("fs");//file system retrieval module
const app = express();//app = instance of express. Holds all properties
const port = 3000;//port listen

// //express.static(root, [options]) -> Serving static files in express

app.set(("view engine","ejs"));//sets view to accomodate ejs template, in default, looks for '/view'

app.use(express.static('public'));//access to contents in public directory

app.get('/home', (req, res) => {
	res.sendFile(__dirname + "/Public/Index.html");//upon entering '/home' page contents are rendered
});

let result ={/*TEST*/
	1: "1",
	2: "2",
	3: "3"
}

app.get('/results',(req,res)=>{
	/*2 params	-> res.render(name of view file,object(key value))*/
	/*TEST*/res.render("Results.ejs",{item: result[1]});
});

app.listen(port, () =>{
	console.log(`Example app listening on port ${port}!`)
});