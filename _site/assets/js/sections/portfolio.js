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
  var blink = $('.thumb-wrap .blink');

  // Get window dimentions
  var window_width = $(window).width();
  var window_height = $(window).height();

  // Get possible ranges (840x600 Thumbs Container dimentions)
  var possible_x_shift = (window_width  - 840) / 2 ;
  var possible_y_shift = (window_height - 600) / 2 ;


  setInterval(function () {

    // Get random coordinates
    var positions_x = [
                        Math.floor( (Math.random() * window_width) ),
                        Math.floor( (Math.random() * window_width) ),
                        Math.floor( (Math.random() * window_width) ),
                        Math.floor( (Math.random() * window_width) ),
                      ]

    var positions_y = [
                        Math.floor( (Math.random() * window_height) ),
                        Math.floor( (Math.random() * window_height) ),
                        Math.floor( (Math.random() * window_height) ),
                        Math.floor( (Math.random() * window_height) ),
                      ]

    for (var i = 0; i <= 3 ; i++) {

      if (
            (positions_x[i] > possible_x_shift) &&
            (positions_x[i] < window_width - possible_x_shift) &&
            (positions_y[i] > possible_y_shift) &&
            (positions_y[i] < window_width - possible_y_shift)
          )
            {
              positions_x[i] -= possible_x_shift;
              positions_y[i] -= possible_y_shift;
            }

      // Make it 0 mod 10 + 1
      positions_x[i] = Math.floor(positions_x[i] / 10) * 10;
      positions_y[i] = Math.floor(positions_y[i] / 10) * 10;

    };



    var coordintes_starts = [
                      [ 'top',     'left'  ,  'bottom'  ,  'right' ] ,
                      [ 'top',     'right' ,  'bottom'  ,  'left'  ] ,
                      [ 'bottom',  'left'  ,  'top'     ,  'right' ] ,
                      [ 'bottom',  'right' ,  'top'     ,  'left'  ]
                    ];

    var random_coordintes_starts =  [
                              coordintes_starts[Math.floor(Math.random()*4)] ,
                              coordintes_starts[Math.floor(Math.random()*4)] ,
                              coordintes_starts[Math.floor(Math.random()*4)] ,
                              coordintes_starts[Math.floor(Math.random()*4)]
                            ]


    // Stop animation and Change position
    blink.each(function(index, el) {

      var that = $(this);
      var indx = index;

      that.removeClass('animated');

      setTimeout(function () {
        that
          .addClass('animated')
          .css(random_coordintes_starts[indx][0], positions_x[indx])
          .css(random_coordintes_starts[indx][1], positions_y[indx])
          .css(random_coordintes_starts[indx][2], 'auto')
          .css(random_coordintes_starts[indx][3], 'auto');
      }, ( indx + 1 ) * 300);

    });


  }, 2000);

});

// Array shuffle  function
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};