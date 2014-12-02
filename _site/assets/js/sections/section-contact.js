
$(document).ready(function() {

  // Fill inputs on keydown
  $('input, textarea').keydown(function(event) {

    $(this).addClass('not-empty')

  });

});