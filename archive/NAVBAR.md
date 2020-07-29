```html
<div class="navbar" id="navbar">
    <span class="home-button">
    <a class="scroll" href="#home">HOME</a>
    </span>&nbsp;
    <div class="projectsNavbar" id="projectsNavbar">
    <a class="scroll" style="display: none;"></a>
    <a class="scroll" href="#about">ABOUT</a>&nbsp;
    <span class="navbar-point">•</span>
    <a class="scroll" href="#metagenre">SHOWCASE #1</a>&nbsp;
    <span class="navbar-point">•</span> 
    <a class="scroll" href="#webdev">WEBSITES</a>&nbsp;
    <span class="navbar-point">•</span> 
    <a class="scroll" href="#graphic">MISC</a>
    <a class="scroll" style="display: none;" id="end-nav"></a>
    </div>
</div>

<!-- js -->
<script src="./js/navbar-change.js"></script>
```

```js
//navbar-change.js

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
```

```css
@media screen and (max-width: 1000px) and (min-width: 500px) {

    .navbar-point {
        line-height: 20px;
        vertical-align: text-bottom;
        color: #fff;
    }

    .projectsNavbar {
        display: inline-block;
    }

    .navbar {
        border-radius: 0;
        position: -webkit-sticky;
        position: sticky;
        height: 0;
        margin: 0 auto;
        top: 0;
        text-align: center;
        margin-right: 5%;
        z-index: 3;
    }

    .navbar a {
        font-size: 17px;
        font-family: 'Karla', sans-serif;
        color: #fff;
        text-decoration: none;
        margin-left: 7px;
    }

    .navbar a:hover {
        transition: .1s;
        color: #00D4F1;
    }

    .scrolled {
        transition: 0.5s ease;
    }

    .scrolled.navbar {
        height: 50px;
        background-color: rgba(20, 20, 20, .8);
        transition: 0.5s ease;
        margin-right: 0;
    }

    .scrolled.navbar a {
        color: #fff;
    }

    .scrolled.navbar a:hover {
        color: #BBD200;
        padding-bottom: 8px;
        border-bottom: 8px solid transparent;
        border-image: linear-gradient(to right, #00E512, #008DBF);
        border-image-slice: 1;
    }

    .scrolled.navbar .active {
        color: #BBD200;
        padding-bottom: 8px;
        border-bottom: 8px solid transparent;
        border-image: linear-gradient(to right, #00E512, #008DBF);
        border-image-slice: 1;
    }

    .home-button a:hover {
        visibility: hidden;
    }

    .home-button a {
        visibility: hidden;
        background: #F2FF1F;
        color: #201F24;
        padding: 0 5px;
        border-radius: 10px;
        -moz-transition: all 0s;
        -webkit-transition: all 0s;
        transition: all 0s;
    }

    .scrolled.navbar .home-button a {
        visibility: visible;
        background: rgba(255, 255, 255, .3);
        color: #fff;
        padding: 0 5px;
        border-radius: 10px;
        -moz-transition: all 1s;
        -webkit-transition: all 1s;
        transition: all 1s;
    }

    .scrolled.navbar .home-button a:hover {
        visibility: visible;
        color: #BBD200;
        background: linear-gradient(to right, rgba(0, 229, 18, .5), rgba(0, 141, 191, 1));
        border-style: none;
    }

}
```