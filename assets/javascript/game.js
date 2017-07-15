
//There are 4 crystals that have a hidden number, which are randomly generated.
//User does not know what the number is until they click the image.
//User must then keep clicking crystals until their total # equals the target #
//If the user's number exceeds the target #, then user busts.
//If the user's number matches the tearget # exactly, then user wins. 


//Declare global variables
var counter = 0;
var wins = 0;
var losses = 0;
var targetNum = Math.floor(Math.random() * 80) +15;


//The following runs when the page loads
$(document).ready(function() {


//Declaring function that will run when either the win and loss condition is met - assigns random numbers to crystals
function  updateNums() {
	//resets the target #
	targetNum = Math.floor(Math.random() * 80) +30;
	$("#target").html("Target Number: " + targetNum);

	//creates a random number for each crystal and assigns that number to the "data-crystalvalue" attribute of the crystal 
	$("#crystal1").attr("data-crystalvalue", (Math.floor(Math.random() * 9) +1));
	$("#crystal2").attr("data-crystalvalue", (Math.floor(Math.random() * 9) +1));
	$("#crystal3").attr("data-crystalvalue", (Math.floor(Math.random() * 9) +1));
	$("#crystal4").attr("data-crystalvalue", (Math.floor(Math.random() * 9) +1));
}

updateNums();


//when ANY crystal is clicked then run the following function
 $(".crys").on("click", function() {

    //Grabs the data-crystalValue string assigned to the clicked crystal and converts it to an integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    //Assigns that value to the variable crystalValue
    crystalValue = parseInt(crystalValue);
    
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    
    $("#currentCount").html("Current Count: " + counter);


    if (counter == targetNum) {
    	$("#currentCount").html("Current Count: " + counter)
      	alert("You win!");
     	wins++;
      	$("#wins").html("Wins: " + wins);
      	counter = 0;
      	updateNums();
      	$("#currentCount").html("Current Count: " + counter)
    }

    else if (counter >= targetNum) {
    	$("#currentCount").html("Current Count: " + counter)
      	alert("You lose!!");
      	losses++;
      	$("#losses").html("Losses: " + losses);
      	counter = 0;
      	updateNums();
      	$("#currentCount").html("Current Count: " + counter)
    }

});
});