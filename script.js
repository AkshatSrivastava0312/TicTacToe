var beep=new Audio()
beep.src="beep.mp3"

var backgroundSong=new Audio()
backgroundSong.src="backgroundSong.mp3"

var x=""
var y=""
var z=""

function startGame(){
  backgroundSong.play()
  document.turn="X"
  document.winner=null
  setMessage(document.turn +" gets to start")
}

function setMessage(msg) {
  document.getElementById("message").innerText=msg
}

function switchTurn() {
  if(checkForWinner(document.turn)){
    setMessage("Congratulations ! " + document.turn + " you won")
    document.winner=document.turn
    colorWin(x,y,z)
  }else {
    if(document.turn=="X") {
    document.turn="O"
    setMessage("Its "+ document.turn +"'s turn")
  } else {
    document.turn="X"
    setMessage("Its "+ document.turn +"'s turn")
  }}
}
function nextMove(square) {
  beep.play()
  if(document.winner != null){
    setMessage("Game over ! " + document.winner + " has already won it")
  }else if(square.innerText==""){
  square.innerText = document.turn
  switchTurn()
 } else {
  setMessage("That square is already used ...")
 }
}

function checkForWinner(move) {
  var result=false
  if(checkRow(0,1,2,move)){
    x=document.getElementById("c" + 0)
    y=document.getElementById("c" + 1)
    z=document.getElementById("c" + 2)
    result=true
      }else if (checkRow(3,4,5,move)){
    x=document.getElementById("c" + 3)
    y=document.getElementById("c" + 4)
    z=document.getElementById("c" + 5)
    result=true
      }else if(checkRow(6,7,8,move)){
    x=document.getElementById("c" + 6)
    y=document.getElementById("c" + 7)
    z=document.getElementById("c" + 8)
    result=true
      }else if(checkRow(0,3,6,move)){
    x=document.getElementById("c" + 0)
    y=document.getElementById("c" + 3)
    z=document.getElementById("c" + 6)
    result=true
      }else if(checkRow(1,4,7,move)){
    x=document.getElementById("c" + 1)
    y=document.getElementById("c" + 4)
    z=document.getElementById("c" + 7)
    result=true
      }else if(checkRow(2,5,8,move)){
    x=document.getElementById("c" + 2)
    y=document.getElementById("c" + 5)
    z=document.getElementById("c" + 8)
    result=true
      }else if(checkRow(0,4,8,move)){
    x=document.getElementById("c" + 0)
    y=document.getElementById("c" + 4)
    z=document.getElementById("c" + 8)
    result=true
      }else if(checkRow(2,4,6,move)){
    x=document.getElementById("c" + 2)
    y=document.getElementById("c" + 4)
    z=document.getElementById("c" + 6)
    result=true
      }
  return result
}

function checkRow(a,b,c,move){
  var result=false
  if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
    result=true
  }
  return result
}

function getBox(number) {
  return document.getElementById("c" + number).innerText
}

function reset() {
  for (var i = 0; i <= 8; i++) {
    document.getElementById("c" + i).innerText=""
    document.winner = null
    setMessage("New game started")
  }
  location.reload();
}

function colorWin(x,y,z){
  x.style.color="#ff4757"
  y.style.color="#ff4757"
  z.style.color="#ff4757"
}
