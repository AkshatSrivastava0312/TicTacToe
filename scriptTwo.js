var beep=new Audio()
beep.src="beep.mp3"

var user="X"
var pc="O"

function startGame() {

}

function nextMove(square) {
  beep.play()
  // if(document.winner != null){
  //   setMessage("Game over ! " + document.winner + " has already won it")
  // }else
  if(square.innerText==""){
  square.innerText = user
}}
