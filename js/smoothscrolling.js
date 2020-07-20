 // animation when clicking link that directs to a different part of the page

$(function() {

  $('#navbar a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  });

  $('#navbar-mobile a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  });

  $('#scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  });

  // $('.goHome').on('click', function(e) {
  //   e.preventDefault();
  //   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  // });

});


var targetOffset, currentPosition,
  body = document.body,
  button = document.getElementById('goHome'),
  animateTime = 2000;

function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}

button.addEventListener('click', function (event) {

  targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
  currentPosition = getPageScroll();

  body.classList.add('in-transition');
  body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

  window.setTimeout(function () {
    body.classList.remove('in-transition');
    body.style.cssText = "";
    window.scrollTo(0, targetOffset);
  }, animateTime);

  event.preventDefault();

}, false);