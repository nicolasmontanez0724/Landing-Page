/* INICIO JS */

$(document).ready(function(){
     // Activación de transición del menú principal
     $('header article nav a, aside#menu-movil nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
     });

      // Menú Responsive
      $('aside#menu-movil').css('right','-290px');
      $('#cerrar').hide();
      
      $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            right: 0
        },300,'easeOutExpo');
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            right: -290
        },300,'easeOutExpo');
        $('#abrir').show();
        $('#cerrar').hide();
    });
});
        
     