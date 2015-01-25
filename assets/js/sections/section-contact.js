
$(document).ready(function() {

  var form = $('.awesome-form');
  var form_msg = $('.awesome-form textarea');
  var form_name = $('.awesome-form input[name=name]');
  var form_email = $('.awesome-form input[name=email]');
  var form_submit = $('.awesome-form input[type=submit]');

  function getDataFromField(element) {
    return $(element).val();
  }

  $(form).submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: "//formspree.io/const.int.naumov@gmail.com",
        method: "POST",
        data: {
          name: getDataFromField(form_name),
          email: getDataFromField(form_email),
          message: getDataFromField(form_msg),
        },
        dataType: "json"
    });

    $(form_name).val('').removeClass('has-value');
    $(form_email).val('').removeClass('has-value');
    $(form_msg).val('').removeClass('has-value').css('overflow', 'hidden');
    $(form_submit).val('Thank you! I promise to reply asap ☺')
  });


  // Manage Intut Titles
  $('.awesome-form input, .awesome-form .textarea').focusout(function(){

      var text_val = $(this).val();

      if(text_val === "") {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }

  });


  $('.awesome-form textarea').focusin(function(event) {
    var that = $(this);
    setTimeout(function(){
      $(that).css('overflow', 'auto');
    }, 500)
  });

  $('.awesome-form textarea').focusout(function(event) {
    var that = $(this);
    if (!$(that).hasClass('has-value')) {
      $(that).css('overflow', 'hidden');
    }
  });


});