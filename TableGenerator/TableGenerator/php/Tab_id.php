<?php

 
require "database.php";

$sql = "SELECT Tab_Ref FROM tabrecepteur ORDER BY Tab_id DESC LIMIT 0, 1";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
	
		
		$res=$row["Tab_Ref"];
	
      
    }
} else {
    $res = 0;
}

echo $res;


mysqli_close($link);


?>