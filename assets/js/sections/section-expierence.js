
$(document).ready(function() {

  $.ajaxSetup({ cache: true });

  var exp_nav_wrap = $('.exp-nav'),
      exp_nav_select = $('.exp-nav .select-skill'),
      exp_nav_li = $('nav.select-skill li'),
      exp_nav_selected = $('nav.select-skill .selected-center span'),
      tmp_text = exp_nav_selected.text(),
      active_class = 'active-exp-tab',
      exp_tabs = $('.exp-tab'),
      exp_texts_wrap = $('.exp-unit-wrapper'),
      animation_wrap = $('.exp-animation .wrap')

  $('.exp-unit').eq(0).addClass('active-exp-tab');

  exp_nav_wrap
    .mouseenter(function() {
        if (!exp_nav_select.hasClass('animating')) {
            $(this).find('.select-skill').addClass('opened show-list');
            exp_texts_wrap.addClass('faded-out');
            new_text = exp_nav_selected.text();
            exp_nav_selected.text(tmp_text)
        };
    });


  $('.select-option').click(function(event) {

    $(this).addClass('checked');

    if (exp_nav_select.hasClass('opened')) {

      var that = $(this);

      animation_wrap.load('assets/' + that.data('file'));

      setTimeout(function(){

        setTimeout(function(){
            exp_nav_selected.text(that.text());
            setTimeout(function(){
            exp_texts_wrap.removeClass('faded-out');
            exp_nav_select.removeClass('animating')
            }, 50);
        }, 500);

        setTimeout(function(){
            exp_nav_select.removeClass('show-list');
        }, 450);

        exp_nav_select.removeClass('opened').addClass('animating');

      }, 500);

      $('.exp-unit')
        .removeClass(active_class)
        .eq($(this).data('index') - 1).addClass(active_class);
      } else {
        exp_nav_select.addClass('opened show-list');
        exp_texts_wrap.addClass('faded-out');
      }
  });



});


