const home = document.querySelector('#home').getBoundingClientRect().y + window.scrollY;
const about = document.querySelector('#about').getBoundingClientRect().y + window.scrollY;
const metagenre = document.querySelector('#metagenre').getBoundingClientRect().y + window.scrollY;
const webdev = document.querySelector('#webdev').getBoundingClientRect().y + window.scrollY -50;
const misc = document.querySelector('#misc').getBoundingClientRect().y + window.scrollY -50;
const end = document.querySelector('#end').getBoundingClientRect().y + window.scrollY -50;

let topPos;
const sectionSnip = (about - home) / 3;

console.log(`1/3: ${sectionSnip}`)
console.log(`home: ${home}`)
console.log(`about: ${about}`)
console.log(`metagenre: ${metagenre}`)
console.log(`webdev: ${webdev}`)
console.log(`misc: ${misc}`)

// setTimeout(div_show, 1000)
// function div_show() {}

// Setup isScrolling variable
var isScrolling;
const windowHash = window.location.hash.replace('#', '');
document.getElementById(`${windowHash}-nav`).classList = 'scroll active';
let previousString = windowHash;



// Listen for scroll events
window.addEventListener('scroll', function (event) {

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        console.log('Scrolling has stopped.');

        let scrollY = this.scrollY;

        keyString = (scrollY > home - sectionSnip && scrollY < about - sectionSnip)?'home':
                    (scrollY > about - sectionSnip && scrollY < metagenre - sectionSnip)?'about':
                    (scrollY > metagenre - sectionSnip && scrollY < webdev - sectionSnip)?'metagenre':
                    (scrollY > webdev - sectionSnip && scrollY < misc - sectionSnip)?'webdev':
                    (scrollY > misc - sectionSnip && scrollY < misc + sectionSnip)?'misc':'end';

        const keyValues = {
            home: home,
            about: about,
            metagenre: metagenre,
            webdev: webdev,
            misc: misc,
            end: end
        };

        console.log(keyString)

        if (previousString !== undefined) {
            document.getElementById(`${previousString}-nav`).classList = 'scroll'; 
        }

        document.getElementById(`${keyString}-nav`).classList = 'scroll active';


        previousString = keyString;
        topPos = keyValues[keyString];

        window.scroll({
            top: topPos,
            behavior: 'smooth'
        });

    }, 66);

}, false);
