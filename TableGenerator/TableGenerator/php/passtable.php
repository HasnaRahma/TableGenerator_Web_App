<?php





require "database.php";


$Tab_id = $_POST['Tab_id'];

//$Tab_id=178;

$sql= "SELECT Tab_contenu FROM tabrecepteur where Tab_id='".$Tab_id."'";

$result = mysqli_query($link, $sql);


if ((mysqli_num_rows($result) > 0)) {
	
    while(($row = mysqli_fetch_assoc($result)) ) {
	
		$res = array(
	
		"Tab_contenu"  => $row["Tab_contenu"]
		
		
		
		);
      
		$resultat[]=$res;
    
    
} 
}else {
     echo "";
}


echo json_encode($resultat);

mysqli_close($link);


?>