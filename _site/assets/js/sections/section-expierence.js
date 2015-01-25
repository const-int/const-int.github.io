
$(document).ready(function() {

  var active_class = 'active-exp-tab';
  var exp_tabs = $('.exp-tab');


  // TABS animation navigation
  $('.exp-unit:nth-child(3), .exp-tab:first-child').addClass(active_class);

  $(exp_tabs).on('click', function() {

    $(this).addClass(active_class).siblings('.exp-tab').removeClass(active_class);

    $('.exp-unit').removeClass(active_class).eq($(this).index()).addClass(active_class);

  });


  // Ajax load content
  $.ajaxSetup({ cache: true });

  $(exp_tabs).click(function() {

    // Load animation layouts
    $('.exp-animation .wrap')
      .eq($(this).index())
      .load($(this).data('file'));

  });

  // HTML TAB animation
  setInterval(function() {
    $('.html-section .phone-post').addClass('active');

    setTimeout(function() {
      $('.html-section .phone-post').removeClass('active');
    }, 2500);
  }, 5000);

});


