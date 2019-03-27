
//Global Variables


//Crystal variables

var crystal = {

    lightBlue: 
    {
        name: "light-blue",
        value: 0
    },
    smallest: 
{
    name: "smallest",
    value: 0
},
yellow:
{
    name: "yellow",
    value: 0
},
darkPurple:
{
    name: "dark-purple",
    value: 0
}

};

//Scores (current and target)

var currentScore = 0;

var targetScore = 0;


//Wins and Losses

var wins = 0;

var losses = 0;


//Functions


//Function to get random numbers

var getRandom = function(min, max) {

   return Math.floor(Math.random() * (max - min + 1)) + min;



};


//Starts and restarts the game

var startGame = function() {


    //reset current score to 0
    currentScore = 0;

    //set new target score to random number between 19 and 120
    targetScore = getRandom(19, 120);


    //set crystal values to random numbers between 1 and 12
    crystal.lightBlue.value = getRandom(1, 12);
    crystal.smallest.value = getRandom(1, 12);
    crystal.darkPurple.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    //change HTML to reflect changes
    $("#target-number").text(targetScore);
    $("#currentScore").text(currentScore);





};


//check if user won or lost and reset the game

var checkWin = function() {

    if (currentScore > targetScore) {

        
        losses++;

        $("#lossesNumber").text(losses);

        alert("You lose!")

        startGame();




    }

    else if (currentScore === targetScore) {


        wins++;

        $("#winsNumber").text(wins);

        alert("You win!")

        startGame();

    }

};


//Respond to clicks on the crystals

var addValues = function(clickedCrystal) {


    currentScore += clickedCrystal.value;

    $("#currentScore").text(currentScore);

    checkWin();


};



//Main Process


//starts game the first time
startGame();

$("#lightBlue").click(function() {

    addValues(crystal.lightBlue);
});

$("#yellow").click(function() {

    addValues(crystal.yellow);
});

$("#smallest").click(function() {


    addValues(crystal.smallest);
});

$("#darkPurple").click(function() {

    addValues(crystal.darkPurple);
});