var userClickedPattern=[],gamepattern=[],buttonColors=["green","red","yellow","blue"],start=0,level=0,userCount=0,gameCount=0;function nextSequence(){level++,$("h1").text("level  "+level);var e=Math.random();e=Math.floor(4*e);var t=buttonColors[e];gamepattern.push(t),gameCount=gamepattern.length,$("#"+t).addClass("flash"),playSound(t)}function checkAnswer(e){e===gamepattern[userCount++]?userCount===gameCount&&setTimeout((function(){userClickedPattern=[],userCount=0,nextSequence()}),400):($("body").addClass("game-over"),new Audio("sounds/wrong.mp3").play(),setTimeout((function(){$("body").removeClass("game-over")}),200),$("h1").text("Game Over, Click Here to Start Again "),startOver())}function playSound(e){animatePress(e),new Audio("sounds/"+e+".mp3").play()}function animatePress(e){$("#"+e).addClass("pressed"),setTimeout((function(){$("#"+e).removeClass("pressed")}),100)}function startOver(){level=0,gamepattern=[],start=0}$(".btn").click((function(e){var t=e.target.id;userClickedPattern.push(t),playSound(t),checkAnswer(t)})),$("h1").click((function(){0===start&&(start=1,nextSequence(),console.log("hello"))}));
