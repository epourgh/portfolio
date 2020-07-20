
var duration = 0;

// console.log(duration);

var first = "EMERSON";
var firstArray = first.split(' ');


// Spell out first and last name individually

for (i = 0; i < firstArray.length; i++) {
  duration += 125;
  setTimeout(`document.getElementById("first-name").innerHTML += "${firstArray[i]}";`, duration);
}

// console.log(duration);

const lastNameDom = 'document.getElementById("last-name").innerHTML';


setTimeout(`${lastNameDom} = "_";`, duration);

function animateWords(word, duration, deleteText) {
  var lastArray = word.split('');

  duration += 1000;

  for (i = 0; i < lastArray.length; i++) {
    
    // console.log(duration);
    duration += 125;

    let addition = (i == 0)?'':'+';

    setTimeout(`${lastNameDom}${addition}="${lastArray[i]}";`, duration);
    
  }

  if (deleteText == true) {

    duration += 1000;

    for (i = i -1; i !== -1; i--) {
      // console.log(duration);
      duration += 125;
      lastArray.pop();
      removeLast = lastArray.join('');
      removeLast = (removeLast == '') ? '_' :removeLast;

      setTimeout(`${lastNameDom} = "${removeLast}";`, duration);

    }
  }
}


var deleteText = true;

duration = 1000;
// console.log(duration);
animateWords("POURGHAED", duration, deleteText);

// console.log(duration);
duration = 6000;
animateWords("WEB_DEVELOPER", duration, deleteText);

var deleteText = false;

// console.log(duration);
duration = 12000;
animateWords("POURGHAED", duration, deleteText);