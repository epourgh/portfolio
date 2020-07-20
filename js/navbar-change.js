 // gives the navbar a style when  scrolling down in browser

const navbar = document.getElementById("navbar");
const goHome = document.getElementById("goHome");

window.onscroll = function (event) {
  if (this.scrollY > 220) {
    navbar.classList = "navbar scrolled";
    goHome.classList = "goHome scrolled";
  } else {
    navbar.classList = "navbar";
    goHome.classList = "goHome";
  }
}