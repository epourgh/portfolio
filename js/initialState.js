let previousString;

if(window.location.hash) {
    previousString = window.location.hash;
} else {
    previousString = 'home';
}


var encompass = document.getElementById(`${previousString}-encompass`);
encompass.classList.add('animated-1')

setTimeout(function () {
    encompass.classList.add('animated-2')
}, 1000);

document.getElementById(`${keyString}-nav`).classList = 'scroll active';