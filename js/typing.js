// var str = "Website and logo by Emerson Pourghaed";
// var wording = str.split('');
var duration = 0;

console.log(duration);

var first = "EMERSON";
var firstArray = first.split(' ');


// Spell out first and last name individually

for (i = 0; i < firstArray.length; i++) {
  duration += 125;
  setTimeout('document.getElementById("first-name").innerHTML += "' + firstArray[i] + '";', duration);
}

console.log(duration);

setTimeout('document.getElementById("last-name").innerHTML = "_";', duration);

function animateWords(word, duration, deleteText) {
  var lastArray = word.split('');

  duration += 1000;

  for (i = 0; i < lastArray.length; i++) {
    
    console.log(duration);
    duration += 125;

    if (i == 0) {
      setTimeout('document.getElementById("last-name").innerHTML = "' + lastArray[i] + '";', duration);
    } else {
      setTimeout('document.getElementById("last-name").innerHTML += "' + lastArray[i] + '";', duration);
    }
    
  }

  if (deleteText == true) {

    duration += 1000;

    for (i = i -1; i !== -1; i--) {
      console.log(duration);
      duration += 125;
      lastArray.pop();
      removeLast = lastArray.join('');

      if (i > 0) {
        setTimeout('document.getElementById("last-name").innerHTML = "' + removeLast + '";', duration);
      } else {
        setTimeout('document.getElementById("last-name").innerHTML = "_";', duration);
      }

    }
  }
}


var deleteText = true;

duration = 1000;
console.log(duration);
animateWords("POURGHAED", duration, deleteText);

console.log(duration);
duration = 6000;
animateWords("WEB_DEVELOPER", duration, deleteText);

var deleteText = false;

console.log(duration);
duration = 12000;
animateWords("POURGHAED", duration, deleteText);

/*
// for when name of site is Applux instead of just Emerson

for (i = 0; i < wording.length; i++) {
  duration += 75;
  setTimeout('document.getElementById("createdBy").innerHTML += "' + wording[i] + '";', duration);
}
*/
