var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
var userCount=0;
var gameCount=0;

$(document).keydown(function(){
    if(!started){
        $("h1").text("Level "+ level);
        gamePattern=[];
        nextSequence();
        started=true;
    }
    
});

//click
$(".btn").click(function(){
    //fetching id of element
      var userChosenColor= $(this).attr("id");
      userClickedPattern.push(userChosenColor);
      playSound(userChosenColor);
      animatePress(userChosenColor);
      checkAnswer(userChosenColor);
 })

function nextSequence(){
    level++;
    $("h1").text("Level "+ level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    gameCount=(gamePattern.length);
    $("#"+randomChosenColor).addClass("flash");
     playSound(randomChosenColor);
     
}



function handler(userChosenColor){
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern+"  user");
    var length=userClickedPattern.length;  

}


//making sounds
function playSound(name){
        animatePress(name);
        var selectedAudio="sounds/"+name+".mp3";
        var audio=new Audio(selectedAudio);
        audio.play();  
    }
    
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
    console.log(currentLevel+"  current  "+gamePattern[userCount]+ "  game" )
    if(currentLevel===gamePattern[userCount++]){
        console.log(currentLevel+"  current  "+gamePattern[userCount]+"  count  "+userCount);
        console.log("success");
        if(userCount===gameCount){
            setTimeout(function(){
                userCount=0;
                userClickedPattern=[];
                nextSequence();
            },500);
        }
    }

    else{
        console.log("wrong");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").html('Game Over , level  ' +level+'<br>  Press Any Key to Restart!');
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
}

function startOver(){
    level=0;
    userCount=0;
    started=false;
}
   



