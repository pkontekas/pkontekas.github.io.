$(document).ready(function(){
    $('.header').height($(window).height());
   })

//scrolltop for main page
   $('.navbar a').click(function(){
    $('html, body').animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
   })

//collapse navbar disappears on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});