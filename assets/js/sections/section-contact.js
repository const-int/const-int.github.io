
$(document).ready(function() {

  $(window).on('load', function(event) {
    $('input, textarea').val('');
  });

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
    $(form_msg).val('').removeClass('has-value');
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


  // Auto resize textarea

  (function() {
    var content, hiddenDiv, txt;

    txt = $('.awesome-form textarea');
    content = null;
    hiddenDiv = $(document.createElement('div'));
    hiddenDiv.addClass('auto-height-hidden-div');

    $('.textarea-wrapper').append(hiddenDiv);
    txt.on('keyup focus', function() {
      content = $(this).val();
      content = content.replace(/\n/g, '<br>');
      hiddenDiv.html(content + '<br><br>');
      $('.textarea-wrapper').css('height', hiddenDiv.height());
      return $(this).css('height', hiddenDiv.height() - 2);
    });

    txt.on('focusout', function() {
      content = $(this).val();
      content = content.replace(/\n/g, '<br>');
      hiddenDiv.html(content);
      ta_size = (hiddenDiv.height() < 28 ) ? 28 : hiddenDiv.height();
      wra_size = (hiddenDiv.height() < 60 ) ? 60 : hiddenDiv.height();

      $('.textarea-wrapper').css('height', wra_size);
      $(this).css('height', ta_size);
    });

  }).call(this);


});