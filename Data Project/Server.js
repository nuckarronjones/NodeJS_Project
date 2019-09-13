const express = require('express');//express server module
const fs = require("fs");//file system retrieval module
const app = express();//app = instance of express. Holds all properties
const port = 3000;//port listen

// //express.static(root, [options]) -> Serving static files in express

app.use(express.static('public'));//access to contents in public directory

app.get('/home', (req, res) => {
	res.sendFile(__dirname + "/Public/Index.html");//upon entering '/home' page contents are rendered
});

app.listen(port, () =>{
	console.log(`Example app listening on port ${port}!`)
});