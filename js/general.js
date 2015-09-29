
$(document).ready(function() {

    // About Me toggle
    $('.about-button').on('click', function(e) {
        e.preventDefault();

        $('.about-me').stop().slideToggle({'queue': false});
    });

    // Hover zoom
    $('.image-container img').hover(function(e) {
        $(this).parent().stop().animate({
            'padding': '12%'
        }, 700, 'easeOutQuart');
    });

    $('.image-container img').mouseleave(function(e) {
        $(this).parent().stop().animate({
            'padding': '15%'
        }, 400, 'easeOutQuint');
    })
});
