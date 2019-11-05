<?php
 session_start();

$Se_id= $_SESSION['Se_id'];
$ut_id= $_SESSION['ut_id'];
 
require "database.php";

$sql = "SELECT id,indice, itemNumber ,name,contenu FROM modele where Se_id='".$Se_id."'";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
	
		$res = array(
	
		"itemNumber"  =>  $row["itemNumber"],
		"indice" => $row["indice"],
		"name" => $row["name"],
	    "contenu" => $row["contenu"],
	    "id" => $row["id"],
	    "Se_id" => $Se_id,
	    "ut_id" => $ut_id
		
		);
      
		$resultat[]=$res;
    }
} else {
     $res = array(
	
		
		"name" => "",
	    
		);
		$resultat[]=$res;
	 
}

echo json_encode($resultat);


mysqli_close($link);


?>