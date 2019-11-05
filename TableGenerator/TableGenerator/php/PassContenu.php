<?php

 session_start();

$Se_id= $_SESSION['Se_id'];

require "database.php";

$id = mysqli_real_escape_string($link,$_POST['id']);

$sql = "SELECT contenu FROM modele where id='".$id."' and Se_id='".$Se_id."'";

$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
	
    while($row = mysqli_fetch_assoc($result)) {
	
		$res = array(
		array(
		"contenu"  =>  $row["contenu"],
		),
		);
    
    
} 
}else {
     echo "";
}


echo json_encode($res);

mysqli_close($link);


?>