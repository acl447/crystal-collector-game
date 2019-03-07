$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);

    $("#target-number").text(targetNumber);

    var targetReached = false;

    var wins = 0;

    var totalScore = 0;

    var losses = 0;

    var counter1 = 0;

    function reset() {

        counter1 = 0;
        totalScore = 0;

        $("#totalScore").text(totalScore);

        var targetNumber = Math.floor(Math.random() * 102) + 19;
        
        console.log(targetNumber);

        $("#target-number").text(targetNumber);


    }

    var randomNumber = Math.floor(Math.random() * 12) + 1;

    console.log(randomNumber);


    $("#crystal-1").on("click", function () {




        if (targetNumber > counter1) {

            counter1 += randomNumber;

            console.log(counter1);

            totalScore = counter1;

            console.log(totalScore);

            $("#totalScore").text(totalScore);

        }

        else if (targetNumber === counter1) {

            console.log(counter1);

            targetReached = true;

            alert("You won!");

            wins++;

            $("#winsNumber").text(wins);

            reset();


        } else if (targetNumber < counter1) {

            console.log(counter1);

            targetReached = false;


            alert("You lost :(. Try again!");

            losses++;

            $("#lossesNumber").text(losses);

            reset();

        }


    });


















});

