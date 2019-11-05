<?php

session_start();
$em_id=$_SESSION['ut_id'];

require "database.php";



if(isset($_POST['Tab_titre'],$_POST['Delai'],$_POST['Tab_contenu']) && !empty($_POST['Tab_titre']) && !empty($_POST['Delai']) &&!empty($_POST['Tab_contenu'])){
	  
	  $Tab_titre = mysqli_real_escape_string($link,$_POST['Tab_titre']);
	  $Delai = mysqli_real_escape_string($link,$_POST['Delai']);
	  $Tab_contenu = mysqli_real_escape_string($link,$_POST['Tab_contenu']);
	  $message = mysqli_real_escape_string($link,$_POST['message']);
	  $ed_date = mysqli_real_escape_string($link,$_POST['ed_date']);
	  $Nbr = mysqli_real_escape_string($link,$_POST['Nbr']);
	  $Tab_Ref = mysqli_real_escape_string($link,$_POST['Tab_id']);
	  $rec_id = $_POST['rec_id'];
	  
	 
	  $i=0;
	 
	 while ($i < $Nbr ){

	  $sql = "INSERT INTO tabrecepteur(Tab_id,Tab_Ref,em_id,rec_id,Tab_contenu,Tab_titre,Delai,ed_date ) VALUES ('','".$Tab_Ref."','".$em_id."','".$rec_id[$i]."','".$Tab_contenu ."','".$Tab_titre."','".$Delai."','".$ed_date ."')";
	  
	  $i++;
	  if (mysqli_query($link, $sql)) {
              //echo "New record created successfully";
      } else {
			   echo("Error insert " . mysqli_error($link));
         }


        
	 }

    $sql1 = "INSERT INTO message(Me_id,Me_contenue) VALUES ('".$Tab_Ref."','".$message."')";
	if (mysqli_query($link, $sql1)) {
              // echo "New record created successfully";
      } else {
			   echo("Error insert " . mysqli_error($link));
         }

		 
		 
		
		/* 
		 $i=0;
		 $to ="'";
	 
	 while ($i < ($Nbr) ){
		 
		  $sql = "SELECT Ut_adrEmail FROM utilisateur where Ut_id='".$rec_id[$i]."'";
		 
		
	  $result = mysqli_query($link, $sql);
		  
		  if (mysqli_num_rows($result) > 0) {
			  
			   $row = mysqli_fetch_assoc($result);
			  
			  if($i == ($Nbr-1)){
				
                 $to =$to.$row["Ut_adrEmail"]."'"; 				
				  
			  }else{
				  
				  $to= $to.$row["Ut_adrEmail"].","; 
			  }
			  
		   
              
			
			 
		  }

		   $i++;
      } 

	
	 
		 		 
		  //echo json_encode($to);
		
		
		   $subject = "موقع مديرية التربية لولاية باتنة";
		   $headers = "From: ei_bennacer@esi.dz";

          if(mail($to,$subject,$message,$headers)){
			  echo "mail sent";
		  }else{
			  
			  echo "non sebd :(";
		  }
		 */
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
	  echo "تم ارسال الجدول";
	  
  }else{
	  
	  echo "يجب ملء جميع الخانات";
  }

mysqli_close($link);



?>