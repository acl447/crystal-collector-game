$(document).ready(function () {



    var wins = 0;

    var totalScore = 0;

    var losses = 0;

    var hasReset = false;

    var targetNumber = Math.floor(Math.random() * 102) + 19;

    console.log(targetNumber);

    $("#target-number").text(targetNumber);


    var crystalOneNumber = Math.floor(Math.random() * 12) + 1;

    var crystalTwoNumber = Math.floor(Math.random() * 12) + 1;

    var crystalThreeNumber = Math.floor(Math.random() * 12) + 1;

    var crystalFourNumber = Math.floor(Math.random() * 12) + 1;




    $("#crystal-1").on("click", function () {

        if (hasReset === true) {

            var crystalOneNumberReset = Math.floor(Math.random() * 12) + 1;



            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalOneNumberReset;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }

        }

        else {
            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalOneNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }






        }




    });



    $("#crystal-2").on("click", function () {


        if (hasReset === true) {

            var crystalTwoNumberReset = Math.floor(Math.random() * 12) + 1;



            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalTwoNumberReset;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }

        }

        else {

            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalTwoNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }






        }





    });

    $("#crystal-3").on("click", function () {




        if (hasReset === true) {

            var crystalThreeNumberReset = Math.floor(Math.random() * 12) + 1;



            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalThreeNumberReset;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }

        }

        else {

            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalThreeNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }






        }





    });



    $("#crystal-4").on("click", function () {




        if (hasReset === true) {

            var crystalFourNumberReset = Math.floor(Math.random() * 12) + 1;

            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalFourNumberReset;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }

        }

        else {

            if (targetNumber > totalScore) {

                console.log(totalScore);

                totalScore += crystalFourNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }






        }




    });

    function gameOutcome() {


        if (targetNumber === totalScore) {

            console.log("matching numbers");

            alert("You won!");

            wins++;

            $("#winsNumber").text(wins);

            reset();
        }



        else if (targetNumber < totalScore) {

            console.log("totalScore too high");

            alert("You lost :(. Try again!");

            losses++;

            $("#lossesNumber").text(losses);

            reset();

        }

    };




    function reset() {


        totalScore = 0;

        $("#totalScore").text(totalScore);

        hasReset = true;

        var targetNumber = Math.floor(Math.random() * 102) + 19;
        console.log(targetNumber);

        $("#target-number").text(targetNumber);

    }



})


