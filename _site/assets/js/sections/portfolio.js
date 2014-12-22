$(document).ready(function() {

  window_width       = $(window).width();
  window_height      = $(window).height();

  $(window).on('load resize', function(event) {

    // Variables
    thumb_container        = $('.thumb-container');
    units                  = thumb_container.find('.thumb-unit');

    // Get window dimentions
    window_width       = $(window).width();
    window_height      = $(window).height();

    // Calculating container sizes
    thumb_container_height = get_by_module( window_height * 0.7 );
    thumb_container_width  = get_by_module( thumb_container_height * 1.618 );

    // Calculating container offsets
    containero_offset_top  = get_by_module( window_height * 0.15) + 1;
    containero_offset_left = get_by_module( (window_width - thumb_container_width) / 2 );

    // Calculating unit sizes and margins
    var unit_width  = get_by_module( (thumb_container_width - 20) / 3 );
    var unit_height = get_by_module( (thumb_container_height - 20) / 3 );

    // Apply metrix to container
    thumb_container
      .css({
        top: containero_offset_top,
        left: containero_offset_left
      })
      .width(thumb_container_width)
      .height(thumb_container_height);

    // Apply metrix to unit
    units.each(function(index, el) {

      $(el).css({
        width:  unit_width,
        height: unit_height
      })

      if (  (index + 1) % 3 == 0 ) { $(el).css('margin-right', '0') }
      if ( index > 5 ) { $(el).css('margin-bottom', '0') }

    });


  });



  // ---------------------------------------------

  // Blink blocks
  blink = $('.thumb-wrap .blink');



  // Get possible ranges (840x600 Thumbs Container dimentions)
  possible_x_shift = (window_width  - 840) / 2 ;
  possible_y_shift = (window_height - 600) / 2 ;




});


// Return by module 10 (to fit the grid)
function get_by_module(argument){

    return Math.floor( argument / 10 ) * 10;

};


// main blink func
function blink_pixels () {

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
    positions_x[i] = get_by_module( positions_x[i] );
    positions_y[i] = get_by_module( positions_y[i] );

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


}


