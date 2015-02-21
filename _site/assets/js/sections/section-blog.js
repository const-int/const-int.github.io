$(document).ready(function() {


    var
        blog_previews_container = $('#blog .preview-container-shift'),
        blog_previews = $('#blog-posts'),
        blog_belt = $('.blog-belt'),
        post_section = $('.post-section');

        blog_return = $('.blog-return'),
        post_poster = $('.post-poster'),
        post_content = $('.post-content');

        total_number = blog_previews.data('total-number'),
        pager_size = blog_previews.data('pager-number'),
        shown_pages = 1,
        loading_offset = 200; // Loading starts px from bottom
        animating_blog = blog_opened = false,
        page_folders_number = Math.ceil(total_number / pager_size);


    // Show category posts
    $(blog_previews_container).on('click', '.hashtag', function(event) {

        load_cat($(this).text());
        set_dropdown_value($(this).text());
    });


    // Infinite scroll
    $(blog_previews_container).on('scroll', function(event) {
        if (!$(blog_previews_container).hasClass('prevent-scroll-load')) {
            load_if_nesessary();
        }
    });


    $(window).on('load', function () {
        shown_posts = $('.post-section .post-preview');
        var shown_posts_size = $(shown_posts).size();
        if ( shown_posts < 5 ) {
            load_new_posts(5 - shown_posts);
        }
    })

    // If not enough posts
    load_if_nesessary();
    function load_if_nesessary() {
        var top_offset  = $(blog_previews_container).scrollTop(),
            blog_height = $(blog_previews_container).outerHeight();

        if ( top_offset + loading_offset + win_height > blog_height) {
            load_new_posts(5, 'all')
        }
    }


    // Sliding 2 post
    $('#blog-posts').on('click', '.post-link, .post-name span', function(event) {

        if (animating_work) return;

        var that = $(this).parents('.post-preview'),
            newTitle = that.data('name'),
            newUrl = that.data('url'),
            newDate = that.data('date');

        animating_blog = blog_opened = true;

        // Slide to post
        blog_belt.addClass('slided');

        setTimeout(function(){
          $('aside .blog-return').show();
          animating_blog = false;
        }, 800);

        // Put title
        $('.post-title .title-text').text(newTitle);
        $('.post-title .date').text(newDate.toLowerCase());

        // Load content
        $('.post-content').load(newUrl, function(){

            // Change poster
            newPoster = $('#poster-holder').text(),
            post_poster.css('background-image', 'url('+ newPoster +')');
        });
    });


    blog_return.click(function() {
        blog_slide_back();
    });

});



// Add n posts
function load_new_posts(num, category) {

    if (!category) return;

    cat_name = category;

    if ( shown_pages < page_folders_number ) {

        shown_pages++;

        if (cat_name == 'all') {
            cat = '';
        } else  {
            cat = '.cat-' + cat_name;
        }

        $('#ccc').load( window.location.origin + '/pagination/page' + shown_pages +' .lang-' + lang + cat, function(){

            $('.post-section').append($('#ccc').html());
            var loaded_size = $('#ccc .post-preview').size();
            $('#ccc').empty();

            if (loaded_size < num ) {
                var rest = num - loaded_size;
                load_new_posts(rest, cat_name);
            }
        });
    }

}


function load_cat(cat) {

    if (!cat) return

    $('#blog .preview-container-shift').addClass('prevent-scroll-load');

    shown_pages = 1;
    $('.post-section').empty();
    $(shown_posts).each(function(index, el) {
       if ( $(el).hasClass('cat-' + cat) ) {
          $('.post-section').append($(el));
       }
    });
    load_new_posts(total_number, cat);
}


function blog_slide_back () {

  if ( !animating_blog && blog_opened ) {

        animating_blog = true;
        blog_opened = false;

        $('.blog-belt').removeClass('slided');
        $('aside .blog-return').hide();

        setTimeout(function(){
            animating_blog = false;
            $('.post-content').empty();
        }, 800);
  }
}
