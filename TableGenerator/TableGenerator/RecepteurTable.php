<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    
	<link href="CSS/monstyle.css" rel="stylesheet">	
    <title>Recepteur</title>
 
  </head>
  <body id="Remp" style="padding-top:50px;padding-left:20px;padding-right:30px;">
  <div dir='rtl' id='editor' contenteditable='true' style="height:500px;" >

  </div>
  <div style="text-align:center;padding-top:20px;">
    <button type="button" id="send" class="btn btn-md center-block">ارسال</button>
</div>
  
	 
	 
	 
	  
	   <script src='js/jquery.min.js'></script>

	  <script src="js/jquery-ui.min.js"></script>
	 <script>
	 function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
	 window.onload= function(){
		   
		   
		   var Tab_id=getQueryVariable("tabid");
		  
		 
	     $.ajax({
           
		   url:"php/passtable.php",  
           type: "POST", 
		   data:{ Tab_id: Tab_id},
		  
		   		  
         success: function(data) {
			 
			 
	       var data = JSON.parse(data);
		   for(var j in data){
			  var contenu=data[j].Tab_contenu ;
		    $("#editor").html(contenu);
		   }
		
			   
			
               
		 }		 
         });
		 
	 }
		
		
		 $("#send").click(function() {
			 
			   var Tab_id=getQueryVariable("tabid");
			   var contenu=document.getElementById("editor").innerHTML;
			   
			    var d = new Date();
           var month = d.getMonth()+1;
           var day = d.getDate();
           var Rem_date = d.getFullYear() + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + day;
			   
		  $.ajax({
           
		   url:"php/Resultat.php",  
           type: "POST", 
		   data:{contenu: contenu,Tab_id:Tab_id,Rem_date :Rem_date },
		  
         success: function(data) {
  			
 			 $("#Remp").html("<p style='text-align:center;'><h1>لقد تم ارسال الجدول </h1></p>");
			}		 
         });		  
	   
			 
			 
		 });
	 
	 
	 
	 
	 
	 </script>
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
  </body>
</html>
