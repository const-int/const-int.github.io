
// Skills animate functions
function skills_animate() {

  $(".meter > span").each(function() {
    var element = $(this);
    var container_width = $('.skill-unit:first-child .meter').width();
    var skill_value = $(this).data("skill");
    var indexOfBar = $(this).parents('.skill-unit').index();

    setTimeout(function () {
      animateBars(element);
    }, 500 * indexOfBar);

    function animateBars(element) {
      $(element).css({
        width: skill_value * 10 + '%',
        opacity: 0.1 * skill_value
      });
    }
  })
}


