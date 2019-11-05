<html >
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>الرئيسية</title>
  <link rel="stylesheet" type="text/css" href="css/IndexStyles.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
 
</head>

<body>
		<div>
			<image  src ="images/Logo4.png"></image>		
		</div>
		
    <div id="large-header" class="large-header"> 
        <div class="inner-container" style="top:calc(50vh - 300px);">
            <div class="box">
                <div class="login"> <img src="images/login_icon.png" alt="login_icon" /> </div>
                <form action="php/connexion.php" method="post">
                 <input type="text" name="pseudo" placeholder="اسم المستخدم" autocomplete="false" dir="rtl"/>
                 <input type="password" name="mot_de_passe" placeholder="كلمة السر"dir="rtl"/>
                 <button  style="width:300px;"type="submit" name="connexion" dir="rtl" >تسجيل دخول</button>
				  </form>
				 
			</div>
            </div>
        </div>
    </div>
</body>
</html>
