var userClickedPattern = [];
var gamepattern = [];
var buttonColors = ["green","red","yellow","blue"];
var start = 0;
var level = 0;
var userCount = 0;
var gameCount = 0;


function nextSequence(){
    level++;
    $("h1").text("level  "+level);
    
    var randomKey = Math.random();
    randomKey = Math.floor(randomKey*4);
    var randomChosenKey = buttonColors[randomKey];
    gamepattern.push(randomChosenKey);
    gameCount = (gamepattern.length);
    $("#"+randomChosenKey).addClass("flash");
        playSound(randomChosenKey);
}

//clicked
$(".btn").click(function(event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
    checkAnswer(userChosenColor);

    

});

function checkAnswer(currentLevel){
    if(currentLevel === gamepattern[userCount++]){
        if(userCount === gameCount){
            setTimeout(function(){
            userClickedPattern = [];
            userCount = 0;
            nextSequence();
            }, 400);
            
        }
    }
    else{
        $("body").addClass("game-over");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over, Click Here to Start Again ");
        startOver();
    }
    
    
}

function playSound(key){
    animatePress(key);
    var audio = new Audio("sounds/"+key+".mp3");
    audio.play();

}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}



    $("h1").click(function(){
        if(start === 0){
        start = 1;
        nextSequence();
        console.log("hello");
        }
    })

    function startOver(){
        level = 0;
        gamepattern = [];
        start = 0;
    }
    
