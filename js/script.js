// $(document).click(function (event) {
//     var clickover = $(event.target);
//     var $navbar = $(".navbar-collapse");               
//     var _opened = $navbar.hasClass("in");
//     if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
//         $navbar.collapse('hide');
//     }
// });

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('section').on('click',function(){
$('.collapse').collapse('hide');
})