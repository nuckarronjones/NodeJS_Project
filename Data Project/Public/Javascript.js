$(document).ready(()=>{
	$("#testButton").click(()=>{
		$("#job").val("Software");
		$("#location").val("Pensacola");
		$("#radius").val("100");
	})

	$("#submit").click(()=>{//delay POST request to accomodate seamless page transitions
   	$("#searchPage").addClass("fade");

      setTimeout(()=>{
         $("#MainForm").submit();
      },1500);
   })
});

