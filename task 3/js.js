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

// function text(){
// 	let abc = "hello";
// 	document.write(abc);
// }
//   text();
// document.write(abc);
// function view(){
// 	return(
// 		 `
// 		 <h1>hello tere</h1>
// 		`
// 	)
// }
// view();

// const headingWrapper = document.querySelector('#heading');
// const addHeading =  (text = 'Hello World') => {
// return `<h1>${text}</h1>`
// }


// headingWrapper.innerHTML = addHeading();

// console.log(headingWrapper)
