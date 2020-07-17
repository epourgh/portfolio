$(function() {
  var openButton = $("#button-div-open");
  var closeButton = $("#button-div-close");
  var wrapper = $("#wrapper");
  var list = $("#list");

  wrapper.removeClass('open');
  wrapper.height(0);

  openButton.click(function() {
    wrapper.height(list.outerHeight(true));
    document.getElementById("button-div-open").style.display = "none";
    document.getElementById("button-div-close").style.display = "block";
  });

  closeButton.click(function() {
    wrapper.height(0);
    document.getElementById("button-div-open").style.display = "block";
    document.getElementById("button-div-close").style.display = "none";
  });

});
