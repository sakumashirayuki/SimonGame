// Game Setting and Correct Pattern
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();
var level;
var started = false;
// User Pattern
var userClickedPattern = new Array();
// functions
function nextSequence(){
    // empty user pattern
    userClickedPattern = [];
    // create new color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChooseColor = buttonColors[randomNumber];
    gamePattern.push(randomChooseColor);
    $("#"+randomChooseColor).fadeOut(30).fadeIn(30);
    // level up
    level++;
    // refresh h1
    $("h1").text("Level "+ level);
}
function startOver(){
    // game restart
    gamePattern = [];
    level = 0;
    started = false;
}
function checkAnswer(currentLevel){
    if(currentLevel!=level){
        return; // user haven't finish this sequence
    }
    var flag = 1;
    for(let i = 0; i < level; i++){
        if(userClickedPattern[i]!=gamePattern[i]){
            flag = 0;
            break;
        }
    }
    if(flag){ // right
        setTimeout(nextSequence, 1000);
    }else{ // wrong
        // failed sound
        var snd = new Audio("sounds/wrong.mp3");
        snd.play();
        // change body style
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        // change heading
        $("h1").text("Game Over, Press Any Key to Restart");
        // restart
        startOver();
    }
}
// events
$("body").keypress(function(){
    // game start
    if(!started){
        level = 0;
        started = true;
        $("h1").text("Level 0");
        nextSequence();
    }
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
    }, 100);
    checkAnswer(userClickedPattern.length);
})