// Gamer Business Logic
function Gamer(gamerName, rollValue, currentScore, totalScore) {
  this.gamerName = gamerName;
  this.rollValue = rollValue;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};

Gamer.prototype.updateUserScore = function (currentScore) {
  
  this.currentScore += this.rollValue;
  console.log(this.currentScore);
  if (this.rollValue === 1) {
    this.currentScore = 0;
    console.log(this.currentScore);
    this.displayUserTotalScore(this.totalScore);
  }
  
  
};

Gamer.prototype.updateTotalScore = function (currentScore) {
  this.totalScore += currentScore;
  if (this.totalScore >= 100) {
    //  gamer1.displayUserTotalScore(gamer1.totalScore);
    $("#player-cards").hide();
    $("#winner-card").show();
    let refer = $("#winner");
    let htmlForWinner = "";
    htmlForWinner += "<p>" + gamer1.gamerName + ", You are the winner. Your Total Score is " + gamer1.totalScore + "</p>";
    refer.html(htmlForWinner);
  }
  //currentScore = 0;
};


Gamer.prototype.displayUserScore = function (currentScore) {
  if (this.rollValue === gamer1.rollValue) {
    let refer1 = $("div#player1CurrentRoll");
    let htmlForPlayer1CurrentScore = "";
    htmlForPlayer1CurrentScore += "<p>" + gamer1.currentScore + "</p>";
    refer1.html(htmlForPlayer1CurrentScore);
  }
  else if (this.rollValue === gamer2.rollValue) {
    let refer2 = $("div#player2CurrentRoll");
    let htmlForPlayer2CurrentScore = "";
    htmlForPlayer2CurrentScore += "<p>" + gamer2.currentScore + "</p>";
    console.log(htmlForPlayer2CurrentScore);
    refer2.html(htmlForPlayer2CurrentScore);
  }
};

Gamer.prototype.displayUserTotalScore = function (totalScore) {
  if (this.rollValue === gamer1.rollValue) {
    let refer1 = $("div#player1TotalScore")
    let htmlForPlayer1TotalScore = "";
    htmlForPlayer1TotalScore += "<p>" + this.totalScore + "</p>";
    refer1.html(htmlForPlayer1TotalScore);
  }
  else if (this.rollValue === gamer2.rollValue) {
    let refer2 = $("div#player2TotalScore")
    let htmlForPlayer2TotalScore = "";
    htmlForPlayer2TotalScore += "<p>" + this.totalScore + "</p>";
    refer2.html(htmlForPlayer2TotalScore);
  }
}



Gamer.prototype.displayRollValue = function (rollValue) {
  if (this.rollValue === gamer1.rollValue) {
    let refer1 = $("div#player1DieValue");
    let htmlForPlayer1DieValue = "";
    htmlForPlayer1DieValue += "<p>" + this.rollValue + "</p>";
    refer1.html(htmlForPlayer1DieValue);
  }
  else if (this.rollValue === gamer2.rollValue) {
    let refer2 = $("div#player2DieValue");
    let htmlForPlayer2DieValue = "";
    htmlForPlayer2DieValue += "<p>" + this.rollValue + "</p>";
    refer2.html(htmlForPlayer2DieValue);
  }
};

let gamer1 = new Gamer("Gamer1", 0, 0, 0);
let gamer2 = new Gamer("Gamer2", 0, 0, 0);

//Die Business Logic
//function Dice() {
//this.rollValues = [];
//let rollValue=0;
//}

//let dice = new Dice;
//let rollValues=[];
//let rollValue = 0;

Gamer.prototype.roll = function () {
  this.rollValue = Math.floor(Math.random() * 6) + 1;
  // if (rollValue === 1) {
  //   gamer1.currentScore = 0;
  //   console.log(rollValue);
  //   console.log(gamer1.currentScore);
  // }
  //this.rollValues.push(rollValue);
}

function attachButtonRollListeners() {
  $("button#player1roll").on("click", function () {
    gamer1.roll();
    gamer1.updateUserScore(gamer1.currentScore);
    gamer1.displayRollValue(gamer1.rollValue);
    gamer1.displayUserScore(gamer1.currentScore);

  });
  $("button#player2roll").on("click", function () {
    gamer2.roll();
    gamer2.updateUserScore(gamer2.currentScore);
    gamer2.displayRollValue(gamer2.rollValue);
    gamer2.displayUserScore(gamer2.currentScore);
  });
};

function attachButtonHoldListeners() {
  $("button#player1hold").on("click", function () {
    gamer1.updateTotalScore(gamer1.currentScore);
    gamer1.displayUserTotalScore(gamer1.totalScore);
    gamer1.currentScore = 0;
  });
  $("button#player2hold").on("click", function () {
    gamer2.updateTotalScore(gamer2.currentScore);
    gamer2.displayUserTotalScore(gamer2.totalScore);
    gamer2.currentScore = 0;
  });
}


$(document).ready(function () {
  attachButtonRollListeners();
  attachButtonHoldListeners();
  //attachButtonRollListeners(gamer2.currentScore);
  // attachButtonHoldListeners(gamer2.totalScore);
  //event.preventDefault();
  // gamer 1 click on gamer1RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());
  // gamer 2 click on gamer2RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());

});
