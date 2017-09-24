// console.log("I think it works!")


function start(){
  document.turn = 'EX';
  document.winner = null;
  changeMessage(document.turn + " get's to start the game! Now GO!!!")
};

function changeMessage (message) {
  document.getElementById("message").innerText=message;
}

function nextMove(box){
  if(document.winner != null) {
    changeMessage("Calm down! " + document.turn + " already won!!!")
  } else
  if(box.innerText == '') {
      box.innerText=document.turn;
  nextPlayer();
  }else{
    changeMessage('Pick an EMPTY box, genius!')
  }
}

function nextPlayer(){
if(didYouWin(document.turn)) {
  changeMessage(document.turn + " gets the chicken dineer!!!")
  document.winner = document.turn;
} else
  if(document.turn == 'EX'){
    document.turn = 'OH';
      changeMessage("It is now " + document.turn + "'s turn to play!")
  } else {
    document.turn = 'EX';
      changeMessage("It is now " + document.turn + "'s turn to play!")
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
