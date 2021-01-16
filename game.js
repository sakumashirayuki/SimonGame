// Game Setting and Correct Pattern
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();
var level;
// User Pattern
var userClickedPattern = new Array();
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChooseColor = buttonColors[randomNumber];
    gamePattern.push(randomChooseColor);
    $("#"+randomChooseColor).fadeOut(30).fadeIn(30);
    // level up
    level++;
    // refresh h1
    $("h1").text("Level "+ level);
}
$("body").keypress(function(){
    // game start
    level = 0;
    $("h1").text("Level 0");
    nextSequence();
})
$(".btn").click(function(event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    // play sound
    var soundUrl = "sounds/" + userChosenColor + ".mp3";
    var snd = new Audio(soundUrl);
    snd.play();
    // animate
    $("#"+userChosenColor).addClass("pressed");
    setTimeout(function(){
        $("#"+userChosenColor).removeClass("pressed");
    }, 80);
})