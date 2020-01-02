const cheerio = require("cheerio");//web scraping module
const request = require("request");

let salaryAVG = 0;

function salary(html){


	const $ = cheerio.load(html);//allow for jquery usage in function
	let tempSalary = 0;//addition of actual salary numbers
	let tempTotalJobs = 0;//addition of salary job numbers to be used for weighted averaging
	
	let salariesItems = $("#SALARY_rbo").find("span.rbLabel").text();//Gather salary items inside spans
	let salariesJobs = $("#SALARY_rbo").find("span.rbCount").text();
	
	let salaries = salariesItems.replace(/\$/g,"").replace(/\,/g,"").split("+");//format and add salaries nums into an array

	salaries.pop();//remove empty last item as a result of + splice removal
	
	for(let i = 0;i < salaries.length;i++){//convert salary strings into numbers for averaging
		salaries[i] = parseInt(salaries[i],10);
		tempSalary = tempSalary + salaries[i];
	}
	salaryAVG = salaryAVG + (tempSalary / salaries.length);
	console.log(salaryAVG + " average");//DEBUG
	console.log(tempSalary + "total");//DEBUG
	//console.log($("#SALARY_rbo").html());//debug
	console.log($("#SALARY_rbo").find("span.rbCount").text());//debug
}

function scrape(obj){

	let website = `https://www.indeed.com/jobs?q=${obj.job}&l=${obj.location},+FL&radius=${obj.radius}`//BOOKMARK change state

	request(`${website}`,(err,res,html)=>{
		if(!err && res.statusCode == 200){
			//console.log(website); DEBUG
			salary(html);
		}//if
	})//request
}//scrape

module.exports.scrape = scrape;

/////////////////////////////////////////////////////
/* CURRENT TASK: FIND WEIGHTED AVERAGES OF SALARIES*/
/////////////////////////////////////////////////////