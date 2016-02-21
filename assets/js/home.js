// Easter Egg #1
console.log("Easter Egg #1! Code: C0N501E");

console.log("Easter Egg hint: I open at the close.");
//Vive L'Algerie!

/*animate return to top! cudose to http://www.paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery
$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
/*
    $("#unicorn .browser").each(function(i, el) {
        var el = $(el);
        // if (el.visible(true)) {
        // -> A section MUST be in the viewport and 200px from the bottom in order for
        //    some awesome CSS3 animations to happen!
        // -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
        if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 300)  &&  el.visible(true)  ) {
            el.addClass("visible");
        }
    });
    $(".animate, #event article, #more article, #science article, #lab article, #film article").each(function(i, el) {
        var el = $(el);
        // if (el.visible(true)) {
        // -> A section MUST be in the viewport and 200px from the bottom in order for
        //    some awesome CSS3 animations to happen!
        // -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
        if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 178)  &&  el.visible(true)  ) {
            el.addClass("visible");
        }
    });
}

// Scroll up, TARDIS!
/* $(document).on('click', '.skyward', function () {
    $("body").addClass("inthetardis");
    setTimeout( function() {
        var target = "top",
        $target = $("#top");
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 3000, 'swing', function () {
            window.location.hash = target;
        });
    }, 1000);
    setTimeout( function() {
        $("body").removeClass("inthetardis");
    }, 4000);
});
*/
