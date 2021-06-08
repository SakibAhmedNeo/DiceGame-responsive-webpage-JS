function startgame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

  if(randomNumber1 > randomNumber2){
    document.querySelector('.result').innerHTML = "<h1>Player 1 Wins!<h1>";
  }else if (randomNumber1 < randomNumber2) {
    document.querySelector('.result').innerHTML = "<h1>Player 2 Wins!<h1>";
  }else {
    document.querySelector('.result').innerHTML = "<h1>It's a Draw!<h1>";
  }

  document.querySelector('.startButton').innerHTML = "Play Again";

}
