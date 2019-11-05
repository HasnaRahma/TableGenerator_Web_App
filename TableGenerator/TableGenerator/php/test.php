<?php
session_start();

$Se_id= $_SESSION['Se_id'];
 
 
require "database.php";

$sql = "SELECT id,indice, itemNumber FROM modele where Se_id='".$Se_id."' ORDER BY id DESC LIMIT 0, 1";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
	
		$res = array(
		array(
		"itemNumber"  =>  $row["itemNumber"],
		"indice" => $row["indice"]
		),
		);
       
    }
} else {
    $res = array(
		array(
		"itemNumber"  =>  -1,
		"indice" => -1
		),
		);
}

echo json_encode($res);


mysqli_close($link);


?>