


<?php 


 $mysql_host="localhost"; // Mysql Server Host name/address  
 $mysql_username="root"; // Mysql username root   
 $mysql_password=""; // using no password  
 $db="stagebatna"; 
 $link=mysqli_connect($mysql_host,$mysql_username,$mysql_password,$db) or die("couldn't connect to database");
 mysqli_set_charset($link, "utf8");
 ?>  

