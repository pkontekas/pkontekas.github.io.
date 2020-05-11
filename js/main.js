$(document).ready(function(){
    $('.header').height($(window).height());
   })

   $('.navbar a').click(function(){
    $('html, body').animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
   })