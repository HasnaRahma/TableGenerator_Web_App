<?php
//Configurer le contrôle d'accès pour HTTP lorsqu'il appelle "fonts.googleapis.com" (ça ne marche pas :/ ))
header("Access-Control-Allow-Origin: *");
//Récupérer les valeurs transférée de la page connexion.php
 $Pseudo=$_GET['adremail'];
 $MotDePasse=$_GET['motpass'];
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
//Commencer les requetes demandées	
$Requete1 = $BDD->query("SELECT * FROM (utilisateur U join tabrecepteur T on (U.ut_id = T.rec_id) ) where U.Ut_adrEmail = '".$Pseudo."' AND U.Ut_motPass= '".$MotDePasse."' ORDER by T.Rem_date DESC");
$Requete2 = $BDD->query("SELECT * FROM (utilisateur U join tabrecepteur T on (U.ut_id = T.rec_id) ) where U.Ut_adrEmail = '".$Pseudo."' AND U.Ut_motPass= '".$MotDePasse."' ORDER by T.Rem_date DESC");

$data1 = $Requete2->fetch();
$rec_id = $data1['rec_id'];
$Requete3 = $BDD->query("SELECT *FROM  (utilisateur join tabrecepteur on (ut_id = em_id)) where rec_id ='".$rec_id."' ");


?>
<html>
	
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>فضاء العمل </title>
	<script src="js/TriTableauDynamique.js"></script>
	<link rel="stylesheet" type="text/css" href="CSS/styles.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"  >	
	</head>
	
	<body>
		<div id ="div2">
			<ul>
			<li> <a href="Index.php"> <ul> <li> <i class="material-icons"> power_settings_new</i> </li><li> <h4> خروج </h4> </li> </ul></a>
			<li> <a href="Index.php"> <ul> <li> <i class="material-icons">home</i> </li> <li> <h4> الرئيسة </h4> </li> </ul> </a>
			<li> <a href="Index.php"> <ul> <li> <i class="material-icons">keyboard_backspace</i> </li> <li> <h4> عودة </h4> </li> </ul</a>
			</ul>
		</div>
		<div id ="div3">
		 <div> <a> <h1 style="margin-top:0px;"> قائمة الجداول الغير مملوءة </h1> </a></div> 
		</div>
		
		<div class="center-div">
		<table class="center-div"> 
			<tr>
			<td width="150px"> 
			</td> 
			<td> <h4 id="white">   لاحظ ما يلي : يجب أن يتم ملئ الجدول قبل التاريخ المحدد له  في خانة :اخر أجل </h4></td>
			<td width="150px"> 
			</td>
		</tr>
		</table>
					
 
			<table class="avectri"  dir="rtl">
				<thead>
					<tr>
						<th>عنوان الجدول</th>
						<th>اسم المنشئ</th>
						<th>تاربخ التحديث</th>
						<th  data-tri="1" class="selection">اخر أجل</th>
					</tr>
				</thead>
				<tbody>
					<?php 
					while($data = $Requete1->fetch())
					{  
						$Requete3 = $BDD->query("SELECT *FROM  utilisateur where ut_id = '".$data['em_id']."'");
						$data2=$Requete3->fetch();
						 if ($data['Rem_date'] == NULL) { ?>
						<tr> <td> <a href="RecepteurTable.php?tabid=<?php echo $data['Tab_id']?>" > <?php echo $data['Tab_titre'] ?> </a> </td><td><?php echo $data2['Ut_prénom'] ?> </td><td><?php echo $data['ed_date']; ?> </td><td><?php echo $data['Delai'] ?> </td></tr>
						 <?php }
					}
					?>	
				</tbody>
			</table> 
		</div>	
	</body>
</html>