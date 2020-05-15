$(document).ready(function(){
    $('.header').height($(window).height());
   })

   $('.navbar a').click(function(){
    $('html, body').animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
   })

//    var navbarCollapse = function() {
//     var mainNav = $("#mainNav");
//     if (mainNav.offset().top > 100) {
//       mainNav.addClass("navbar-shrink");
//     } else {
//       mainNav.removeClass("navbar-shrink");
//     }
//   };

//collapse navbar disappears on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});