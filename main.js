function myFunction() {
    var x = document.getElementById("nav-right");
    if (x.className === "nav-right") {
        x.className += " responsive";
    } else {
        x.className = "nav-right";
    }
} 

jQuery(function(){
  $(function () {
      $(window).scroll(function () { //Fonction appelée quand on descend la page
             if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
         });
     });
 });


//    ralentir le défilement des liens sur la page en prennant 
//    tous les liens qui commence par #, on stoke la valeur du href dans 
//    une variable appeller 

 $('a[href^="#"]').click(function(){
    var val_id = $(this).attr("href");
    if (val_id === '#') {
        return;
    }
    $('html, body').animate({
        scrollTop:$(val_id).offset().top
    }, 'slow');
    return false;
});


//   ici nous allons rendre les liens de notre nav active lorqu on click
//   sur le lien
$('.nav-right a').click(function() {
$('.nav-right a').removeClass('active');
$(this).addClass('active')
});