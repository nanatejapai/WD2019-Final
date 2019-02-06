
window.onload = function() {
  // Find out mouse position
  // Set background color based on returned values
  var tempX = 0;
  var tempY = 0;
  // get body element
  var body = document.getElementsByTagName("body");


  function getMouseXY(e) {
    tempX = e.pageX;
    tempY = e.pageY;

    return true;
  }


  function changeFontSize(e) {
    var scrollPos = window.scrollY / 10;
    var header = document.getElementsByTagName("h2");
    if (scrollPos < 8){true;}
    if (window.scrollY > 600 ){scrollPos = 0}
    header[0].style.fontSize = `${scrollPos}px`;
  }

  document.addEventListener("scroll", changeFontSize);

}

function increaseFont(){
  var txt = document.getElementById('b');
  var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  var currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 10) + 'px';
}

// function decreaseFont(){
//   var txt = document.getElementById('b');
//   var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//   var currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 50) + 'px';
// }


document.addEventListener("click", increaseFont);