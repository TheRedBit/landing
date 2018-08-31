var redbit_go = function() {
    // Pre

    // Navigation Bar Active Link Handler
    $(".nav .nav-link").on("click", function(){
       $(".nav").find(".active").removeClass("active");
       $(this).addClass("active");
    });

    // Section Scrolling
    var sections = ["about", "portfolio"];

    for (var section in sections) {
        $("#" + section).click(function(event) {
            event.preventDefault();
            var offset = 20; //Offset of 20px

            $('html, body').animate({
                scrollTop: $("#" + section).offset().top + offset
            }, 2000);
        });
    }

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
}

$(document).ready(redbit_go());
