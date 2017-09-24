// wait for the DOM to finish loading
// $(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function

// });

// ...document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
  });

change text, text color, background color in boxes when clicking in single box
var plays = [...document.querySelectorAll('.box')];
  plays.forEach(function(clickedBox) {
    clickedBox.addEventListener('click', changeText);
      function changeText(event) {
        clickedBox.innerText = 'X';
        clickedBox.style.color = 'white';
        clickedBox.style.backgroundColor = 'blue';
      // console.log(event);
      }
  });

after each click change player and what is put in each box



// select html button and make it work with js
var button = document.querySelector('button');

// on click of button, refresh window
button.addEventListener('click', function(){
  window.location.reload(true);
});


//define player markers
const player1Marker = 'X'
const player2Marker = 'Y'
//create grid
$(document).ready(function() {
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]


  $(.col).click(function() {
    $(this).html(player1Marker);

  });
});
