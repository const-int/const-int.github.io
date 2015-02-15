$(document).ready(function() {


    var
        blog_section = $('#blog'),
        blog_contain = $('#blog .container'),
        total_number = $('#blog-posts').data('total-number'),
        pager_size = $('#blog-posts').data('pager-number'),
        shown_pages = 1,
        posts_loading_icon = $('#posts-loading-icon');


    $(blog_section).on('load scroll', function(event) {

        var posts_left  = total_number - pager_size * shown_pages;
            console.log(posts_left);
        if ( posts_left > 0 ) {

            var top_offset  = $(this).scrollTop(),
                blog_height = blog_contain.outerHeight();

            if ( top_offset + 200 + win_height >= blog_height  ) {

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

});