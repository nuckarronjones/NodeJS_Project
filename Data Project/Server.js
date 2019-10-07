/*/////////////////////////////////////////////////////////////////
			TEST: debug feature, remove later
//////////////////////////////////////////////////////////////////*/

const dateData = require("./MyModules/getDate.js")//custom date module
const express = require('express');//express server module
const fs = require("fs");//file system retrieval module
const app = express();//app = instance of express. Holds all properties
const bodyParser = require('body-parser');//middleware for html form POST requests
const port = process.env.PORT || 1337;//port listen

let urlencodedParser = bodyParser.urlencoded({extended:false});//bodyparser parameters, handles POST data (actual middleware)

app.set(("view engine","ejs"));//sets view to accomodate ejs template, in default, looks for '/view'

app.use(express.static('public'));//access to contents in public directory


app.get('/home',(req,res)=>{//request website
	res.render("index.ejs",{});
});

app.post('/home',urlencodedParser,(req,res)=>{//for posting data from form submission
	let post = JSON.stringify(req.body,null,4);//corretly formatted data object

	let data = {//data to send to database
		job: req.body.job,
		/*major: req.body.major.slice(0,-2),*/
		location: req.body.location,
		date: dateData.getDate(),
		radius: req.body.radius
	}

	if(!req.body) return res.sendStatus(400);

	fs.appendFile("./DatabaseFile/Database.txt",JSON.stringify(data,null,4),(err)=>{//JSON format, write to file
		if(err) throw err
	})

	res.render('results.ejs',{})
})


app.listen(port, () =>{
	console.log(`Example app listening on port ${port}!`)
});

/*/////////////////////////////////////////////////////////////////
			LEFT OFF AT FRONT DESIGN AND ANIMATIONS
//////////////////////////////////////////////////////////////////*/