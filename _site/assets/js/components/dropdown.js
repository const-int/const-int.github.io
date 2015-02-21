jQuery(document).ready(function($) {

  var dropy = {
    $dropys: null,
    openClass: 'open',
    selectClass: 'selected',
    init: function(){
      var self = this;

      self.$dropys = $('.dropy');
      self.eventHandler();
    },
    eventHandler: function(){
      var self = this;


      // Opening a dropy
      self.$dropys.find('.dropy__title').click(function(){
        self.$dropys.removeClass(self.openClass);
        $(this).parents('.dropy').addClass(self.openClass);
      });

      // Click on a dropy list
      self.$dropys.find('.dropy__content ul li a').click(function(){

        var cat_name = $(this).attr('data-cat');

        load_cat(cat_name);
        set_dropdown_value(cat_name);

      });

      // Close all dropdown onclick on another element
      $(document).bind('click', function(e){
          if (! $(e.target).parents().hasClass('dropy')){ self.$dropys.removeClass(self.openClass); }
      });
    }
  };

  $(function(){
    dropy.init();
  });

});

function set_dropdown_value(cat) {
    var $that =  $('#cat-sel ul li a[data-cat='+cat+']'),
        $input = $('#cat-sel input'),
        $dropy = $('#cat-sel .dropy'),
        $title = $('#cat-sel .dropy__title span');

    // Remove selected class
    $dropy.find('.dropy__content a').each(function(){
      $(this).removeClass(self.selectClass);
    });

    // Update selected value
    $('.dropy__title').css('opacity','1');
    $title.html($that.text()).addClass('selected');
    $input.val($that.attr('data-value')).trigger('change');
    $dropy.removeClass('open');
}

