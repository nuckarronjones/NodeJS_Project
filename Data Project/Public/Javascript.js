$(document).ready(()=>{


   $("#submit").click(()=>{//delay POST request to accomodate seamless page transitions

      $("#searchContainer").addClass("floatUp");

      setTimeout(()=>{
         $("#MainForm").submit();
      },1500)
   })

});

