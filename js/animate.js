var c = document.getElementById('encompass');
var as = document.getElementById('about-span');
var d = document.getElementById('encompass-webdev');
var e = document.getElementById('encompass-misc');

var a = document.getElementById('about-nav');
var b = document.getElementById('web-nav');
var g = document.getElementById('misc-nav');

var count = true;

function addAnim1() {

  c.classList.add('animated-1')

  setTimeout(function () {
    c.classList.add('animated-2')
  }, 3000);

  // remove the listener, no longer needed
  c.removeEventListener('mouseover', addAnim);
};


function addAnim2() {

  d.classList.add('animated-1')

  setTimeout(function () {
    d.classList.add('animated-2')
  }, 3000);

  // remove the listener, no longer needed
  d.removeEventListener('mouseover', addAnim);
};

function addAnim3() {

  e.classList.add('animated-1')

  setTimeout(function () {
    e.classList.add('animated-2')
  }, 3000);

  // remove the listener, no longer needed
  e.removeEventListener('mouseover', addAnim);
};

function addAnim4() {

  as.classList.add('animated-1')

  setTimeout(function () {
    as.classList.add('animated-2')
  }, 3000);

  // remove the listener, no longer needed
  as.removeEventListener('mouseover', addAnim);
};



if (count === true) {
  count = false;
  // listen to mouseover for the container
  a.addEventListener('click', addAnim4);
  b.addEventListener('click', addAnim2);
  g.addEventListener('click', addAnim3);

  c.addEventListener('mouseover', addAnim1);
  as.addEventListener('mouseover', addAnim4);
  d.addEventListener('mouseover', addAnim2);
  e.addEventListener('mouseover', addAnim3);
}
