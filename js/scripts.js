$(document).ready(function() {
    var navbar = $('.navbar');
    if (window.location.pathname.slice(-1) !== "/") {
        $(window).scroll(function(){
            var top = $(this).scrollTop();
            var btm = $(document).height() - $(this).height() - $(this).scrollTop();
            if ((top > 80) && (btm > 180)) {
                navbar.addClass("navbar-hidden");
            } else {
                navbar.removeClass("navbar-hidden");
            }
        });
    }
})
