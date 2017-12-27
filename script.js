
// this code for the random computer select
const computer_play = function () {
let selectItem = ["rock", "scissors", "paper"];
let selected = selectItem[Math.floor(Math.random() * 3)];
return selected;
  };



let pick = computer_play();
let comScore = 0;
let playScore = 0;



while (comScore < 5 && playScore < 5 ){

const keys = document.querySelector('#keys');
keys.addEventListener('click', function(e){

const rock = e.target.className
if(e.target.className == 'rock' && pick == "scissors" || e.target.className == 'scissors' && pick == "paper" || e.target.className == 'paper' &&pick == "rock") {
document.getElementById("choice").innerHTML = "Alright you won!";
playScore++
document.getElementById("scorePlayer").innerHTML = playScore;

}

else if(e.target.className == 'rock' && pick == "paper" || e.target.className == 'paper' && pick == "scissors" || e.target.className == 'scissors' &&pick == "rock") {
  document.getElementById("choice").innerHTML = "You have lost! Computer choice was: " + pick;
  comScore++
  document.getElementById("scoreCom").innerHTML = comScore;
}

else if(e.target.className == pick) {
  document.getElementById("choice").innerHTML = "You are tie!";
}
})
}

alert ("it's over");
