// Gamer Business Logic
function Gamer(gamerName, rollValue, currentScore, totalScore) {
  this.gamerName = gamerName;
  this.rollValue = rollValue;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};

Gamer.prototype.updateUserScore = function (refer) {
  this.currentScore += this.rollValue;
  if (this.rollValue === 1) {
    this.currentScore = 0;
    this.displayUserTotalScore(refer);
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

Gamer.prototype.displayUserScore = function (refer) {
    let htmlForPlayerCurrentScore = "";
    htmlForPlayerCurrentScore += "<p>" + this.currentScore + "</p>";
    refer.html(htmlForPlayerCurrentScore);
  };

Gamer.prototype.displayUserTotalScore = function (refer) {
    let htmlForPlayerTotalScore = "";
    htmlForPlayerTotalScore += "<p>" + this.totalScore + "</p>";
    refer.html(htmlForPlayerTotalScore);
  };

Gamer.prototype.displayRollValue = function (refer) {
    let htmlForPlayerDieValue = "";
    htmlForPlayerDieValue += "<p>" + this.rollValue + "</p>";
    refer.html(htmlForPlayerDieValue);
  };


Gamer.prototype.roll = function () {
  this.rollValue = Math.floor(Math.random() * 6) + 1;
}

let gamer1 = new Gamer("Gamer1", 0, 0, 0);
let gamer2 = new Gamer("Gamer2", 0, 0, 0);

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
      gamer1.displayRollValue($("div#player1DieValue"));
      gamer1.updateUserScore($("div#player1TotalScore"));
      gamer1.displayUserScore($("div#player1CurrentRoll"));
      onHold1();
    }
    gamer1.updateUserScore($("div#player1TotalScore"));
    gamer1.displayRollValue($("div#player1DieValue"));
  
    gamer1.displayUserScore($("div#player1CurrentRoll"));

  });
  $("button#player2roll").on("click", function () {
    gamer2.roll();
    if (gamer2.rollValue === 1) {
      gamer2.displayRollValue($("div#player2DieValue"));
      gamer2.updateUserScore($("div#player2TotalScore"));
      gamer2.displayUserScore($("div#player2CurrentRoll"));
      onHold2()
    }
    gamer2.updateUserScore($("div#player2TotalScore"));
    gamer2.displayRollValue($("div#player2DieValue"));
    gamer2.displayUserScore($("div#player2CurrentRoll"));
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
    gamer2.displayUserTotalScore($("div#player2TotalScore"));
    gamer2.currentScore = 0;
    onHold2()
  });
}

$(document).ready(function () {
  attachButtonRollListeners();
  attachButtonHoldListeners();
});
