// console.log("I think it works!")
  var count = 0;
  var turn = 'EX';
  document.winner = null;
  changeMessage(turn + " get's to start the game! Now GO!!!");


function changeMessage (message) {
  document.getElementById("message").innerText=message;
}

function nextMove(box){
  if(document.winner != null) {
    changeMessage("Calm down! " + turn + " already won!!!")
  } else
  if(box.innerText == '') {
      box.innerText=turn;
  nextPlayer();
  }else{
    changeMessage('Pick an EMPTY box, genius!')
  }
}

function nextPlayer(){
  count++;
  console.log('count: '+count);
if(didYouWin(turn)) {
  changeMessage(turn + " gets the chicken dinner!!!");
  // // document.body.style.background = "url(images/winner.gif)";
  // document.body.style.backgroundSize = "cover";
  // document.body.style.height = "100%";
  document.getElementById("message").style.color = "#00ff99";
  document.getElementById("box").style.background = "url(images/winner.gif)";
  document.getElementById("box").style.backgroundSize = "cover";
  document.winner = turn;
}
else if(count==9){
  //check for draw
    changeMessage("win? lose? DRAW!!!");
    // document.body.style.background = "url(images/nowinner.gif)";
    // document.body.style.backgroundSize = "cover";
    document.getElementById("message").style.color = "#ff0000";
    document.getElementById("box").style.background = "url(images/nowinner.gif)";
    document.getElementById("box").style.backgroundSize = "inherit";

}
//else if(turn == 'EX'){
  else{
  turn = (turn == 'EX') ? 'OH' : 'EX';
   // turn = 'OH';
      changeMessage("It is now " + turn + "'s turn to play!")
  /*
  } else {
    turn = 'EX';
      changeMessage("It is now " + turn + "'s turn to play!")
      */

  }
}

function didYouWin (move) {
  var result = false;
  if(checkRow(1, 2, 3, move) ||
     checkRow(4, 5, 6, move) ||
     checkRow(7, 8, 9, move) ||
     checkRow(1, 4, 7, move) ||
     checkRow(2, 5, 8, move) ||
     checkRow(3, 6, 9, move) ||
     checkRow(1, 5, 9, move) ||
     checkRow(3, 5, 7, move)) {
      result = true;
    }
    return result;
}


function checkRow (a, b, c, move){
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}


function getBox (number){
  return document.getElementById('box' + number).innerText;
}

function clearGame (number){
  document.getElementById('box' + number).innerText = '';
}

var button = document.querySelector('button');

button.addEventListener('click', function(){
  window.location.reload(true);
});
