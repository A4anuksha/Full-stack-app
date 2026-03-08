var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red","blue","green","yellow"]; 

var started = false;

var level = 0;

function nextSequence(){
    level++;
    $("h1").text("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour)
        .fadeOut(100)
        .fadeIn(100)
}

function playSound(color){
    var audio = new Audio("sounds/" +color+ ".mp3");
    audio.play();
}

function animatePress(color){
    $("#" +color).addClass("pressed");

    setTimeout(function() {
        $("#" +color).removeClass("pressed");
    }, 100);
}

$(".btn").click(function(){
    var userChosenColour = this.id;

    playSound(userChosenColour);
    animatePress(userChosenColour);

    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

});

$(document).keydown(function(){
    
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
});

function startOver(){
    level = 0; 
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
                userClickedPattern = [];
            },1000);
        }
    }
    else{
        $("h1").text("Game Over, Press Any Key to Restart");

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
}