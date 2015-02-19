$(document).ready(function() {


    var
        blog_previews_container = $('#blog .preview-container-shift'),
        blog_previews = $('#blog-posts'),
        blog_belt = $('.blog-belt'),

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
        $('.post-section').load( window.location.origin + '/post-list/ .category-' + $(this).text() + ' .lang-' + lang);
    });

    // Infinite scroll
    $(blog_previews_container).on('scroll', function(event) {

        load_if_nesessary();

    });

    load_if_nesessary();


    function load_if_nesessary() {
        var top_offset  = $(blog_previews_container).scrollTop(),
            blog_height = blog_previews.outerHeight();

        if ( top_offset + loading_offset + win_height >= blog_height) {
            load_new_posts(5)
        }
    }


    function load_new_posts(num) {

        if ( shown_pages < page_folders_number ) {

            shown_pages++;

            $('#ccc').load( window.location.origin + '/pagination/page' + shown_pages +' .lang-' + lang, function(){

                $('#blog-posts .post-section').append($('#ccc').html());
                var loaded_size = $('#ccc .post-preview').size();
                $('#ccc').empty();

                if (loaded_size < num ) {
                    var rest = num - loaded_size;
                    load_new_posts(rest);
                }
            });
        }

    }

    // Sliding 2 post
    $('#blog-posts').on('click', '.post-link, .post-name', function(event) {

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
