// Easter Egg #1
console.log("Easter Egg #1! Code: C0N501E");

console.log("Easter Egg hint: I open at the close.");
//Vive L'Algerie!
var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
	jQuery('#snitch').fadeIn(500, function() {
		window.setTimeout(function() {
			jQuery('#snitch').hide();
		}, 5000);
	}, "konami-code");
}).listen();
//WOW!
new WOW().init();
// Snackbar
(function() {
	'use strict';
	var snackbarContainer = document.querySelector('#demo-toast-example');
	var showToastButton = document.querySelector('#demo-show-toast');
	showToastButton.addEventListener('click', function() {
		'use strict';
		var data = {
			message: 'Console.Log U Hax0r'
		};
		snackbarContainer.MaterialSnackbar.showSnackbar(data);
	});
}());
//Google Analytics

(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-71084125-1', 'auto');
ga('send', 'pageview');

//Scroll to top
$(document).ready(function() {

	//Check to see if the window is top if not then display button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
    } else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 850);
		return false;
	});

});
