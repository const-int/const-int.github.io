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
        loading_offset = 200, // Loading starts px from bottom


    $(blog_previews_container).on('load scroll', function(event) {

        var posts_left  = total_number - pager_size * shown_pages;

        if ( posts_left > 0 ) {

            var top_offset  = $(this).scrollTop(),
                blog_height = blog_previews.outerHeight();

            console.log(top_offset);
            if ( top_offset + loading_offset + win_height >= blog_height  ) {

                shown_pages++;

                var d = new Date();
                var old_timeStamp = d.getTime();

                $('#ccc').load('pagination/page' + shown_pages +' .post-section', function(){
                    var d2 = new Date(),
                        new_timeStamp = d2.getTime(),
                        timediff = new_timeStamp - old_timeStamp

                        $('#blog-posts').append($('#ccc').html());
                });
            }
        }
    });

    $('#blog-posts').on('click', '.post-link', function(event) {

        var that = $(this),
            newTitle = that.data('name'),
            newPoster = that.data('poster'),
            newUrl = that.data('url');


        // Slide to post
        blog_belt.addClass('slided');

        // Change poster
        post_poster.css('background-image', 'url('+ newPoster +')');

        // Put title
        $('.post-title .title-text').text(newTitle);

        // Load content
        $('.post-content').load(newUrl);

    });


    blog_return.click(function() {
      blog_slide_back($(blog_belt));
    });

});

function blog_slide_back (blog_belt) {

  // if ( !animating_work && work_opened ) {
  //     animating_work = true;
  //     work_opened = false;
    $(blog_belt).removeClass('slided');
    $('aside .blog-return').hide();
    setTimeout(function(){
      animating_work = false;
      $(post_content).empty();
    }, 800);
  // }
}
