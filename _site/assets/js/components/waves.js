$(document).ready(function() {

    // Ripple-effect animation
    $(".ripple-effect").click(function(e){

        var rippler = $(this);

        if (!rippler.hasClass('animated')) {

            rippler.addClass('animated');

            if (rippler.find('.ink').length == 0) {
                rippler.append("<span class='ink'></span>");
            }

            var ink = rippler.find('.ink');

            if(!ink.height() && !ink.width()) {
                var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
                ink.css({height: d, width: d});
            }

            var x = e.pageX - rippler.offset().left - ink.width() / 2;
            var y = e.pageY - rippler.offset().top - ink.height() / 2;

            ink.css({
              top: y + 'px',
              left: x + 'px'
            }).addClass('animate');

            setTimeout(function(){
                rippler.removeClass('animated')
                ink.remove();
            }, 500);
        }

    });
});