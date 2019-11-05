<?php

require "database.php";

$Tab_id = $_POST['Tab_id'];
$contenu = $_POST['contenu'];
$Rem_date = $_POST['Rem_date'];



$sql = "UPDATE tabrecepteur SET Tab_contenu='".$contenu."',Rem_date='".$Rem_date."' where Tab_id='".$Tab_id."' ";

$result = mysqli_query($link, $sql);

if (mysqli_query($link, $sql)) {
					
                   echo "data updated";
				   
               } else {
				   
                echo "Error updating record: " . mysqli_error($link);
				 
               }


mysqli_close($link);


?>