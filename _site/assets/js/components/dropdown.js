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
      self.$dropys.find('.dropy__title').on('click', function(event) {
        var that = $(this);
        self.$dropys.removeClass(self.openClass);
        that.parents('.dropy').addClass(self.openClass);
      });

      // Click on a dropy list
      self.$dropys.find('.dropy__content').on('click', 'li', function(event) {

        var cat_name = $(this).attr('data-cat');
        var position = 'top center';
        var img_url = 'url(' + domain[0] + '//' + domain[2] + '/assets/img/posters/' + cat_name + '.jpg)';

        if (cat_name == 'life') {
            position = 'top right';
        }

        $('.section-blog .poster').css({
          'background-image': img_url,
          'background-position': position
        });

        load_cat(cat_name);
        set_dropdown_value(cat_name);

      });

      self.$dropys.find('.dropy__content ul ').on('mouseleave', function(event) {
        $('#cat-sel .dropy').removeClass('open');
      });

      self.$dropys.find('.cross').on('click', function(event) {
        $('#cat-sel .dropy').removeClass('open');
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

    var $list  = $('#cat-sel ul')
        $that  = $list.find('li[data-cat='+cat+']'),
        $input = $('#cat-sel input'),
        $dropy = $('#cat-sel .dropy'),
        $title = $('#cat-sel .dropy__title span.tit');
        $post_wrap = $('#blog-posts');

    $title.html($that.text()).addClass('selected');
    $input.val($that.attr('data-value')).trigger('change');
    $dropy.removeClass('open');
    $post_wrap.attr('data-cat', cat);
    $that.remove();
    $list .prepend('<li data-cat=' + cat + '>' + $that.text() + '</li>');
}

