<?php

session_start();
//Récupérer les valeurs transférée de la page connexion.php
 $Pseudo=$_GET['adremail'];
 $MotDePasse=$_GET['motpass'];
//Connecter à la bdd
$host = 'localhost';
$db   = 'stagebatna';
$user = 'root';
$pass = '';
$charset = 'utf8';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$BDD = new PDO($dsn, $user, $pass, $opt);
//Commencer les requetes demandées	
 $Requete1 = $BDD->query("SELECT * FROM utilisateur join service WHERE utilisateur.Se_id = service.Se_id AND Ut_adrEmail = '".$Pseudo."' AND Ut_motPass= '".$MotDePasse."' ");
 $Requete2 = $BDD->query("SELECT * FROM ( utilisateur U join service S on (U.Se_id = S.Se_id ) join bureau B on (B.Se_id = S.Se_id) ) WHERE Ut_adrEmail = '".$Pseudo."' AND Ut_motPass= '".$MotDePasse."' ");
 $Requete4 = $BDD->query("SELECT * FROM utilisateur join service WHERE utilisateur.Se_id = service.Se_id AND Ut_adrEmail = '".$Pseudo."' AND Ut_motPass= '".$MotDePasse."' ");
 $Requete5 = $BDD->query("SELECT *FROM  (utilisateur U join tabrecepteur T on (U.ut_id = T.em_id) join etablissementscolaire E on (T.rec_id = E.ut_id)) where U.Ut_adrEmail = '".$Pseudo."' AND U.Ut_motPass= '".$MotDePasse."' and T.Rem_date is NOT NULL ");
$data = $Requete1->fetch();
$_SESSION["Se_id"]=$data ["Se_id"];

 ?>
<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>فضاء العمل </title>
	 <link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">
	
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">	
	
    <link rel="stylesheet" href="CSS/jquery-ui.min.css">
	<link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="drag_drop/bootstrap.fd.css"> 
	<link rel="stylesheet" href="CSS/style.css"> 
	<link rel="stylesheet" href="CSS/bootstrap-datepicker3.css"/>
	<link rel="stylesheet" type="text/css" href="CSS/styles.css">
	</head>
	<body>
		
		<div id ="div2" style="height: 39px;">
			<ul>
			<li> <a href="Index.php"> <ul> <li> <i class="material-icons"> power_settings_new</i> </li><li> <h4> خروج </h4> </li> </ul></a>
			<li> <a href="Index.php"> <ul> <li> <i class="material-icons">home</i> </li> <li> <h4> الرئيسة </h4> </li> </ul> </a>
			<li> <a href="Index.php"> <ul> <li> <i class="material-icons">keyboard_backspace</i> </li> <li> <h4> عودة </h4> </li> </ul></a>
			</ul>
		</div>
		<div id ="div3">
		 <a style= "text-decoration:none; color:#263238; margin-top:0px; text-align:center; "> 
				<h1 style="margin-top:0px; padding-right:300px;"> <?php  
						
								echo $data['Se_nom'];
							
							?> </h1> </a> 
		</div>
		<div class="center-div"> 
					
					<table style="margin:0 auto;background:#DCDCDC;
												height: 100px;
												filter: alpha (opacity=80);
												opacity : 0.8;">
					<tr>
						<td> 
							<a href="main.php?seid=<?php $data1 = $Requete4->fetch();echo $data1['Se_id'];?> & utid=<?php echo $data1['Ut_id'];?>" target="_blank" class="tabas"> <i class="material-icons" id="tabic">add</i> </a>
						</td>
						<td width="100px"></td>
						<td>
							<a  href="#" class ="tabas" id="ItemDelete" > <i style class="material-icons" id="tabic"> clear</i> </a>
						</td>
					</tr>
					</table>
					<table class="center-div" width="300px">
						<tr>
							<td> 
							<a id="white">انشاء جدول</a>
							</td>
							 <td width="170px">
							<td> 
							<a id="white">حذف نموذج</a>
							</td>
						</tr>
						<tr>
							<td width="150px"> 
							</td> 
							<td> <h4 id="white"> قائمة النماذج </h4></td>
							<td width="150px"> 
							</td>
						</tr>
					</table>
					
					
					   
						<div class="container">
							<div class="row">
								<div class="col-md-12">
										<div id="Carousel" class="carousel slide">
										 <ol class="carousel-indicators" style="padding-left:330px;">    
										</ol>
										<!-- Carousel items -->
										<div class="carousel-inner"> 
										</div><!--.carousel-inner-->
										
										  <a data-slide="prev" href="#Carousel" class="left carousel-control">‹</a>
										  <a data-slide="next" href="#Carousel" class="right carousel-control">›</a>
										</div><!--.Carousel-->
										 
								</div>
							</div>
						</div><!--.container-->
						  

						  <div class="modal fade" id="DeleteItem"  role="dialog">
						   <div class="modal-dialog modal-lg">
							 <div class="modal-content">
							 <div class="modal-header">
								  <button type="button" class="close" data-dismiss="modal">&times;</button>
								 <h4 class="modal-title"><span class="fa fa-table" aria-hidden="true"></span> حذف نموذج   </h4>
							  </div><div class="modal-body">	
							<div class="container">
							<div class="row">  
								<div dir="rtl" class="col-xs-8 col-md-4  col-sm-2">  
								<label  class="control-label"> اختر اسم النموذج  </label>
								  <select class="form-control Item-name" id="itemSelected" >
										<option>        </option>
								  </select></br>			   
								</div>
								</div></div><br><br><br>    
								<div class="modal-footer">
								  <button type="button" class="btn btn-primary"  id="supprimerItem" data-dismiss="modal">نعم</button>
									<button type="button" class="btn btn-primary"  data-dismiss="modal">الغاء</button >			
							   </div> </div> </div></div></div>
								  

						
						
				
				<div >
					<div>  <h4 id="white"> قائمة الجداول المملوءة </h4></div> 
				</div>
				
		</div>
		
		
		
		<div class="center-div">
		
			<table class="avectri"  dir="rtl">
				<thead>
					<tr>
						<th>عنوان الجدول</th>
						<th>اسم المنشئ</th>
						<th>المؤسسة الملرسل اليها</th>
						<th  data-tri="1" >تاربخ التحديث</th>
						<th  data-tri="1" class="selection">اخر أجل</th>
						<!-- acces au fichier de suppression -->
						
					</tr>
				</thead>
				<tbody>
					<?php 
					while( $data = $Requete5->fetch())
					{  
						 ?>
						<tr> 
						<td> <a href="PageResultat.php?tabid=<?php echo $data['Tab_id']?>"> <?php echo $data['Tab_titre'] ?> </a> </td>
						<td><?php echo $data['Ut_prénom'] ?> </td>
						<td><?php echo $data['Et_nom'] ?> </td>
						<td><?php echo $data['Rem_date'] ?> </td>
						<td><?php echo $data['Delai'] ?> </td>
						<!-- Création de boutons  pour la selection de la ligne à supprimer-->
                         <th><a  href="php/suppression.php?tabid=<?php echo $data['Tab_id']; ?>"><input class="blacka" 
									 type="submit" value="أحذف الجدول" /></a></th>
                         </tr>
					 <?php  
					}
					?>	
				</tbody>
			</table> 
		</div>	
		
		 
 

    <script src='js/jquery.min.js'></script>
	
    <script src="js/rangy-core.js"></script>
	<script src="js/rangy-classapplier.js"></script>
	<script src="js/rangy-selectionsaverestore.js"></script>
	<script src="js/script.js"></script>
	<script src="js/Slide.js"></script>
	<script src="js/TriTableauDynamique.js"></script>
	
	 <script src="js/jquery-ui.min.js"></script>

	<script src="js/yui.js"></script>
	<script src="bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
	<script src="drag_drop/bootstrap.fd.js"></script>
	<script  src="js/bootstrap-filestyle.min.js">  </script>
   <script>

   window.onload = function(){
	  
	     
	 $.ajax({
           
		   url:"php/ModeleLoad.php",  
           type: "GET", 	  
           success: function(res) {
			   
	        var res = JSON.parse(res);
			   
			for(var j in res){
				
			     var i=res[j].indice;
			     var itemNumber=res[j].itemNumber;
			     var name=res[j].name;
			     var contenu=res[j].contenu;
				 var id=res[j].id;
				 var ut_id=res[j].ut_id;
				 var Se_id=res[j].Se_id;
				
				 
				 contenu=encodeURIComponent(contenu);
			
				 
				 
				 
				 $('<option>'+name+'</option>').appendTo('.Item-name');
				 
				 
				 if((itemNumber == 0)&& (i == 0)){
			
			$('<li data-target="#Carousel" data-slide-to="'+i+'" class="active"></li>').appendTo('.carousel-indicators');
			$('<div class="item active"><div  class="row c'+i+'"></div></div>').appendTo('.carousel-inner');
			$('<div id="item'+id+'" class="col-md-3"><a href="main.php?contenu='+id+'&seid='+Se_id+'&utid='+ut_id+'" class="thumbnail "><div style="padding-top:40px;" class="CarouselItem  ItemTitle">'+name+'</div> </a></div>').appendTo('.c'+i);
						
			
		         }else if (itemNumber <4){
			
			
			 $('<div id="item'+id+'" class="col-md-3"><a href="main.php?contenu='+id+'&seid='+Se_id+'&utid='+ut_id+'" class="thumbnail "><div style="padding-top:40px;"  class="CarouselItem ItemTitle">'+name+' </div></a></div>').appendTo('.c'+i);
			
		         }else if(itemNumber == 4) {
			
			
			$('<li data-target="#Carousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
			$('<div class="item"><div  class="row c'+i+'"></div></div>').appendTo('.carousel-inner');
			$('<div id="item'+id+'" class="col-md-3"><a href="main.php?contenu='+id+'&seid='+Se_id+'&utid='+ut_id+'" class="thumbnail"><div style="padding-top:40px;" class="CarouselItem ItemTitle">'+name+' </div></a></div>').appendTo('.c'+i);
			
			
		     }
				 
				 
			     
    			}
			
		  }		 
         }); 

	
	
	}
   
   
   
   $(document).ready(function(){
	
	$("#ItemDelete").click(function(){  
 
	$('#DeleteItem').modal('show');
     
	});	
	
	 $("#supprimerItem").click(function(){
		   
		  
          
       var name = document.getElementById("itemSelected").value;    
          
        $.ajax({
           
		   url:"php/SuppModele.php",  
           type: "POST", 
		   data:{ name: name},
		  
         success: function(data) {
			 
			 
	       var data = JSON.parse(data);
		
			   
			for(var i in data){
				
			    var id = data[i].id;
				$('#item'+id+'').remove();
			     
			     
    			}
				
               
		 }		 
         });
       
    
	location.reload();
		  
		   
	   });
	   
	
	
	
	
	
	
   });
   
   
   
   
   
   
   
   
   
</script>
		
	</body>
</html>