const home = document.querySelector('#home').getBoundingClientRect().y + window.scrollY;
const about = document.querySelector('#about').getBoundingClientRect().y + window.scrollY;
const meta = document.querySelector('#metagenre').getBoundingClientRect().y + window.scrollY;
const web = document.querySelector('#webdev').getBoundingClientRect().y + window.scrollY;
const misc = document.querySelector('#gfx').getBoundingClientRect().y + window.scrollY;

let topPos;
const sectionSnip = (about - home) / 3;


console.log(`1/3: ${sectionSnip}`)
console.log(`home: ${home}`)
console.log(`about: ${about}`)
console.log(`meta: ${meta}`)
console.log(`web: ${web}`)
console.log(`misc: ${misc}`)

// setTimeout(div_show, 1000)
// function div_show() {}

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function (event) {

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        console.log('Scrolling has stopped.');

        let scrollY = this.scrollY;

        topPos = (scrollY > home - sectionSnip && scrollY < about - sectionSnip)?home:
                 (scrollY > about - sectionSnip && scrollY < meta - sectionSnip)?about:
                 (scrollY > meta - sectionSnip && scrollY < web - sectionSnip)?meta:
                 (scrollY > web - sectionSnip && scrollY < misc - sectionSnip)?web:misc;

        window.scroll({
            top: topPos,
            behavior: 'smooth'
        });

    }, 66);

}, false);
