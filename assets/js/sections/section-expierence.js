
$(document).ready(function() {

  var active_class = 'active-exp-tab';

  // TABS animation navigation
  $('.exp-unit:first-child, .exp-tab:first-child').addClass(active_class);

  $('.exp-tab > span').on('click', function() {

    var nav_el = $(this).parent()

    nav_el.addClass(active_class).siblings().each(function() {
      $(this).removeClass(active_class).find('.waves-ripple').remove();
    });

    $('.exp-unit').removeClass(active_class).eq(nav_el.index()).addClass(active_class);
  });



  // HTML TAB animation
  setInterval(function() {
    $('.html-section .phone-post').addClass('active');

    setTimeout(function() {
      $('.html-section .phone-post').removeClass('active');
    }, 2500);
  }, 5000);

});