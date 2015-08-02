$(document).ready(function() {
    var navbar = $('.navbar');
    if (window.location.pathname !== "/") {
        $(window).scroll(function(){
            var top = $(this).scrollTop();
            var btm = $(document).height() - $(this).height() - $(this).scrollTop();
            if (top > 80 || btm < 240 || window.location.pathname === "/") {
                navbar.addClass("navbar-hidden");
            } else {
                navbar.removeClass("navbar-hidden");
            }
        });
    }
})