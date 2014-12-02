$(document).ready(function() {

  // Vars
  thumb_container = $('.thumb-container');
  units = thumb_container.find('.thumb-unit');
  empty_unit = $('.thumb-empty');

  positions = shuffle( [1, 2, 3, 4, 5, 6, 7, 8, 9] );

  units.each(function(index, el) {
    $(this).attr('data-position', positions[index]);
  });

  // First iteration values
  last_move = 'none';
  position = positions[8];

  setInterval(function () {

    var new_dir = random_move_dir(position, last_move);

    var last_position = position;

    position = move_unit(last_position, new_dir);

    thumb_container.find('.thumb-unit[data-position ='+ position+']').attr('data-position', last_position);

    empty_unit.attr('data-position', position);

    last_move = new_dir;



  }, 4000);


});


// Just Array Shuffle funciton
function shuffle(o){ //v1.0
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

// Gives new position based on current position and diraction
function move_unit(position, move) {

  var new_position = '';

  switch (move)
    {
      case 'up':
        new_position = position - 3;
        break;

      case 'right':
        new_position = position + 1;
        break;

      case 'down':
        new_position = position + 3;
        break;

      case 'left':
        new_position = position - 1;
        break;
    }

    return new_position;
}

// Gives random diraction based on position and previous diractions
function random_move_dir (position, last_move_dir) {

  var possible_move_dirs = [];
  var forbidden_move_dir = '';

  switch (position)
    {
      case 1:
        possible_move_dirs = ['down', 'right'];
        break;
      case 2:
        possible_move_dirs = ['down', 'left', 'right'];
        break;
      case 3:
        possible_move_dirs = ['down', 'left'];
        break;
      case 4:
        possible_move_dirs = ['up', 'down', 'right'];
        break;
      case 5:
        possible_move_dirs = ['up', 'down', 'left', 'right'];
        break;
      case 6:
        possible_move_dirs = ['up', 'down', 'left'];
        break;
      case 7:
        possible_move_dirs = ['up', 'right'];
        break;
      case 8:
        possible_move_dirs = ['up', 'left', 'right'];
        break;
      case 9:
        possible_move_dirs = ['up', 'left'];
        break;
    }


    switch (last_move_dir)

      {
        case 'up':
          forbidden_move_dir = 'down';
          break;

        case 'right':
          forbidden_move_dir = 'left';
          break;

        case 'down':
          forbidden_move_dir = 'up';
          break;

        case 'left':
          forbidden_move_dir = 'right';
          break;

        case 'none':
          forbidden_move_dir = 'none';
          break;
      }

    var i = possible_move_dirs.indexOf(forbidden_move_dir)

    if ( i != -1 ) { possible_move_dirs.splice(i, 1); }

    var random_dir = possible_move_dirs[Math.floor(Math.random()*possible_move_dirs.length)];

    return random_dir;
}









