// Gamer Business Logic
function Gamer(gamerName, rollValue, currentScore, totalScore) {
  this.gamerName = gamerName;
  this.rollValue = rollValue;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};

Gamer.prototype.updateUserScore = function () {
  this.currentScore += this.rollValue;
  if (this.rollValue === 1) {
    this.currentScore = 0;
    this.displayUserTotalScore();
  }
};

Gamer.prototype.updateTotalScore = function (currentScore) {
  this.totalScore += currentScore;
  if (this.totalScore >= 100) {
    $("#player-cards").hide();
    $("#winner-card").show();
    let refer = $("#winner");
    let htmlForWinner = "";
    htmlForWinner += "<p>" + this.gamerName + ", You are the winner. Your Total Score is " + this.totalScore + "</p>";
    refer.html(htmlForWinner);
  }
};

Gamer.prototype.displayUserScore = function () {
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
    refer2.html(htmlForPlayer2CurrentScore);
  }
};

Gamer.prototype.displayUserTotalScore = function (refer1) {
  if (this.rollValue === gamer1.rollValue) {
    
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

Gamer.prototype.displayRollValue = function () {
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

Gamer.prototype.roll = function () {
  this.rollValue = Math.floor(Math.random() * 6) + 1;
}

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


function onHold1() {
  $("button#player1hold").prop('disabled', true);
  $("button#player1roll").prop('disabled', true);
  $("button#player2hold").prop('disabled', false);
  $("button#player2roll").prop('disabled', false);


}
function onHold2() {
  $("button#player2hold").prop('disabled', true);
  $("button#player2roll").prop('disabled', true);
  $("button#player1hold").prop('disabled', false);
  $("button#player1roll").prop('disabled', false);


}
function attachButtonRollListeners() {
  $("button#player1roll").on("click", function () {
    gamer1.roll();
    if (gamer1.rollValue === 1) {
      onHold1();
    }
    gamer1.updateUserScore();
    gamer1.displayRollValue();
    gamer1.displayUserScore();

  });
  $("button#player2roll").on("click", function () {
    gamer2.roll();
    if (gamer2.rollValue === 1) {
      onHold2()
    }
    gamer2.updateUserScore();
    gamer2.displayRollValue();
    gamer2.displayUserScore();
  });
};

function attachButtonHoldListeners() {
  $("button#player1hold").on("click", function () {
    gamer1.updateTotalScore(gamer1.currentScore);
    gamer1.displayUserTotalScore($("div#player1TotalScore"));
    gamer1.currentScore = 0;
    onHold1()
  });
  $("button#player2hold").on("click", function () {
    gamer2.updateTotalScore(gamer2.currentScore);
    gamer2.displayUserTotalScore($("div#player1TotalScore"));
    gamer2.currentScore = 0;
    onHold2()
  });
}

$(document).ready(function () {
  attachButtonRollListeners();
  attachButtonHoldListeners();
});
