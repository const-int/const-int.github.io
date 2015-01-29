$(document).ready(function() {

  // Skills init width
  $(".meter > span").each(function() {
    $(this).data("origWidth", $(this).width()).width(0);
  });

});


// Skills animate functions
function skills_animate () {

  $(".meter > span").each(function() {
    var element = $(this);
    var wd = $('.skill-unit:first-child .meter').width();
    var opsty = $(this).data("origWidth");
    var indexOfBar = $(this).parents('.skill-unit').index();

    setTimeout(function () {
      animateBars();
    }, 300 * indexOfBar);

    function animateBars() {
      $(element).animate({
        width: opsty,
        opacity: opsty / wd
      }, 1200);
    }
  })
}


