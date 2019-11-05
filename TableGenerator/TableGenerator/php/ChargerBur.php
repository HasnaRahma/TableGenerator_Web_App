
<?php

 
require "database.php";

$Se_id = $_POST['Se_id'];
//$Se_id = 1;

$sql = "SELECT Bu_nom,Bu_id FROM bureau where Se_id='".$Se_id."'";

$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
	
		$res = array(
	
		"Bu_nom"  => $row["Bu_nom"],
		"Bu_id"  => $row["Bu_id"],
		
		
		);
      
		$resultat[]=$res;
    }
} else {
     
}

echo json_encode($resultat);


mysqli_close($link);


?>