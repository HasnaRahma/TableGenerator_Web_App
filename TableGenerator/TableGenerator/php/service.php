<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>مصلحة المستخدمين</title>
		 <link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="jquery-ui.min.css">
	<link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">
	<link href="CSS/monstyle.css" rel="stylesheet">	
	<link rel="stylesheet" href="drag_drop/bootstrap.fd.css"> 
	<link rel="stylesheet" href="CSS/style.css"> 
	
  </head>
  <body class="service">
 
  <button type="button" id="ItemDelete" class="btn btn-md center-block">  حذف نموذج</button>
	
 <div class="container" style="padding-top:200px;padding-left:30px;">
      <h1 > قائمة النماذج</h1>
    <div class="row">
		<div class="col-md-12">
                <div id="Carousel" class="carousel slide">
				
                <ol class="carousel-indicators">    
                </ol>
                 
                <!-- Carousel items -->
                <div class="carousel-inner"> 
                </div><!--.carousel-inner-->
				
                  <a data-slide="prev" href="#Carousel" class="left carousel-control">‹</a>
                  <a data-slide="next" href="#Carousel" class="right carousel-control">›</a>
                </div><!--.Carousel-->
                 
		</div>
	</div>
</div><!--.container-->
  

  <div class="modal fade" id="DeleteItem"  role="dialog">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
	 <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         <h4 class="modal-title"><span class="fa fa-table" aria-hidden="true"></span> حذف نموذج   </h4>
      </div><div class="modal-body">	
	<div class="container">
    <div class="row">  
        <div dir="rtl" class="col-xs-8 col-md-4  col-sm-2">  
		<label  class="control-label"> اختر اسم النموذج  </label>
          <select class="form-control Item-name" id="itemSelected" >
		        <option>        </option>
          </select></br>			   
        </div>
		</div></div><br><br><br>    
        <div class="modal-footer">
          <button type="button" class="btn btn-primary"  id="supprimerItem" data-dismiss="modal">نعم</button>
		    <button type="button" class="btn btn-primary"  data-dismiss="modal">الغاء</button >			
       </div> </div> </div></div></div>




 
  <script src="js/ServiceScript.js"></script>

    <script src='js/jquery.min.js'></script>
	
    <script src="js/rangy-core.js"></script>
	<script src="js/rangy-classapplier.js"></script>
	<script src="js/rangy-selectionsaverestore.js"></script>
	<script src="js/script.js"></script>
	<script src="js/Slide.js"></script>

	
	 <script src="js/jquery-ui.min.js"></script>
	<script src="js/colResizable-1.5.min.js"></script>
	<script src="js/yui.js"></script>
	<script src="bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
	<script src="drag_drop/bootstrap.fd.js"></script>
	<script  src="js/bootstrap-filestyle.min.js">  </script>
   <script>

</script>

	
  </body>
</html>
