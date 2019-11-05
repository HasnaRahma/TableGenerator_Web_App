
	function insere_au_curseur(html,range) {
                 
          if (true) { // il faut window.getSelection().rangeCount!= 0
		          
                   
					var ancetre= range.commonAncestorContainer ;
					var i=0 ; 
					while($(ancetre).parents()[i] != $("#editor")[0] && i<$(ancetre).parents().length ) { i++;}
					
					if ($(ancetre).parents()[i]== $("#editor")[0] ) {
                         range.deleteContents();
                         var span = document.createElement("span");
                         span.innerHTML = html;	
                         range.insertNode(span); 
		                 $(span).replaceWith(span.innerHTML);
                    }  
					else { 
		            alert(" ضع المؤشر في المكان الذي تريد ان تدرج فيه ")
			            }	

				} 
		  	
        }

$(document).ready(function(){
	
	
	
	
	
	     // intégration de l'éditeur dans le div EditeurDANYA
	   $("#editeurDANYA").html("<div class='container' style='margin-top:10px;width: 930px; border:1px solid;padding-left:0;padding-right:0;border:1px solid #E6E5E3;border-radius: 0px;'>"+
	  " <div style='margin-bottom:-140px;'> <input type='checkbox' id='menuToggle'>"+
	  "<label for='menuToggle' class='menu-icon glyphicon' style='position:relative;top:4px;'>"+
	  "<span class=' glyphicon-chevron-right'></span></label>  "+
	  
	  
	  
	  



"<div class='image'></div><div class='tableaux'></div> </div> <div class='container' style='width:100%;margin-top:10px;margin-left:-15px;'>"+
 "<!-- Nav tabs --> <ul class='nav nav-tabs' style='width:100%;margin-top:-8px;' role='tablist'>  <li role='presentation' class='active'"+
" style='position:relative;top:4px;'><a href='#home' style='background-color:#659EC7;color:white;' aria-controls='home' "+
"role='tab' data-toggle='tab'> انشاء جدول </a></li> "+
"  </ul> <!-- Tab panes -->"+


" <div class='tab-content' style='background-color:#F9F8F6;width:100%;'> <div role='tabpanel' class='tab-pane active' id='home'> "+
"<table width='928' height='90' border='0' style='background-color:#F9F8F6;'> <tbody> <tr> <td width='40' rowspan='2'>"+

" <button type='button' class='newPage btn btn-default' aria-label='Left Align' style='border:0;position:relative;left:34px;'"+
" data-toggle='tooltip' data-placement='bottom' title='فتح ملف جديد'> <span class='fa fa-file-text-o' "+
"style='width:40px;height:48px;font-size:34px;margin-top:14px;margin-left:2px;'></span> </button> "+

"</td> <td width='40' style='border-right:1px solid #E6E5E3;'>"+
"  </td> <td width='30' rowspan='2' style='border-left:1px solid #E6E5E3;'> "+
" </td> <td width='200' rowspan='2'> <div class='btn-group' role='group'> "+

"<button type='button' class='btn btn-default dropdown-toggle btn-xs' "+
" data-toggle='dropdown' aria-haspopup='true' style='width:130px;margin-top:12px;margin-left:7px;background-color:white;'"+
"  data-toggle='tooltip' data-placement='bottom' title='تنسيق النص'> "+
"<span aria-hidden='true' style='font-size:12px;height:13px;padding-right:40px;'>&nbspعناوين </span> "+
"<span class='caret'></span> </button>"+

" <ul  dir='rtl' class='dropdown-menu'> <li><a id='ruban' href='#'><img src='images/ruban.jpg' width='140' height='30' />"+
"</a></li> <li ><a  style='text-align:justify;' id='titre1' href='#'>"+
"عنوان 1</a></li> <li>"+
"<a  id='titre2' style='text-align:justify;' href='#'>عنوان 2</a></li> <li>"+
"<a  style='text-align:justify;' id='titre3' href='#'>عنوان 3</a></li> </ul> </div>"+
" <div class='btn-group' role='group' >"+

" <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'  "+
"aria-haspopup='true' aria-expanded='false' style='position:relative;top:5px;left:6px; width:48px;height:23px;background-color:white;' "+
" data-toggle='tooltip' data-placement='bottom' title='حجم النص'> "+
"<span class='glyphicon glyphicon-text-size' style='font-size:12px;height:13px;position:relative;top:-5px;right:2px;'></span> "+
"<span class='caret' style='font-size:14px;height:13px;position:relative;top:-1px;left:2px;'></span> </button>"+


" <ul class='dropdown-menu' style=' min-width:60px;border-radius:10px;'> <li style='width:60px;'>"+
"<a class='textSize' id='10px' href='#'>1</a></li> <li style='width:60px;'><a class='textSize' id='13px' href='#'>2</a></li> "+
"<li style='width:60px;'><a class='textSize' id='16px'  href='#'>3</a></li> <li style='width:60px;'><a class='textSize' id= '18px' href='#'>4</a></li>"+
"<li style='width:60px;'><a class='textSize' id= '24px'   href='#'>5</a></li> <li style='width:60px;'><a  class='textSize' id='32px' href='#'>6</a></li> "+
"<li style='width:60px;'><a class='textSize' id= '48px'  href='#'>7</a></li> </ul> </div> "+

"<div class='btn-group' style='margin-left:-10px;padding-top:5px;position:relative;left:20px;'> "+


"<button type='button' id='bold_icone' class='bold_icone btn btn-default btn-sm' data-toggle='tooltip' data-placement='bottom' title='غليظ' "+
" aria-label='Left Align' style='border:0'> <span class='glyphicon glyphicon-bold' aria-hidden='true'></span> </button>"+

" <button type='button' id='italic_icone' class='italic_icone btn btn-default btn-sm' data-toggle='tooltip' data-placement='bottom' "+
"title='مائل' aria-label='Left Align'style='border:0'> <span class='glyphicon glyphicon-italic' aria-hidden='true'></span> </button>"+

" <button type='button' id='underline_icone' class='underline_icone btn btn-default btn-sm' data-toggle='tooltip' "+
"data-placement='bottom' title='مسطر' aria-label='Left Align'style='border:0'> <span class='fa fa-underline' aria-hidden='true'></span> </button> "+
"</div> "+


"<div class='btn-group' role='group'>"+
" <button type='button' class='btn btn-default dropdown-toggle btn-sm' data-toggle='dropdown'"+
" title='لون النص' aria-haspopup='true' aria-expanded='false' style='background-color:white;position:relative;left:50px;height:25px;'>"+
" <span class='glyphicon glyphicon-text-color' style='position:relative;top:-1px;'></span>"+
" <span class='caret' style='position:relative;top:-3px;left:2px;'></span> </button> "+


"<ul class='dropdown-menu'>"+
" <li> <div class='btn-group'> "+
"<button type='button' class='btn btn-default btn-xs changeColor' id='black'"+
" style='background-color: black;border-color: black;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom'"+
" title='Noir' aria-hidden='true'></button> "+


"<button type='button' class='btn btn-default btn-xs changeColor'  id='grey' "+
"style='background-color: grey;border-color: grey;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' "+
"title='Gris' aria-hidden='true'></button> <button type='button' class='btn btn-default btn-xs changeColor' id='silver' style='background-color:"+
" silver;border-color: silver;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Argent' "+
"aria-hidden='true'>"+

"</button> <button type='button' class='btn btn-default btn-xs changeColor' id='darkblue' style='background-color: "+
"darkblue;border-color: darkblue;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Bleu foncé' aria-hidden='true'>"+
"</button> "+

"<button type='button' class='btn btn-default btn-xs changeColor' id='blue' "+
" style='background-color: blue;border-color: blue;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' "+
"title='Bleu' aria-hidden='true'></button> "+

"<button type='button' class='btn btn-default btn-xs changeColor' id='cyan' style='background-color: "+
"cyan;border-color: cyan;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Cyan' aria-hidden='true'></button> "+


"<button type='button' class='btn btn-default btn-xs changeColor'  id='green' style='background-color: green;border-color: "+
"green;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Vert' aria-hidden='true'></button>"+


" <button type='button' class='btn btn-default btn-xs changeColor'  id='lime' style='background-color: lime;border-color:"+
" lime;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Citron' aria-hidden='true'></button>"+


" <button type='button' class='btn btn-default btn-xs changeColor' id='red'  style='background-color: red;border-color: "+
"red;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Rouge' aria-hidden='true'></button>"+


" <button type='button' class='btn btn-default btn-xs changeColor'  id='purple'  style='background-color: purple;border-color: "+
"purple;margin:2px;width:18px;height:18px;' data-placement='bottom' title='Violet' aria-hidden='true'></button>"+


" <button type='button' class='btn btn-default btn-xs changeColor' id='magenta' style='background-color: magenta "+
";border-color: magenta;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='magenta' "+
"aria-hidden='true'></button> "+


"<button type='button' class='btn btn-default btn-xs changeColor' id='orange' style='background-color:"+
" orange;border-color: orange;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Orange' aria-hidden='true'></button>"+


" <button type='button' class='btn btn-default btn-xs changeColor' id='yellow' style='background-color: yellow;border-color: "+
"yellow;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Jaune' aria-hidden='true'></button>"+


" <button type='button' class='btn btn-default btn-xs changeColor' id='white' style='background-color:"+
" white;border-color: silver;margin:2px;width:18px;height:18px;' data-toggle='tooltip' data-placement='bottom' title='Blanc'"+
" aria-hidden='true'></button>"+



" </div> </li> </ul> </div> "+




"</td>  <td width='155' rowspan='2' style='border-left:1px solid #E6E5E3;border-radius: "+
"0px;'> <div class='btn-group'> <div class='btn-group' style='margin-top:12px;margin-left:22px;border-right:1px solid #E6E5E3;border-radius: 0px;'> "+

"<button id='puce1' type='button' class='btn btn-default btn-sm' aria-label='Left Align' style='border:0;' data-toggle='tooltip' data-placement='bottom'"+
" title='ترقيم' aria-hidden='true'> <span class='fa fa-list-ol' aria-hidden='true'></span> </button> "+

"<button id='puce' type='button' class='btn btn-default btn-sm' aria-label='Left Align' style='border:0' data-toggle='tooltip' data-placement='bottom'"+
" title='Puces' aria-hidden='true'> <span class='fa fa-list-ul' aria-hidden='true'></span> </button>"+



"<button type='button'"+
" class='btn btn-default btn-sm insererTableau' aria-label='Left Align' style='border:0;' data-toggle='tooltip' data-placement='bottom'"+
" title='إدراج جدول' aria-hidden='true'> <span class='fa fa-table' aria-hidden='true'></span> </button>"+


" <button type='button' "+
" class='insererLien btn btn-default btn-sm' data-toggle='tooltip' data-placement='bottom'  id='LigneHoriz' title='اضافة سطر افقي' aria-label='Left Align' "+
"style='border:0'> <i class='glyphicon glyphicon-minus'></i> </button>"+


" </div>  <div class='btn-group' style='margin-left:22px;padding-top:2px;'>"+
" <button id='gauche' type='button' class='align btn btn-default btn-sm' aria-label='Left Align' style='border:0' "+
"data-toggle='tooltip' data-placement='bottom' title='محاذاة إلى اليسار' aria-hidden='true'> "+
"<span class='glyphicon glyphicon-align-left' aria-hidden='true'></span> </button>"+


" <button  id='centre' type='button' class='align btn btn-default btn-sm' aria-label='Left Align' style='border:0' "+
" data-toggle='tooltip' data-placement='bottom' title='مركز' aria-hidden='true'> <span class='glyphicon glyphicon-align-center'"+
" aria-hidden='true'></span> </button> "+


"<button id='droite' type='button' class='align btn btn-default btn-sm' aria-label='Left Align' style='border:0' "+
"data-toggle='tooltip' data-placement='bottom' title='محاذاة إلى اليمين' aria-hidden='true'> <span class='glyphicon glyphicon-align-right' aria-hidden='true'>"+
"</span> </button>"+

" <button id='justifier' type='button' class='align btn btn-default btn-sm' "+
" aria-label='Left Align' style='border:0;border-right:1px solid #E6E5E3;border-radius: 0px;' data-toggle='tooltip' "+
" data-placement='bottom' title='تبرير' aria-hidden='true'> <span class='glyphicon glyphicon-align-justify' aria-hidden='true'></span> </button>"+



"  </div> </div> </td>  <td width='40' style='border-left:1px solid #E6E5E3;border-radius: 0px;'>"+

" <button id='undo' type='button' class='btn btn-default' aria-label='Left Align' style='height:49px;margin-top:21px;border:0' "+
"data-toggle='tooltip' data-placement='bottom' title='الغاء' aria-hidden='true'> "+
"<span class='fa fa-reply' aria-hidden='true' style='color:#659EC7;width:40px;height:25px;font-size:28px;'></span> </button> "+

"</td>"+
" <td width='40' style='border-right:1px solid #E6E5E3;border-radius: 0px;'>"+


" <button id='redo' type='button' class='btn btn-default' aria-label='Left Align' "+
"style='height:49px;margin-top:21px;border:0' data-toggle='tooltip' data-placement='bottom' title='إعادة' aria-hidden='true'> "+
"<span class='fa fa-mail-forward' aria-hidden='true' style='color:#659EC7;width:40px;height:25px;font-size:28px;'></span> </button> "+


"</td> <td width='40' style='position:relative;left:1px;'> "+

"<button type='button'"+
" class='telechargerTableau btn btn-default A' aria-label='Left Align' data-toggle='modal' data-target='#myPreviewModal'"+
" style='height:49px;margin-top:21px;border:0' data-toggle='tooltip' data-placement='bottom' color='#659EC7' title='تحميل الجدول' aria-hidden='true'>"+
" <i class='fa fa-download fa-3x' aria-hidden='true'></i> </button>"+

" </td>"+
" <td width='40' > "+

"<button type='button' id='addModel' class='btn btn-default A' aria-label='Left Align' style='height:49px;margin-top:21px;border:0'"+
" data-toggle='tooltip' color='#659EC7' data-placement='bottom' title='حفظ كنموذج' aria-hidden='true'> <i class='fa fa-file-text fa-3x' aria-hidden='true' ></i></button>"+

" </td> <td width='40' > "+
"<button type='button' id='add' class='btn btn-default A' aria-label='Left Align' style='height:49px;margin-top:21px;border:0; background-color:transparent'"+
" data-toggle='tooltip' data-placement='bottom' title='اضافة تعليق' aria-hidden='true'> <i class='fa fa-comments fa-3x' aria-hidden='true'></i> </button>"+

" </td> </tr> <tr> <td> </td>  "+
"  <td style='border-left:1px solid #E6E5E3;border-radius: 0px;'><p style='margin-top:-5px;font-size:12px;margin-left:11px;'> "+

"الغاء</p></td> <td style='border-right:1px solid #E6E5E3;border-radius: 0px;'>"+

"<p style='margin-top:-5px;font-size:12px;margin-left:11px;'>اعادة</p></td> <td style='position:relative;top:5px;left:2px;'>"+

"<p dir='rtl' style='font-size:12px;margin-bottom:-13px;margin-top:-10px;'>&nbsp&nbsp&nbsp تحميل الجدول</p></td> <td>"+

"<p dir='rtl'style='margin-top:15px;font-size:12px;margin-right:30px;'>حفظ كنموذج</p></td> <td>"+

"<p   style='margin-top:-6px;margin-left:20px;position:absolute;font-size:12px;text-align:center;'>تعليق</p></td> </tr> <tr> "+

"<td style='position:relative;left:26px;'>&nbsp&nbsp&nbsp جديد</td> <td colspan='2'></td>"+

" <td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp الخط</td>"+

" <td style='border-left:1px solid #E6E5E3;border-radius: 0px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp فقرة</td> "+

"<td colspan='2' style='border-left:1px solid #E6E5E3;border-right:1px solid #E6E5E3;border-radius: 0px;'>"+
"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </td> <td colspan='3'>"+

"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </td> </tr> </tbody> </table>  </div> "+

"<div role='tabpanel' class='tab-pane' id='insert'> <table width='928' height='90' border='0' style='background-color:#F9F8F6;'> <tbody>"+



"</div> </td> <td>&nbsp </td>"+	
"<td>&nbsp&nbsp&nbsp </td><td>&nbsp&nbsp&nbsp </td><td>&nbsp&nbsp&nbsp </td><td>&nbsp&nbsp&nbsp </td>"+
" <td style='border-left:1px solid #E6E5E3;border-radius: 0px;'>&nbsp&nbsp&nbsp </td> <td width='40' "+
"style='position:relative;bottom:6px;right:37px;'> "+

"<button type='button' class='btn btn-default'"+
" aria-label='Left Align' style='height:49px;margin-top:21px;border:0' data-toggle='tooltip' data-placement='bottom' "+
" title='Affichage' aria-hidden='true'> <span class='glyphicon glyphicon-download-alt' aria-hidden='true' "+
"style='width:32px;height:38px;font-size:26px;'></span> </button>"+

" </td> <td width='40' style='position:relative;bottom:6px;right:17px;'> "+

"<button type='button' class='btn btn-default afficherD' aria-label='Left Align' style='height:49px;margin-top:21px;border:0' "+
"data-toggle='tooltip' data-placement='bottom' title='كود دي' aria-hidden='true'> <span class='fa fa-language' aria-hidden='true' "+
"style='width:32px;height:38px;font-size:26px;'></span> </button>"+

"</td> <td width='40' style='position:relative;bottom:6px;right:8px;'> "+

"<button type='button' class='btn btn-default afficherHTML' aria-label='Left Align' style='height:49px;margin-top:21px;border:0;'"+
" data-toggle='tooltip' data-placement='bottom' title='Voir le code HTML' aria-hidden='true'> <span class='fa fa-code' aria-hidden='true' "+
"style='width:32px;height:38px;font-size:26px;'></span> </button>"+

"</td> </tr> <tr style='position:relative;top:6px;padding-bottom:4px;height:42px;left:2px;'>"+

"<td></td><td style='position:relative;bottom:16px;left:278px;'><p style='margin-top:-5px;font-size:12px;'>Code-HTML</p></td><td width='60' "+
"style='position:relative;bottom:15px;left:157px;'><p style='margin-top:-5px;font-size:12px;'>Code-D</p></td>"+

"<td style='position:relative;bottom:11px;left:26px;border-left:1px solid #E6E5E3;border-radius: 0px;'>"+

"<p style='margin-top:-5px;margin-left:0px;font-size:12px;'>Télécharger &nbsp&nbsp&nbsple code D</p></td> </tr> </tbody> </table>"+


" </div> </div> </div> <div data-toggle='context' data-target='#context-menu' ><div dir='rtl' id='editor'  contenteditable='true'> "+

" <div>&nbsp;&nbsp;</div></div></div>  </div>")
	     // pour qu'il ait toujours quelque chose dans l'editeur ie un range pour qu'insérer au curseur fonctionne toujours
	     $("#editor").click(function(){if($("#editor").html()=="")$("#editor").html("<div>&nbsp;&nbsp;</div>")});
/*********** Tooltips *************/

	 $("#bold_icone").tooltip() ;
	  $(".newPage").tooltip() ;
	  $("#italic_icone").tooltip() ;
	  $("#underline_icone").tooltip() ;
	  $("#puce1").tooltip() ;
	  $("#puce").tooltip() ;
	  $(".insererLien").tooltip() ;
	  $("#gauche").tooltip() ;
	  $("#centre").tooltip() ;
	  $("#droite").tooltip() ;
	  $("#justifier").tooltip() ;
	  $("#undo").tooltip() ;
	  $("#redo").tooltip() ;
	  $(".afficherD").tooltip() ;
	  $(".insererImage").tooltip() ;
	  $(".insererTableau").tooltip() ;
	  $(".telechargerD").tooltip() ;
	  $(".afficherHTML").tooltip() ;
	  $(".sect").tooltip() ;
	  $(".tabTooltip").tooltip() ;     
  
     


/**************************************************** Modals ***************************************************************/
  

	   

    
	   
 var tableModal=' <div class="modal fade" id="myModal2"  role="dialog">'+
   ' <div class="modal-dialog modal-lg">'+
     ' <div class="modal-content">'+
        '<div class="modal-header">'+
          '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
         ' <h4 class="modal-title"><span class="fa fa-table" aria-hidden="true"></span>    جدول   </h4>'+
      '  </div><div class="modal-body">	'+
	'<div class="container">'+
   ' <div class="row"> '  + 	 
        '<div dir="rtl" class="col-xs-8 col-md-4  col-sm-2">  '+
		'<label  class="control-label"> عدد الاسطر </label>'+
          ' <input class="form-control" type="number" id="lig" step="1"  min="1" max=""><br>'+
		 '<label class="control-label"> عدد الاعمدة </label>'+
           '<input class="form-control" type="number" id="col" step="1"  min="1" max=""><br>'+
		   '<label class="control-label"> حجم الحدود </label>'+
           '<input class="form-control" type="number" id="bord" step="1"  min="1" max=""><br>'+
		   '<label class="control-label"> عرض الجدول </label>'+
           '<input class="form-control" type="number" id="w" step="1" placeholder=" px" min="1" max=""><br>'+
		   '<label class="control-label">  ارتفاع الجدول</label>'+
           '<input class="form-control" type="number" id="h" step="1" placeholder=" px" min="1" max=""><br>'+
           '<label class="control-label"> وضعية الجدول </label>'	+
		'<select class="form-control" id="Tabpos" >'+
		        ' <option>        </option>'+
                 '<option> يمين </option>'+
                 '<option> يسار </option>'+
                ' <option> مركز </option>'+
         ' </select></br>'+			   
        '</div></div></div> '+
        '<div class="modal-footer">'+
          '<button type="button" class="btn btn-primary"  id="table" data-dismiss="modal">نعم</button>'+
		    '<button type="button" class="btn btn-primary"  data-dismiss="modal">الغاء</button >' +			
       ' </div> </div> </div></div></div>';
	   
	   $("body").prepend(tableModal) ;	
	   
	   
	   
	   var ModelModal=' <div class="modal fade" id="ModelModal"  role="dialog">'+
   ' <div class="modal-dialog modal-lg">'+
     ' <div class="modal-content">'+
        '<div class="modal-header">'+
          '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
         ' <h4 class="modal-title"><span class="fa fa-table" aria-hidden="true"></span>  اضافة نموذج   </h4>'+
      '  </div><div class="modal-body">	'+
	'<div class="container">'+
   ' <div class="row"> '  + 	 
        '<div dir="rtl" class="col-xs-8 col-md-4  col-sm-2">  '+
		'<label  class="control-label">  اسم النموذج </label>'+
          ' <input class="form-control" type="text" id="ModelName" ><br>'+		   
        '</div></div></div><br><br><br>    '+
        '<div class="modal-footer">'+
          '<button type="button" class="btn btn-primary"  id="modele" data-dismiss="modal">نعم</button>'+
		    '<button type="button" class="btn btn-primary"  data-dismiss="modal">الغاء</button >' +			
       ' </div> </div> </div></div></div>';
	   
	   $("body").prepend(ModelModal) ;	
	   
	   /****************************************** Cellule Modal **********************************************************/



 

	   /********************************************** Menu contextuel ****************************************************/
var  ContextMenu='<div  id="context-menu" class="dropdown">'+
  '<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">'+
    
   
   '<li><a  href="#" class="insererTableau"><span class="glyphicon glyphicon-th" >      ادراج جدول   </span></a></li>'+
   	' <li role="separator" class="divider"></li>'+
	 '<li  class="cupcake dropdown-submenu" ><a href="#">   خلية   </a>'+
	' <ul class="dropdown-menu">'+
	'<li class="cupcake" id="non"><a class="Merge" id="CellWidht" href="#">   عرض الخلية  </a></li>'+
	'<li class="cupcake" ><a class="Merge" id="CellHeight" href="#">   ارتفاع الخلية </a></li>'+
	'<li class="cupcake" ><a class="Merge" id="CellBorder" href="#"> تلوين الخلية  </a><input id="c" class="jscolor" value="ab2567"></li>'+
	 '<li class="cupcake" ><a class="Merge"    href="#">   </a></li>'+
	'</ul></li>'+
    '<li  class="cupcake dropdown-submenu" ><a href="#">   سطر   </a>'+
	' <ul class="dropdown-menu">'+
	 '<li class="cupcake"><a  class="Line" id="lineBefore" href="#">   إدراج سطر قبل    </a></li>'+
	 '<li class="cupcake"><a class="Line" id="lineAfter"  href="#"> إدراج سطر بعد   </a></li>'+
	 '<li class="cupcake"><a  class="Line" id="deleteLine"  href="#">  حذف سطر  </a></li>'+
	'</ul></li>'+
	 '<li class="cupcake dropdown-submenu"><a  href="#">    عمود  </a>'+
	 ' <ul class="dropdown-menu">'+
	  '<li class="cupcake"><a  id="columnBefore" class="Column" href="#">  ادراج عمود قبل   </a></li>'+
	 '<li class="cupcake"><a id="columnAfter" class="Column"   href="#">  ادراج عمود بعد    </a></li>'+
	 '<li class="cupcake"><a id="deleteColumn"  class="Column" href="#">  حذف عمود  </a></li>'+
	 '</ul></li>'+
	  '<li class="cupcake"><a  id="deleteTable" href="#">  حذف الجدول   </a></li>'+
   	' <li role="separator" class="divider"></li>'+
     '<li><a tabindex="-1" href="#"><span class="glyphicon glyphicon-ok-sign" >     الغاء    </span></a></li>'+
  '</ul>'+
'</div>';



$("body").prepend(ContextMenu) ;	
$('.context').contextmenu();


	 /**********************************************************************************************/  
	   var range1;
	   
/*********************************************** Image ***********************************************************************/
function insere_au_curs(elem,range) {

	if (true) { // il faut window.getSelection().rangeCount!= 0


		var ancetre= range.commonAncestorContainer ;
		var i=0 ;
		while($(ancetre).parents()[i] != $("#editor")[0] && i<$(ancetre).parents().length ) { i++;}

		if ($(ancetre).parents()[i]== $("#editor")[0] ) {
			range.deleteContents();
			range.insertNode(elem);
			//	$(span).replaceWith(span.innerHTML);
		}
		else {
			alert("ضع المؤشر في المكان الذي تريد ان تدرج فيه")
		}

	}

}



/************************************************** Nouvelle************************************/

	$(".newPage").click(function(){
		$("#editor").html("<div>&nbsp;&nbsp;</div>");
	})



					  

	    
 /********************************************Insertion des tableaux****************************************************************/
	var ra ;	 
$(".insererTableau").click(function(){  //Insérer un tableau
 ra = window.getSelection().getRangeAt(0);
	$('#myModal2').modal('show');
     
	});		 



	$("#table").click (function(){
	var editor = document.getElementById ("editor");
        var table = document.createElement('TABLE');
		var pos=document.getElementById("Tabpos").value;
		var border=document.getElementById("bord").value;
		$(table).css('width','50%').addClass("tableau")
		$(table).css('table-layout','fixed');
		$(table).css('width','80%');
		$(table).css('overflow','auto');
		$(table).css('word-wrap','break-word');	
		       
		table.tabindex= '1'
		
		
		if(border){
			 table.border = border;
			 
		}else {
			
			table.border =1;
		}
				
	   if(pos == "يمين") {
		   table.align='right';
		   
	   }else if(pos == "يسار") {
		   table.align='left';
		   
	   } else if (pos == "مركز") {
		   table.align='center';
		   
	   }
		
        var tableBody = document.createElement('TBODY');
		
        table.appendChild(tableBody);
        var n = document.getElementById("col").value; 
		
		var m = document.getElementById("lig").value; 
		var w = document.getElementById("w").value; 
		var h = document.getElementById("h").value; 
		if(w) $(table).css('width',w+'px');
		if(h) $(table).css('height',h+'px');
		
		var tableW = new Number($(table).css("width").slice(0,-2)) ;
		var columnW = tableW / n ;
		
        var tr = document.createElement('TR');
		$(tr).addClass("trEntete") 
		
        tableBody.appendChild(tr);
		for (var j = 0; j < n; j++) {
            var td = document.createElement('TD');
		    td.style.width = columnW; 
			//td.style.height = '30px';
			$(td).addClass("tdEntete") ;
            td.appendChild(document.createTextNode(""));
            tr.appendChild(td);
        }  	   
      	 for (var i = 0; i < (m-1); i++) {   
		var tr = document.createElement('TR');
		$(tr).addClass("trLigne")
        tableBody.appendChild(tr);
        for (var j = 0; j < n; j++) {
            var td = document.createElement('TD');
			//td.style.height = '30px';
			td.style.width = columnW ; 
			$(td).addClass("tdLigne");
            tr.appendChild(td);
        }
		 } 
		   var div = document.createElement('div'); 
		   div.appendChild(table);
		   $(div).attr("class","delTable");
		
           insere_au_curseur($(div).html()+"<div contenteditable='false'>&nbsp;</div></br>",ra);
		  
	
	 
	   })	 ;




/*******************Add comment********************/
	
	
	/****commentaire*****/
	
	$("#add").click(function(){
		var range1 = window.getSelection().getRangeAt(0);
		 insere_au_curseur('<div class="Secs"><div dir="rtl" align="right" class="Observation" contenteditable="false"><b>تعليق</b></div><div align="justify" class="ObservationContenu sections psections" contenteditable="true">أضف تعليقك هنا...</div></div><span></span><br><br/>',range1);	 
	});
	
	
			// garder le focus sur les sections quand on clique sur ces dernières 
$('html').on('click','.sections',function(){ 
				$(this).parents('#editor,.colonnes,.colonnes_f,.tabFocus').attr('contenteditable','false')
				$(this).parents('#editor,.colonnes,.colonnes_f,.tabFocus').click(function(){$('#editor,.colonnes,.colonnes_f,.tabFocus').attr('contenteditable','true');})
				}
				
				
				);	
$('html').on('click','.tabFocus',function(){ 
				$('#editor').attr('contenteditable','false')
				$('#editor').click(function(){$('#editor').attr('contenteditable','true');})
				}
				
				
				);

/*** Fonction qui fait disparaitre le texte superflu ***/
	
			
	$("html").on('click',".psections",function(e) { 
	           $(this).removeClass("psections");
	          $(this).html('<br>');
			 
	
	
	});	
	
	
	/*************************************************************************************************************/

		function getSelectionHtml() {
   
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            container.appendChild(sel.getRangeAt(0).cloneContents());   
        }
    
       return container.innerHTML; ;
     }
	 /***************************************/
	  
	 $("#LigneHoriz").click(function(){ 
	 var range1 = window.getSelection().getRangeAt(0);
	 insere_au_curseur('<hr style="height:2px;border-width:0;color:gray;background-color:gray">',range1);
	 //nsere_au_curseur('<tr valign="top" style="height:2px;border-width:0;color:gray;background-color:gray">',range1);
		
      });
	 /**Insertion des puces **/
	 
	 $("#puce").click(function(){ // Non numérotées
	 var range1 = window.getSelection().getRangeAt(0);
	insere_au_curseur('<ul dir="rtl"><li></li></ul>',range1);
		
      });
	  
	  
     $("#puce1").click(function(){  //Numerotée
	 var range1 = window.getSelection().getRangeAt(0);
	insere_au_curseur('<ol dir="rtl"><li></li></ol>',range1);
		
      });	
      
      /**Insertion des titres**/
      
      $("#titre1").click(function(){ //titre 1
	  var range1 = window.getSelection().getRangeAt(0);
	  if (getSelectionHtml().length<1) {
	 insere_au_curseur('<h3 class="psections">أدخل العنوان هنا ...<br></br></h3>',range1);	
	  }
	  else 
	  {
		  insere_au_curseur('<h3>'+getSelectionHtml()+'</h3>',range1);
		  
	  }
	});
	$("#titre2").click(function(){ //titre 2
	var range1 = window.getSelection().getRangeAt(0);
	 if (getSelectionHtml().length<1) {
	 insere_au_curseur('<h4 class="psections">أدخل العنوان هنا ...<br></br></h4>',range1);	
	  }
	  else 
	  {
		  insere_au_curseur('<h4>'+getSelectionHtml()+'<br></br></h4>',range1);
		  
	  } 
	});	
	$("#titre3").click(function(){  //titre 3
	var range1 = window.getSelection().getRangeAt(0);
	 if (getSelectionHtml().length<1) {
	 insere_au_curseur('<h5 class="psections">أدخل العنوان هنا ...</h5>',range1);	
	  }
	  else 
	  {
		  insere_au_curseur('<h5>'+getSelectionHtml()+'</h5>',range1);
		  
	  }
	});	
	
	
	$("#ruban").click(function(){  //Ruban
	var range1 = window.getSelection().getRangeAt(0);
	 if (getSelectionHtml().length<1) {
	 //insere_au_curseur('<div id="fond"><div class="ruban"><h2 contenteditable="true" class="psections">Inserer le titre ici ...</h2></div><div class="ruban_gauche"></div><div class="ruban_droit"></div></div><br><br>',range1);	
	  insere_au_curseur('<div id="fond"><div contenteditable="false"><h2 class="ribbon" style="font-size:18px;"><div class="ribbon-content psections" contenteditable="true">Insérer le titre ici ...</div></h2></div></div><br/>',range1);
	}
	  else 
	  {
		  //insere_au_curseur('<div id="fond" contenteditable"true"><div class="ruban" contenteditable"true"><h2>'+getSelectionHtml()+'</h2></div><div class="ruban_gauche"></div><div class="ruban_droit"></div></div><br><br>',range1);
		  insere_au_curseur('<div id="fond"><div contenteditable="false"><h2 class="ribbon" style="font-size:18px;"><div class="ribbon-content psections" contenteditable="true">'+getSelectionHtml()+'</div></h2></div></div><br/>',range1);
	  }
	});	

		
 

/******************************************/

	$('html').on('click','.khchin', function(){
		
		var toDelete = this ;
		while( toDelete.nodeName.toLowerCase() != 'td'){
		
			toDelete = toDelete.parentNode ;
		}
		
		$(toDelete).remove() ;
	});


	/********************************************************************************************/
  rangy.init() ;

		rangy.init() ;

	var boldApplier = rangy.createClassApplier("gras");


	function toggleBold(){
		boldApplier.toggleSelection() ;
	}

	$('.bold_icone').click(function(){
		toggleBold() ;
		return false ;
	}) ;

	var iApplier = rangy.createClassApplier("italique");

	function toggleItalique(){
		iApplier.toggleSelection() ;

	}

	$('.italic_icone').click(function(){
		toggleItalique() ;
		return false ;
	}) ;

	

	
	
	
	
	
	
	
	

	var sApplier = rangy.createClassApplier("souligne"); 

	function toggleSouligne(){
		sApplier.toggleSelection() ;
	}

	$('.underline_icone').click(function(){
		toggleSouligne() ;
		return false ;
	}) ;


	$('.align').click(function(e) {

		var id = this.id;

		var fatherBegin = window.getSelection().anchorNode;
		if(fatherBegin.nodeType == Node.TEXT_NODE ){ // à revoir !!!!

			fatherBegin = fatherBegin.parentNode ;
		}

		if(fatherBegin.nodeName.toLowerCase() == "figcaption"){
			fatherBegin = fatherBegin.parentNode ;
		}


		if($(fatherBegin).hasClass("ui-wrapper")){ // image avec resize
			fatherBegin = fatherBegin.parentNode ;
		}
		console.log(fatherBegin.nodeName) ;
		console.log($(fatherBegin).attr('id')) ;


		var fatherEnd = window.getSelection().focusNode ;
		if(fatherEnd.nodeType == Node.TEXT_NODE ){ // le cas d'une image

			fatherEnd = fatherEnd.parentNode ;

		}

		if(fatherEnd.nodeName.toLowerCase() == "figcaption"){
			fatherEnd = fatherEnd.parentNode ;
		}

		if($(fatherEnd).hasClass("ui-wrapper")) { // image avec resize
			fatherEnd = fatherEnd.parentNode ;
		}
		console.log(fatherEnd.nodeName) ;
		
		var end_1 = false;
		var end_2 = false;
		while (!end_1 || !end_2) {
			if (fatherBegin.nodeName.toLowerCase() === "span") { // le cas du texte
				fatherBegin = fatherBegin.parentNode;
			} else {
				end_1 = true;
			}
			if (fatherEnd.nodeName.toLowerCase() === "span") {
				fatherEnd = fatherEnd.parentNode;
			} else {
				end_2 = true;
			}
		}
		while (fatherBegin !== fatherEnd && fatherBegin) {

			fatherBegin.setAttribute("class", id);
			fatherBegin = fatherBegin.nextElementSibling;
		}

		if (fatherEnd) {
			fatherEnd.setAttribute("class", id);
		}
		$("figure").parent().each(function(){
			var c = $(this).attr("class") ;
			$(this).children("figure").attr("class",c);
			$(this).removeAttr("class") ;

		});
		$("#editor").removeAttr("class");// to prevent the editor from being aligned due to user selection


		return false ;
	}) ;


	 $(".textSize").click(function() {

        var size = this.id;

        var fontSizeAppliers = [rangy.createClassApplier("taille1")
        ,rangy.createClassApplier("taille2"),rangy.createClassApplier("taille3"),
            rangy.createClassApplier("taille4"),rangy.createClassApplier("taille5"),
            rangy.createClassApplier("taille6"),rangy.createClassApplier("taille7") ]

        var index ;
        switch(size) {
            case '10px' :
                index = 0 ;
                break ;
            case '13px' :
                index = 1 ;
                break ;
            case '16px' :
                index = 2 ;
                break ;
            case '18px' :
                index = 3 ;
                break ;
            case '24px' :
                index = 4 ;
                break ;
            case '32px' :
                index = 5 ;
                break ;
            case '48px' :
                index = 6  ;
                break ;
            default:
                alert("error !") ;
        }
        for(var i = 0; i < 7 ; i++) {
            if(fontSizeAppliers[i].isAppliedToSelection()){
                fontSizeAppliers[i].toggleSelection() ;
            }
        }


        fontSizeAppliers[index].toggleSelection() ;
       

    });

    $(".changeColor").click(function(){
		rangy.createClassApplier("couleur").toggleSelection()
       var color = this.id ;
       
        var colorApplier = rangy.createClassApplier("colorChanged") ;
        colorApplier.applyToSelection() ;
	$(".colorChanged")[0].style.color=color;
        $(".colorChanged").removeClass("colorChanged");


    });
   

    
	$(".Line").click(function(){
		var id = this.id ;
		var fatherBegin = window.getSelection().anchorNode;
		while (fatherBegin.nodeName.toLowerCase() != "tr"){
			fatherBegin = fatherBegin.parentNode ;
		}
		var currentLine = fatherBegin ;
		
		var table = $(currentLine).parents("table");
		

		var toInsert = $(currentLine).clone() ;
		toInsert.find('td').html('') ;
		
		if(id=="lineAfter"){
			$(currentLine).after(toInsert);
		}else if(id=="lineBefore"){
			$(currentLine).before(toInsert);
		}else{
			$(currentLine).remove() ;
		}

		$(table).find("tr").each(function(i,v){
			if(i==0) {
				$(this).attr('class',"trEntete");
				$(this).children().each(function(){
					$(this).attr("class","tdEntete");
				});
			}else {
				$(this).attr('class','trLigne').children().each(function(){
					$(this).attr("class","tdLigne");
				}) ;

			}
		});
		
		if(!($(table).find("td")).length ) {
			$(table).parent().remove() ;
		}
	});


	$('.Column').click(function(){

		var id = this.id ;
		var currentColumn = window.getSelection().anchorNode ;
		while(currentColumn.nodeName.toLowerCase() != "td" ){
			currentColumn = currentColumn.parentNode ;
			
		}
		var table = currentColumn.parentNode ;
		while(table.nodeName.toLowerCase() != 'table'){
			table = table.parentNode ;
		}
		

		var index = $(currentColumn).index();
	
		var tableW = new Number($(table).css("width").slice(0,-2)) ;

		$(table).find('tr').each(function(){
			var newColumn = $(currentColumn).clone() ;
			
			newColumn.html('');
			if(id=="columnAfter"){
				$(this).find('td').eq(index).after(newColumn) ;
			}else if(id == "columnBefore") {
				$(this).find('td').eq(index).before(newColumn) ;
			}else {
				$(this).find('td').eq(index).remove() ;
			}


		});
		var numCol = ($(table).find("tr").eq(0).find("td")).length ;
		var columnW = tableW / numCol ;
		
		$(table).find("tr").each(function(i,v){
			if(i==0) {
				$(this).attr('class',"trEntete");
				$(this).children().each(function(){
					$(this).attr("class","tdEntete");
					$(this).css("width",columnW) ;
				});
			}else {
				$(this).attr('class','trLigne').children().each(function(){
					$(this).attr("class","tdLigne");
					$(this).css("width",columnW) ;
				}) ;

			}

		});
		
		$(table).css('table-layout','fixed');
	
		$(table).css('word-wrap','break-word');


		if(!($(table).find("td")).length ) {
			$(table).parent().remove() ;
		}

	});
	
	
	
	
	
	
	$(".Merge").click(function(currentCell){
		var id = this.id ;
		
		var currentCell = window.getSelection().anchorNode;
	
	
              if( id=="CellWidht"){
				  
				   var width = prompt("widh ");		  
		         $(currentCell).css('width',width+'px');
		  
			  }else if (id=="CellHeight"){
				  
				  var height = prompt("Height ");		  
		         $(currentCell).css('height',height+'px');
				  
			  }else if (id == "CellBorder"){
				   
				     var color = document.getElementById("c").value;   	  
		         $(currentCell).css("background-color", '#' + color);
		        
				  
				  
			  }
		
               
	
	});
	
	function setTextColor(picker,td) {
		td.style.color = '#' + picker.toString()
	}
		

	
	
	
	
	$("#deleteTable").click(function(){
		var currentLine = window.getSelection().anchorNode;
		while (currentLine.nodeName.toLowerCase() != "tr"){
			currentLine = currentLine.parentNode ;
		}
		$((currentLine.parentNode).parentNode).remove() ;
	});

	
	
	


	var doIt = true ;

	$(document).mousedown(function(e){
		if(e.button == 2) {
			var target = e.target  ;
		
			var currentCursorPositon = target ;
		 
		     
		  
			if (($(currentCursorPositon).parents("table")).length == 0) {
					$(".cupcake").each(function(){
					
						$(this).addClass("disabled");
					});
				}else {
					
					
					$(".cupcake").each(function(){
						if(($(this).attr('id')== 'non' ) && ($(currentCursorPositon).attr('class') == 'tdLigne')){
							$(this).addClass("disabled");
							
						}else{
							$(this).removeClass("disabled");
						}
						
					})
			}

		}else if (e.button == 0){
			doIt = true ;

		}

	});



	var savedSelec ;
	


	///////////////////////////// undo System ////////////////////////////////////////////
	var indexx = 0 ;
	var indexMax = 0 ;
	var editorContent = [$("#editor").html()] ;

	

	function domChanged(e){
		$("#undo").removeClass("disabled") ;

		doIt = false ;
		
		$(".slide").not(".dropdown").resizable({

			resize: function(event,ui){
				var doeer = ui.element ;

				var h = new Number($(doeer).css("height").slice(0,-2));
				var w = $(doeer).css("width") ;

				$(doeer).find("img").not(".img-responsive").each(function(){
					$(this).css('width',w);
					$(this).css("height",h-20) ;
				});
			}
		}) ;

		

	


		var editCont =  $("#editor").html();

		
		if(editCont != editorContent[indexx]){
			//	console.log("different content") ;
			editorContent[++indexx] = editCont ;
			
		}

	
		indexMax = indexx ;

	}

	
	
	$("#redo").click(function(){
		
		if(indexx < indexMax){

			
			++indexx ;
			var content = editorContent[indexx] ;
			
			$("#editor").html(content.toString()) ;
			
		}else {
			$("#redo").addClass("disabled");

			
		}
	
	});

	$("#undo").click(function(e) {


	
		
		if(indexx) {
			$("#redo").removeClass("disabled") ;
			var content = editorContent[--indexx];
			
			$("#editor").html(content.toString());
		}else {
			$("#undo").addClass("disabled") ;
		}
		


	});



	var observeDOM = (function(){
		
		if(getPageName(document.location.href.match(/[^\/]+$/)[0])== "main" ){
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener;

		return function(obj, callback){
			if( MutationObserver ){
				
				var obs = new MutationObserver(function(mutations, observer){
					if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
						callback();
				});

				obs.observe( obj, { childList:true, subtree:true });
			}
			else if( eventListenerSupported ){
				obj.addEventListener('DOMNodeInserted', callback, false);
				obj.addEventListener('DOMNodeRemoved', callback, false);
			}
		}
		}
	})();
	
	var buttonClickeed ;
	
	$("button").click(function(){
		buttonClickeed = this.id ;
		
	});

	/*observeDOM( document.getElementById('editor') ,function(){
	if(getPageName(document.location.href.match(/[^\/]+$/)[0])== "main" ){
		if(doIt && buttonClickeed != "undo" && buttonClickeed != "redo"){
			domChanged()  ;
		}else{
			return false ;
		}

	}
	});*/
	$("#editor").on('keyup',domChanged);
	

		
		

	
	 $("#addModel").click(function(){  
 
	$('#ModelModal').modal('show');
     
	});	

    

	
	function test(i,itemNumber){
		
	      
		
	       
		if((itemNumber == -1) && (i == -1)){
	  
			  itemNumber=0;
	           i=0;	
			   
		}else if(itemNumber < 3 ) {
			
			itemNumber++;
					
		}else if(itemNumber == 3){
			
			itemNumber++;
			i++;
	
		}else if(itemNumber == 4){
			
			itemNumber=1;
			
		}
	  
       var name = document.getElementById("ModelName").value;     
		   
	   var json=document.getElementById("editor").innerHTML;
	   	  
		  $.ajax({
           
		   url:"php/Modele.php",  
           type: "POST", 
		   data:{ name: name, json: json,itemNumber : itemNumber,i : i},
		  
         success: function(data) {
  			alert(data);
			//$("#editor").html(data);		 
			}		 
         });		  
	   
	   }
	   
	   
	   
		
		$("#modele").click(function(){
		
		  var val1,val2;
			 $.ajax({
           
		   url:"php/test.php",  
           type: "GET", 	  
           success: function(resultat) {
			   
	        var resultat = JSON.parse(resultat);
			   
			for(var i in resultat){
				
			    var val = resultat[i];
				val1=val.indice;
				val2=val.itemNumber;
				test(val1,val2);
			     
    			}
				
		  }		 
         }); 
		 			     
		  
	   });

	  

	
		
	
	
	
	
	
	/*
	 $(".telechargerTableau").click(function(){
		 
		 var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
        return function(table, name) {
        if (!table.nodeType) table = document.getElementsByClassName("tableau");
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        window.location.href = uri + base64(format(template, ctx))
      }
		 
		 
	 });*/
		  
 $(".telechargerTableau").click(function(){		
        
 
	
	
     $("#editor").table2excel({
					exclude: ".noExl",
					name: "Excel Document Name",
					filename: "myFileName" + new Date().toISOString().replace(/[\-\:\.]/g, ""),
					fileext: ".xls",
					exclude_img: true,
					exclude_links: true,
					exclude_inputs: true
				});
    
	 
	 
	});
	
	
function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0]; // <-- added this line
    return filename;                                    // <-- added this line
}
	
	
	
	

	
	 $("#envoyer").click(function(){		
 
          $.ajax({
           
		   url:"php/Tab_id.php",  
           type: "GET", 	  
           success: function(Tab_id) {
			   
	        Tab_id++;
			
			envoyer(Tab_id);
				
		  }		 
         }); 
	
	 
	 
	});
	
	
	function envoyer(Tab_id){
		
		var Tab_titre = document.getElementById("TabName").value;    
        var Delai = document.getElementById("dateRem").value;    
        var message = document.getElementById("message").value; 
		var Tab_contenu=document.getElementById("editor").innerHTML;
		
		   var d = new Date();
           var month = d.getMonth()+1;
           var day = d.getDate();
           var ed_date = d.getFullYear() + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + day;
		  
		   
		   var rec_id=$('#example-optionClass').val();
		  var Nbr=rec_id.length;
             
			
		  $.ajax({
           
		   url:"php/envoyer.php",  
           type: "POST", 
		   data:{ Tab_titre: Tab_titre, Delai: Delai,message : message,Tab_contenu : Tab_contenu,ed_date:ed_date,rec_id:rec_id,Nbr:Nbr,Tab_id:Tab_id },
		  
         success: function(data) {
  			 alert(data);
			//$("#editor").html(data);	
			}		 
         });
		
		
		
		
		
	}
	  
	  
	 
	  
	  
	  
	  
	  
	  
	  
	  

	
	
});


