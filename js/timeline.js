// Pagination change function
function myFunction(id) {
  idsNum = id.replace(/\D/g,'');
  var colors = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];

  console.log(idsNum + '.) ' + colors[idsNum]);

  // document.body.style.background = colors[idsNum];

  var matches = document.getElementsByClassName("radio");

  for (var i = 0; i < matches.length; i++) {
    matches[i].checked = false;
  }

  document.getElementById(id).checked = true;
  document.getElementById(id).style.color = colors[idsNum];
}

function autoChangePagination() {

  var div = 'work' + idNumeSelector;
  myFunction(div);

  idNumeSelector--;
  
  if (idNumeSelector == 0) {
    idNumeSelector = 3;
  }

  setTimeout(autoChangePagination, 5000);
}

var idNumeSelector = 3;
autoChangePagination();

// OnClick function: changes to button & syncs autoChangePagination
function onClickPagination(id) {
  var idsNum = id.replace(/\D/g,'');
  console.log(idsNum);
  myFunction('work' + idsNum);
  idNumeSelector = idsNum;
}