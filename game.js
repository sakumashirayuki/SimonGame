var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChooseColor = buttonColors[randomNumber];
    gamePattern.push(randomChooseColor);
}
