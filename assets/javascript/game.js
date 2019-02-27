var target, n1, n2, n3, n4;
var score = 0;

var wins = 0;
var losses = 0;

resetValues();

// 1
function button1() {
    verify(n1);
}

// 2
function button2() {
    verify(n2);
}

// 3
function button3() {
    verify(n3);
}

// 4
function button4() {
    verify(n4);
}

function resetValues() {
    target = getRandom(19, 120);
    score = 0;
    n1 = getRandom(1, 12);
    n2 = getRandom(1, 12);
    n3 = getRandom(1, 12);
    n4 = getRandom(1, 12);
    updateResults();
}

function updateResults() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#target").text("Target: " + target);
    $("#total_score").text("Your total score is: " + score);
}

function verify(value) {

    score += value;
    updateResults();

    if (score == target) {
        alert("You Win!");

        // Win.
        wins += 1;
        resetValues();
    }
    
    if (score > target) {
        alert("You Lose!");
        // Loss.
        losses += 1;
        resetValues();
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Glitter effect js//
$(function() {
    var body = $('#starshine'),
        template = $('.template.shine'),
        stars =  500,
        sparkle = 20;
    
      
    var size = 'small';
    var createStar = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle) + 's',
        mozAnimationDelay: (Math.random() * sparkle) + 's'
      }).addClass(size).appendTo(body);
    };
   
    for(var i = 0; i < stars; i++) {
      if(i % 2 === 0) {
        size = 'small';
      } else if(i % 3 === 0) {
        size = 'medium';
      } else {
        size = 'large';
      }
      
      createStar();
    }
  });