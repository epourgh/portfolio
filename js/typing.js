
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
  string = '_';

  for (i = 0; i < lastArray.length; i++) {
    
    // console.log(duration);
    duration += 125;


    string = `${string.substring(0, string.length - 1)}${lastArray[i]}_`;
    

    setTimeout(`${lastNameDom}="${string}";`, duration);
    
  }

  if (deleteText == true) {

    duration += 1000;

    for (i = i -1; i !== -1; i--) {
      // console.log(duration);
      duration += 125;
      lastArray.pop();
      removeLast = lastArray.join('');
      removeLast = (removeLast == '') ? '' :removeLast;

      setTimeout(`${lastNameDom} = "${removeLast}_";`, duration);

    }
  } else {
    string = `${string.substring(0, string.length - 1)}`;
    setTimeout(`${lastNameDom}="${string}";`, duration);
  }
}


var deleteText = true;
duration = 1000;

animateWords("POURGHAED", duration, deleteText);


duration = 6000;
if (screen && screen.width >= 1099) {
  animateWords("WEB DEVELOPER", duration, deleteText);
} else {
  animateWords("WEB DEV", duration, deleteText);
}


var deleteText = false;

duration = 12000;
animateWords("POURGHAED", duration, deleteText);