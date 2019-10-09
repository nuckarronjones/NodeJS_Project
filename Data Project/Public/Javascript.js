$(document).ready(()=>{


	$("#submit").click(()=>{//delay POST request to accomodate seamless page transitions

   	$("#searchPage").addClass("fade");

      setTimeout(()=>{
         $("#MainForm").submit();
      },1500)
   })

});

