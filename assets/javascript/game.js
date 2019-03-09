$(document).ready(function () {



    var wins = 0;

    var totalScore = 0;

    var losses = 0;


    randomNumbers();


    function randomNumbers() {

        var randomNumberArray = [];

        var targetNumber = Math.floor(Math.random() * 102) + 19;
        console.log(targetNumber);

        $("#target-number").text(targetNumber);


        for (var index = 0; index < 4; index++) {
            randomNumberArray.push(Math.floor(Math.random() * 12) + 1);
            console.log(randomNumberArray);

            var crystalOneNumber = randomNumberArray[0];

            var crystalTwoNumber = randomNumberArray[1];

            var crystalThreeNumber = randomNumberArray[2];

            var crystalFourNumber = randomNumberArray[3];

        };





        $("#crystal-1").on("click", function () {






            if (targetNumber > totalScore) {

                totalScore += crystalOneNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }




        });



        $("#crystal-2").on("click", function () {

            console.log(targetNumber);



            if (targetNumber > totalScore) {

                totalScore += crystalTwoNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }




        });

        $("#crystal-3").on("click", function () {

            console.log(targetNumber);


            if (targetNumber > totalScore) {

                totalScore += crystalThreeNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {

                gameOutcome();
            }




        });



        $("#crystal-4").on("click", function () {

            console.log(targetNumber);


            if (targetNumber > totalScore) {

                totalScore += crystalFourNumber;

                console.log(totalScore);

                $("#totalScore").text(totalScore);

            }

            else {



                gameOutcome();
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
    
            randomNumbers();
    
        }

    }


})


