
// this code for the random computer select
const computer_play = function () {
let selectItem = ["rock", "scissors", "paper"];
let selected = selectItem[Math.floor(Math.random() * 3)];
return selected;
  };



const keys = document.querySelector('#keys');
var comScore = 0;
var playScore = 0;


      keys.addEventListener('click', function(e) {
        if(e.target.className == 'rock' && computer_play() == "scissors" || e.target.className == 'scissors' && computer_play() == "paper" || e.target.className == 'paper' &&computer_play() == "rock") {
            document.getElementById("choice").innerHTML = "Alright you win!";
            playScore++
            document.getElementById("scorePlayer").innerHTML = playScore;
              if (playScore > 4) {
                  document.getElementById("choice").innerHTML = "Wow! you have won the computer, good job!";
                   keys.style.display = "none"
                                  }

          } else if(e.target.className == 'rock' && computer_play() == "paper" || e.target.className == 'paper' && computer_play() == "scissors" || e.target.className == 'scissors' &&computer_play() == "rock") {
                  document.getElementById("choice").innerHTML = "You have lost! Computer choice was: " + computer_play();
                  comScore++
                 document.getElementById("scoreCom").innerHTML = comScore;
                     if (comScore > 4) {
                        document.getElementById("choice").innerHTML = "Oh the computer has won! refresh the page and try again";
                        keys.style.display = "none";
                                        }
          } else if(e.target.className == pick) {
              document.getElementById("choice").innerHTML = "You are tie!";

    }
  })
