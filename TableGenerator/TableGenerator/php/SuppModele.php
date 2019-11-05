<?php

session_start();

$Se_id= $_SESSION['Se_id'];
 
require "database.php";

if(isset($_POST['name']) && !empty($_POST['name']) ){
	
	 $name = mysqli_real_escape_string($link,$_POST['name']);
	
	
     $sql = "SELECT id FROM modele WHERE name='".$name."' and Se_id='".$Se_id."'";
	 
     $result = mysqli_query($link, $sql);
	

    if (mysqli_num_rows($result) > 0) {
    
         while($row = mysqli_fetch_assoc($result)) {
	
		      $res = array(
		           array(
		          "id"  =>  $row["id"],
		               ),
		         );
          }

             
               echo json_encode($res);		  
  
   }else {
    //echo "no results";
    }

  
   $sql2 = "DELETE FROM modele WHERE name='".$name."' and Se_id='".$Se_id."'";

      if (mysqli_query($link, $sql2)) {
		  
             echo "Record deleted successfully";
      } else {
		  
	  echo "Error deleting record: " . mysqli_error($link);
	  }
    
	
	/********************/
	
	
	
	
	/*******************************/
	}else {
		
		
     echo "u have to choose a model </br>";
    }

  $sql = "SELECT id,indice,itemNumber FROM modele where Se_id='".$Se_id."' ORDER BY id ASC";
	 
      $result = mysqli_query($link, $sql);

	  if (mysqli_num_rows($result) > 0) {
		
		$i = 0;
	    $num = 0;
         while($row = mysqli_fetch_assoc($result)) {
			 
			 $id = $row['id'];
			$sql = "UPDATE modele SET indice='".$i."',itemNumber='".$num."' where id='".$id."' and Se_id='".$Se_id."' ";
	         
			 //echo $sql.'</br>';
                if (mysqli_query($link, $sql)) {
					
                   //echo "data updated";
				   
               } else {
				   
                echo "Error updating record: " . mysqli_error($link);
				 
               }
   
			   if($num == 3){
				  
				   $i++;
				   
			   }
			   else if($num == 4){
				   
				   $num =0;
				   
				   
			   }
			    $num++;
  
          } 
 

}
	
	
	
	
	         
	



mysqli_close($link);


?>