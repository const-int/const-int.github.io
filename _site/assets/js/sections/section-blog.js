$(document).ready(function() {


    var
        blog_section = $('#blog'),
        blog_contain = $('#blog .container'),
        total_number = $('#blog-posts').data('total-number'),
        pager_size = $('#blog-posts').data('pager-number');
        shown_pages = 1;


    // $(blog_section).on('load scroll', function(event) {

    //     var posts_left  = total_number - pager_size * shown_pages;

    //     if ( posts_left > 0 ) {

    //         var top_offset  = $(this).scrollTop(),
    //             blog_height = blog_contain.outerHeight();

    //         console.log(posts_left);

    //         if ( top_offset + win_height >= blog_height ) {

    //             shown_pages++;

    //             var d = new Date();
    //             var old_timeStamp = d.getTime();

    //             $('#ccc').load('pagination/page' + shown_pages +' .post-section', function(){
    //                 var new_timeStamp = d.getTime();
    //                 console.log(new_timeStamp - old_timeStamp);
    //                 $('#blog-posts').append($('#ccc').html());
    //             });
    //         }
    //     }
    // });

});