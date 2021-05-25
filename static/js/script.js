/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
});

$(document).ready(function(){
    $('.carousel').carousel({
        indicators:true
    });

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 2000);
});

