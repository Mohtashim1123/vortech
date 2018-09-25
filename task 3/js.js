// scroll color change
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(window).scroll(function(){
	$('.logochange').toggleClass('scrolled', $(this).scrollTop() < 100);
});




// shadow
$(window).scroll(function() {
	if ($(window).scrollTop() > -1) {
		$('#navBar').addClass('floatingNav');
	} else {
		$('#navBar').removeClass('floatingNav');
	}
});

// scroll nav hide and show
var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.on('scroll', function(){
	var scrollTop = $window.scrollTop();
	nav.toggleClass('hidden', scrollTop > prev);
	prev = scrollTop;
});
