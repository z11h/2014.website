// Easter Egg #1
    console.log("Easter Egg #1! Code: C0N501E")

     console.log("I open at the close.")
     //Vive L'Algerie!

// Smooth Scrolling
// -> It's pretty awesome.
$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});
// Scroll Timer!
// -> This actually improves the framerate and rendering time by 95%!
//    However, the user must stop scrolling or let go of the mouse wheel...
// -@ http://stackoverflow.com/questions/15591002/jquery-setinterval-or-scroll
var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 100);   // set new timer
});

function handleScroll() {
    scrollTimer = null;
    $(".browser").toggleClass("code", ($(document).offsetTop > 200));
    $("section").each(function(i, el) {
        var el = $(el);
        // if (el.visible(true)) {
        // -> A section MUST be in the viewport and 200px from the bottom in order for
        //    some awesome CSS3 animations to happen!
        // -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
        if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 200)  &&  el.visible(true)  ) {
            el.addClass("visible");
            // Load iFrames only when visible
            // -> Improves site performance by like 20 frames and lowers bandwidth.
            // -@ http://stackoverflow.com/questions/19482601/have-iframe-load-when-visible
            // Show our element, then call our callback
            // Find the iframes within our newly-visible element
            $(this).find("iframe").not(".loaded").prop("src", function(){
                // Set their src attribute to the value of data-src
                $(this).addClass("loaded");
                return $(this).data("src");
            });
        } else {
            if (!$(this).hasClass("onceler")) {
                el.removeClass("visible");
            };
            // el.removeClass("visible");
        }
    });
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
