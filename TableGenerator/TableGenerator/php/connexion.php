<?php
/*
Page: connexion.php
*/

session_start(); // à mettre tout en haut du fichier .php, cette fonction propre à PHP servira à maintenir la $_SESSION/
if(isset($_POST['connexion'])) { // si le bouton "Connexion" est appuyé
    // on vérifie que le champ "Pseudo" n'est pas vide
    // empty vérifie à la fois si le champ est vide et si le champ existe belle et bien (is set)
    if(empty($_POST['pseudo'])) {
        echo "Le champ Pseudo est vide.";
    } else {
        // on vérifie maintenant si le champ "Mot de passe" n'est pas vide"
        if(empty($_POST['mot_de_passe'])) {
            echo "Le champ Mot de passe est vide.";
        } else {
            // les champs sont bien posté et pas vide, on sécurise les données entrées par le membre:
            $Pseudo = htmlentities($_POST['pseudo'], ENT_QUOTES, "ISO-8859-1"); // le htmlentities() passera les guillemets en entités HTML, ce qui empêchera les injections SQL
            $MotDePasse = htmlentities($_POST['mot_de_passe'], ENT_QUOTES, "ISO-8859-1");
            //on se connecte à la base de données:
            $mysqli = mysqli_connect("localhost", "root", "", "stagebatna");
            //on vérifie que la connexion s'effectue correctement:
            if(!$mysqli){
                echo "Erreur de connexion à la base de données.";
				
            } else {
                $super=1;
                // on fait maintenant la requête dans la base de données pour rechercher si ces données existe et correspondent:
                $Requete = mysqli_query($mysqli,"SELECT * FROM utilisateur WHERE Ut_adrEmail = '".$Pseudo."' AND Ut_motPass= '".$MotDePasse."'");
                //$Requete1 = mysqli_query($mysqli,"SELECT * FROM bddstagebatna WHERE username = '".$Pseudo."' AND superUser = '".$super."'");//je n'ai pas de super
                // si il y a un résultat, mysqli_num_rows() nous donnera alors 1
                // si mysqli_num_rows() retourne 0 c'est qu'il a trouvé aucun résultat
                if(mysqli_num_rows($Requete) == 0) {
                    echo "Le pseudo ou le mot de passe est incorrect, le compte n'a pas été trouvé.";
                } else 
				{
                    // on ouvre la session avec $_SESSION:
                    $_SESSION['pseudo'] = $Pseudo; // la session peut être appelée différemment et son contenu aussi peut être autre chose que le pseudo
					$Requete1 = mysqli_query($mysqli,"SELECT * FROM utilisateur WHERE Ut_adrEmail = '".$Pseudo."' AND Ut_motPass= '".$MotDePasse."' AND Se_id IS NULL ");
					//$Requete2 = mysqli_query($mysqli,"SELECT Se_nom FROM utilisateur join service WHERE Ut_adrEmail = '".$Pseudo."' AND Ut_motPass= '".$MotDePasse."' ");
					if(mysqli_num_rows($Requete1) == 0) //l'utilisateur est un employé de l'académie
					{
						
						header("Location:../PageUtilisateurAcademie.php? adremail=" .$_POST['pseudo']. " & motpass=" .$_POST['mot_de_passe']." ");
						//echo $_POST['var2'];
						//$mysqli_query($mysqli,"SELECT Se_nom FROM utilisateur join service WHERE Ut_adrEmail = "'.$Pseudo.'" AND Ut_motPass= "'.$MotDePasse.'" ");
						/*$dom = new DOMDocument('1.0','utf-8');
						$dom->validateOnParse=false;
						$dom->load('../PageUtilisateurAcademie.php');
						$col=$dom->getElementsByTagName('NomService');
						echo $col;	*/
					}
					else //l'utilisateur est un Recepteur(directeur d'un etablissement scolaire)
					 {
						 header("Location:../PageRecepteur.php?adremail=" .$_POST['pseudo']. " & motpass=" .$_POST['mot_de_passe']." ");
					 }
                }
            
                }
            }
        }
    }
?>
