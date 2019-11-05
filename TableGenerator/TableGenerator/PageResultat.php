<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    
	<link href="CSS/monstyle.css" rel="stylesheet">	
	 <link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">
	 <link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">
	 <link rel="stylesheet" href="CSS/jquery-ui.min.css">
    <title>Resultat</title>
 
  </head>
  <body  style="padding-top:50px;padding-left:20px;padding-right:30px;">
  <div dir='rtl' id='editor' contenteditable='true' style="height:500px;" >

  </div>
  <div style="text-align:center;padding-top:20px;">
   <button class="btn btn-md " id="Texcel"  aria-hidden='true'  style="width:100px;height:80px;background-color:transparent;" title=" excel تحميل الجدول ">
   <i class="fa fa-file-excel-o fa-5x " color='#659EC7' aria-hidden="true"></i></i> </button>
</div>
  
	 
	 
	 <div class="modal fade" id="Telecharger"  role="dialog">
						   <div class="modal-dialog modal-md-1">
							 <div class="modal-content">
							 <div class="modal-header">
								  <button type="button" class="close" data-dismiss="modal">&times;</button>
								 <h4 class="modal-title"><span class="fa fa-table" aria-hidden="true"></span> تحميل الجدول   </h4>
							  </div><div class="modal-body">	
							<div class="container">
							<div class="row">  
								<div dir="rtl" class="col-xs-8 col-md-4  col-sm-2">  
								<label  class="control-label"> اسم الملف </label>
								 <input class="form-control" type="text" id="FileName" >
										
								</div>
								</div></div><br><br><br>    
								<div class="modal-footer">
								  <button type="button" class="btn btn-primary"  id="Excel" data-dismiss="modal">نعم</button>
									<button type="button" class="btn btn-primary"  data-dismiss="modal">الغاء</button >			
							   </div> </div> </div></div></div>
	  
	   <script src='js/jquery.min.js'></script>
	   <script  src="js/bootstrap-filestyle.min.js"> </script>
	   <script src="bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
	   <script src="js/jquery.table2excel.js"></script>
	   <script src="js/jquery-ui.min.js"></script>
	   <script src="js/yui.js"></script>
	  
	  
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
		 
		 $(document).ready(function(){
	 
	 $("#Texcel").click(function(){  
 
	$('#Telecharger').modal('show');
     
	});	

    
		
		 $("#Excel").click(function() {
			 
			    var name = document.getElementById("FileName").value; 
			    $("#editor").table2excel({
					exclude: ".noExl",
					name: "Excel Document Name",
					filename:name,
					fileext: ".xls",
					exclude_img: true,
					exclude_links: true,
					exclude_inputs: true
				});
			 
			 
		 });
	 
	  });
	 
	 
	 
	 </script>
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
  </body>
</html>
