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
    var opsty = $(this).data("origWidth");
    var indexOfBar = $(this).parents('.skill-unit').index();

    setTimeout(function () {
      animateBars();
    }, 300 * indexOfBar);

    function animateBars() {
      $(element).animate({
        width: opsty,
        opacity: opsty / 240
      }, 1200);
    }
  })
}


function skills_stop() {
  setTimeout(function(){
    $(".meter > span").each(function() {

      $(this).width(0);
    })
  }, 2000)
}
