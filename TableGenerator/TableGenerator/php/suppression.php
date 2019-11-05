<?php

session_start();   
//Connecter à la bdd
$host = 'localhost';
$db   = 'stagebatna';
$user = 'root';
$pass = '';
$charset = 'utf8';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$BDD = new PDO($dsn, $user, $pass, $opt);
         
        // Recuperation de l'identifiant du tableau
         $tabid = $_GET['tabid'];      
              // Requete sql pour supprimer la ligne de la BDD qui est coché dans le tableau
              $Requete = $BDD->query("DELETE FROM tabrecepteur WHERE Tab_id = ".$tabid." ");
			  $url=$_SERVER["HTTP_REFERER"];
			  header("Location:".$url."");
             
                                       
          
           
                     
?>