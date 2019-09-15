function generateAges(){
      for(let i = 14;i<100;i++){//append age numbers for drop down
      $('#SelectAge').append(`<option value="${i}">${i}</option>`);
   }
}

function addDropDown(word){//major list word addition
	$('#SelectMajor').append(`<option value="${word}">${word}</option>`);
}

function generateMajors(fileName){//generate drop down major list
   jQuery.get(`${fileName}.txt`, function(data) {
         majorsList = /*JSON.stringify*/(data);
         let endFile = true;
         let majorName = '';

         console.log(majorsList)

         for(let i = 0;i<majorsList.length;i++){
            /*TEST*///console.log(majorsList[i] + ':added')

            majorName+= majorsList[i];
   
            if(majorsList[i] == '\r'){
               addDropDown(majorName);
               i++
               majorName = '';
            }
         }
   });
}

$(document).ready(()=>{
	let majorsList;//for major list text file

	generateAges();

   generateMajors("Majors");
	
});

