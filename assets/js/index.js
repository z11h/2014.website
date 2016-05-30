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
new WOW().init();
(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  showToastButton.addEventListener('click', function() {
    var data = {
      message: 'Console.Log U Hax0r'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());

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
