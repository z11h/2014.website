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
