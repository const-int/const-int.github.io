$(document).ready(function() {

  // Vars
  thumb_container = $('.thumb-container');
  units = thumb_container.find('.thumb-unit');

  positions = shuffle( [2, 3, 4, 5, 6, 7, 8, 9] );

  units.each(function(index, el) {
    $(this).attr('data-position', positions[index]);
  });

});

function start_portfolio_carousel() {

  i = 1;

  setTimeout(function () {

    portfolio_carousel_interval = setInterval(function () {

      // Get new position
      i = i + 1;

      // Move element on NEW position to LAST position
      thumb_container.find('.thumb-unit[data-position ='+ i +']').attr('data-position', i - 1);


      if (i == 9) { clearInterval(portfolio_carousel_interval) }

    }, 500);

  }, 400);



}


// Just Array Shuffle funciton
function shuffle(o){ //v1.0
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};







