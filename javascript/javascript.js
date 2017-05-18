	//create variables for keeping score 
		var yourScore = 0;
    var wins = 0;
    var losses = 0;

var reset = function(){
  yourScore = 0;
  
}

//create variables for the value of the gems

function getRandomIntInclusive(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
};

var pearl = getRandomIntInclusive(1, 12);
    var diamond = getRandomIntInclusive(1, 12);
    var ruby = getRandomIntInclusive(1, 12);
    var emerald = getRandomIntInclusive(1, 12);
    var newScore; 

//create variable for the random computer score
var compScore = getRandomIntInclusive(19, 120);

 /* yourScore = document.getElementbyId("yourScore");
yourScore.innerHTML ++;
}*/

$(document).ready(function(){
  $("#computerScore").html(compScore);

$("#diamond").on("click", function(event) {
  newScore = diamond + yourScore
    //var newScore = diamond + yourScore;
    $("#yourScore").html(newScore);
    console.log(newScore); 
    if (newScore === compScore ){
      $("yourScore").html("You win!");
  reset();
} else if (newScore < compScore) {
     $("yourScore").html("Keep trying!");
  
} else {
  
  reset();
}

  });

$("#emerald").on("click", function(event) {
     newScore = +emerald + +yourScore; 
    $("#yourScore").html(newScore);
    console.log(emerald, yourScore);
 if (newScore === compScore ){
      $("yourScore").html("You win!");
  reset();
} else if (newScore < compScore) {
     $("yourScore").html("Keep trying!");
  
} else {
  reset();

}


  });

$("#pearl").on("click", function(event) {
     newScore = pearl + yourScore;
    console.log(newScore); 
    $("#yourScore").html(newScore);

    if (newScore === compScore ){

      $("yourScore").html("You win!");
        reset();
} else if (newScore < compScore) {
     $("yourScore").html("Keep trying!");
  
} else 
  {
  reset();
}

  });

  $("#ruby").on("click", function(event) {
    newScore = ruby + yourScore;
    console.log(newScore); 
    $("#yourScore").html(newScore);

    if (newScore === compScore ){
      $("yourScore").html("You win!");
  reset();

} else if (newScore < compScore) {
     $("yourScore").html("Keep trying!");

} else 
  {
  reset();
}
  
});

  });

