const cheerio = require("cheerio");//web scraping module
const request = require("request");

function scrape(obj){

	let website = `https://www.indeed.com/jobs?q=${obj.job}&l=${obj.location},+FL&radius=${obj.radius}`//BOOKMARK change state

	request(`${website}`,(err,res,html)=>{
		if(!err && res.statusCode == 200){
			//console.log(html);
			const $ = cheerio.load(html);

			console.log($("#SALARY_rbo .rbLabel").html())
		}//if
	})//request
}//scrape

module.exports.scrape = scrape;