<?php
session_start();
//echo $_SESSION['ut_id'];
$Se_id= $_SESSION['Se_id'];

require "database.php";

if(isset($_POST['name'],$_POST['json']) && !empty($_POST['name']) && !empty($_POST['json'])){
	  
	  $name = mysqli_real_escape_string($link,$_POST['name']);
	  $json = mysqli_real_escape_string($link,$_POST['json']);
	  $itemNumber = mysqli_real_escape_string($link,$_POST['itemNumber']);
	  $i = mysqli_real_escape_string($link,$_POST['i']);
  
	  $sql = "INSERT INTO modele(id,Se_id,contenu,name,itemNumber,indice) VALUES ('','".$Se_id."','".$json."','".$name."','".$itemNumber."','".$i."')";
	  
	 

    if (mysqli_query($link, $sql)) {
               echo "تم حفظ النموذج";
    } else {
			   echo(" مشكلة في الحفظ " . mysqli_error($link));
         }


        
	 
	  
  }else{
	  
	  echo "يجب ملء جميع الخانات";
  }

mysqli_close($link);



?>