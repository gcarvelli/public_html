
$(document).ready(function() {

	$('.about-button').on('click', function(e) {
        e.preventDefault();

        $('.about-me').stop().slideToggle({'queue': false});
    });
});
