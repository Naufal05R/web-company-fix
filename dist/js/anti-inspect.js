document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    alert("You Can not Do This!");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("You Can not Do This!");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("You Can not Do This!");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("You Can not Do This!");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("You Can not Do This!");
    window.event.returnValue = false;
  });
}