Update current score and total score
While second game button is inactive
currentScore += rollValue // pretends to be a loop // currentScore = 0 at start of round (at first click of roll function) 

function switchturn to activate gamer's2 buttons

if else branch: 
if currentGamer rollValue === 1
  then .toggle() to nextGamer
else if the hold button .click()
  then .toggle() to nextGamer
else dice.roll (keep going) 


* Activate gamer2 - buttonListeners?
* Switch between players on rollValue = 1 or on hold button click - could be done through DOM? Buttons only show on player turn. Or function deactivate. Or both/mix of the two.
(Or switch gears to one roll button, and a hold button or each player.)

// If a 1 is rolled - within Dice.roll (rollValue = 1 currentScore would = 0)
//* If total is equal to or more than 100 - within updateUserTotal Score ( if statement that if total score >= 100 display winner)