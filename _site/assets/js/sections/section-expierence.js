
$(document).ready(function() {

  var active_class = 'active-exp-tab';

  // TABS animation navigation
  $('.exp-unit:first-child, .exp-tab:first-child').addClass(active_class);

  $('.exp-tab').on('click', function() {

    $(this).addClass(active_class).siblings('.exp-tab').removeClass(active_class);

    $('.exp-unit').removeClass(active_class).eq($(this).index()).addClass(active_class);

  });



  // HTML TAB animation
  setInterval(function() {
    $('.html-section .phone-post').addClass('active');

    setTimeout(function() {
      $('.html-section .phone-post').removeClass('active');
    }, 2500);
  }, 5000);

});