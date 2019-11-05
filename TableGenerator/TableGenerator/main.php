<?php 
session_start();
//Récupérer les valeurs transférée de la page PageUtilisateurAcadémie.php
 
 $ut_id=$_GET['utid'];
 $Se_id=$_GET['seid'];
 
  $_SESSION['ut_id'] = $ut_id;
  $_SESSION['Se_id'] = $Se_id;
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
	<meta http-equiv="content-type X-UA-Compatible" content="text/plain IE=edge" />
	
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>مولد الجداول</title>
    <link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="jquery-ui.min.css">
	<link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">
	<link href="CSS/monstyle.css" rel="stylesheet">	
	<link rel="stylesheet" href="drag_drop/bootstrap.fd.css"> 
	<link rel="stylesheet" href="CSS/style.css"> 
	<link rel="stylesheet" href="CSS/bootstrap-multiselect.css"/>
	<link rel="stylesheet" href="CSS/bootstrap-datepicker3.css"/>
		
  </head>
  <body>
  
  
 
  <div style="background-color:#eee;padding:5px;padding-top:5px;text-align:center;font-size:20px;color:#03A9F4;font-weight:bold"> تحرير الجداول </div>
  <div style="padding-top:10px;"> </h1></div>
 <div class="div1" id="editeurDANYA"></div> <div class="div1" id="divSep" ></div>
 
  <div class="div1" id="partagertab">
  
   
    <div class="container">
<div class="col-xs-4">
    <div class="form-area">  
        <form role="form" id="sendForm">
        <br style="clear:both">
                    <h3 style="margin-bottom: 10px; text-align: center;color:#659EC7;">ارسال الجدول</h3>
    				<div class="form-group">
						<input dir="rtl" type="text" class="form-control" id="TabName"  placeholder="اسم الجدول" required>
					</div>
					<div dir="rtl" class="form-group"> <!-- Date input -->
                    <label class="control-label" style="color:#616161;" for="date"> حدد اخر اجل لملئ الجدول </label>
                    <input class="form-control" id="dateRem" name="date" placeholder="YYYY/MM/DD" type="text"/>
                    </div>
					 <div dir='rtl' >
		             <label  style="color:#616161;" class="control-label">   اختر اسم المكتب  </label>
                     <select class="form-control" id="bureau"  >
		                   <option>        </option>
		                  
                     </select></br>			   
                     </div>
					 <div  id="example-optionClass-container">
					  <div dir ='rtl'>
					 <label  style="color:#616161;" class="control-label">  اختر المرسل اليه  </label></br></div>
                      <select dir ="rtl"  class="recepteur" id="example-optionClass" multiple="multiple" >
                        
                       
                     </select>
                   </div></br>
					  
					
                    <div class="form-group">
                    <textarea dir="rtl" class="form-control" type="textarea" id="message" placeholder="رسالة إلى البريد الإلكتروني" maxlength="140" rows="5"></textarea>
                                         
                    </div>
				
            <button type="button" id="envoyer" class="btn btn-md center-block">ارسال</button>
       
        </form>
    </div>
</div>
</div>
  
  
  </div>
 
 
 
 
 
    <script src='js/jquery.min.js'></script>
	
    <script src="js/rangy-core.js"></script>
	<script src="js/rangy-classapplier.js"></script>
	<script src="js/rangy-selectionsaverestore.js"></script>
	<script src="js/script.js"></script>
	<script src="js/bootstrap-multiselect.js"></script>

	
	 <script src="js/jquery-ui.min.js"></script>
	<script src="js/colResizable-1.5.min.js"></script>
	<script src="js/yui.js"></script>
	<script src="bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
	<script src="drag_drop/bootstrap.fd.js"></script>
	<script  src="js/bootstrap-filestyle.min.js">  </script>
 	<script src="js/bootstrap-contextmenu.js" ></script>
     <script src="js/jquery.table2excel.js"></script>
	 <script src="js/jscolor.js"></script>
	
<!-- Include Date Range Picker -->
<script type="text/javascript" src="js/bootstrap-datepicker.min.js"></script>


<script>
    $(document).ready(function(){
        var date_input=$('input[name="date"]'); 
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'yyyy/mm/dd',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
		$('#selectDest').multiselect();
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
  $('#example-optionClass').multiselect({
		    enableFiltering: true,
			buttonWidth: '255px',
            dropRight: true,
			maxHeight: 200,
			selectAllText: 'حدد الكل',
			filterPlaceholder: 'بحث',
			includeSelectAllOption: true,
			nonSelectedText: ' المرسل اليه غير محدد',
			nSelectedText: ' - مستقبلين',
			allSelectedText: ' تم تحديد الكل '
           
        });
	
      $('#bureau').on('change', function() {
         
        var Bu_id= this.value;
		$('#example-optionClass').html('');
		
		$.ajax({
           
		   url:"php/etab.php",  
           type: "POST", 
           data: {Bu_id,Bu_id  },
		   
         success: function(data) {
 
	       var data = JSON.parse(data);
		   for(var j in data){
			   
			   var Et_nom=data[j].Et_nom;
			   var Ut_id=data[j].Ut_id;
 
			   var option='<option value="'+Ut_id+'" >'+Et_nom+'</option>';
			   //console.log(option);
			   $(option).appendTo('#example-optionClass');
			    $('#example-optionClass').multiselect('rebuild'); 
		   }	
               
		 }		 
         });
		
		


		 
    });

		
	window.onload= function(){
		   
		   
		   var Se_id=getQueryVariable("seid");
		  
		$.ajax({
           
		   url:"php/ChargerBur.php",  
           type: "POST", 
           data: {Se_id:Se_id},	
		   
         success: function(data) {

	       var data = JSON.parse(data);
		   for(var j in data){
			   
			   var Bu_nom=data[j].Bu_nom;
			   var Bu_id=data[j].Bu_id;
			 
                
			   var option='<option value="'+Bu_id+'">'+Bu_nom+'</option>';
			  // console.log(option);
			   $(option).appendTo('#bureau');
			    
		   }	
               
		 }		 
         });
		
		
		
		$.ajax({
           
		   url:"php/ChargerEtab.php",  
           type: "POST", 	   		  
         success: function(data) {
 
	       var data = JSON.parse(data);
		   for(var j in data){
			   
			   var Et_nom=data[j].Et_nom;
			   var Ut_id=data[j].Ut_id;
 
			   var option='<option value="'+Ut_id+'" >'+Et_nom+'</option>';
			   //console.log(option);
			   $(option).appendTo('#example-optionClass');
			    $('#example-optionClass').multiselect('rebuild'); 
		   }	
               
		 }		 
         });
		
		 var id=getQueryVariable("contenu");
		  
		  if(!id){
			  
			   $("#editor").html("<div>&nbsp;&nbsp;</div>");

			 }else {
				 
				 
		   
	     $.ajax({
           
		   url:"php/PassContenu.php",  
           type: "POST", 
		   data:{ id: id},
		  
		   		  
         success: function(data) {
			 
			 
	       var data = JSON.parse(data);
		   for(var j in data){
			  var contenu=data[j].contenu;
		    $("#editor").html(contenu);
		   }
		
			   
			
               
		 }		 
         });
		
		
				 
			 }
	       
		  
			   
		
                
         				
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
	
            }
		
    });
</script>
	
  </body>
</html>
