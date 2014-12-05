$(document).ready(function() {

  // Random positioning thumbnails
  thumb_container = $('.thumb-container');
  units = thumb_container.find('.thumb-unit');

  positions = shuffle( [1, 2, 3, 4, 5, 6, 7, 8, 9] );

  units.each(function(index, el) {
    $(this).attr('data-position', positions[index]);
  });


  // ---------------------------------------------

  // Blink blocks
  var blink1 = $('.thumb-wrap .blink1');
  var blink2 = $('.thumb-wrap .blink2');
  var blink3 = $('.thumb-wrap .blink3');
  var blink4 = $('.thumb-wrap .blink4');

  // Get window dimentions
  var window_height = $(window).height();
  var window_width = $(window).width();

  setInterval(function () {

    // Get random coordinates
    var x_position1 = Math.floor( (Math.random() * window_width)   +  1);
    var y_position1 = Math.floor( (Math.random() * window_height)  +  1);
    var x_position2 = Math.floor( (Math.random() * window_width)   +  1);
    var y_position2 = Math.floor( (Math.random() * window_height)  +  1);
    var x_position3 = Math.floor( (Math.random() * window_width)   +  1);
    var y_position3 = Math.floor( (Math.random() * window_height)  +  1);
    var x_position4 = Math.floor( (Math.random() * window_width)   +  1);
    var y_position4 = Math.floor( (Math.random() * window_height)  +  1);

    // Make it 0 mod 10 + 1
    x_position1 = Math.floor(x_position1 / 10) * 10 - 10;
    y_position1 = Math.floor(y_position1 / 10) * 10 - 10;
    x_position2 = Math.floor(x_position2 / 10) * 10 - 10;
    y_position2 = Math.floor(y_position2 / 10) * 10 - 10;
    x_position3 = Math.floor(x_position2 / 10) * 10 - 10;
    y_position3 = Math.floor(y_position2 / 10) * 10 - 10;
    x_position4 = Math.floor(x_position2 / 10) * 10 - 10;
    y_position4 = Math.floor(y_position2 / 10) * 10 - 10;

    // .removeClass('animated')
    blink1
      .css({
        left: x_position1,
        top: y_position1
      })

    blink2
      .css({
        left: x_position2,
        top: y_position2
      })

    blink3
      .css({
        left: x_position3,
        top: y_position3
      })

    blink4
      .css({
        left: x_position4,
        top: y_position4
      })

    // Removing animation classes

    setTimeout(function() {
      $(blink1).addClass('animated');
      $(blink3).removeClass('animated');
    }, 300);

    setTimeout(function() {
      $(blink2).addClass('animated');
    }, 500);

    setTimeout(function() {
      $(blink4).removeClass('animated');
      $(blink3).addClass('animated');
    }, 1000);

    setTimeout(function() {
      $(blink1).removeClass('animated');
      $(blink2).removeClass('animated');
      $(blink4).addClass('animated');
    }, 1700);

  }, 2000);

});

// Array shuffle  function
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};