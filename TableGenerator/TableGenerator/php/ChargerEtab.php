
<?php

 
require "database.php";

$sql = "SELECT Et_nom,Ut_id FROM etablissementscolaire";

$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
	
		$res = array(
	
		"Et_nom"  => $row["Et_nom"],
		"Ut_id" => $row["Ut_id"],
		
		
		);
      
		$resultat[]=$res;
    }
} else {
     
}

echo json_encode($resultat);


mysqli_close($link);


?>