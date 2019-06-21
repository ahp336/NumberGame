console.log('link');
$(document).ready(function(){
    
    
    // Golbal Variable
    var yourScore = 0;
    var targetScore = 0;
    var wins = 0;
    var losses = 0;
    var blue = 0;
    var red = 0;
    var green = 0
    var orange = 0;


    // Functions -------------------------------------------------------------

    // Funtion for random number generate
    function randomNum(min,max){
        return Math.floor(Math.random() * max) + min;
    }

    // Function of making the game run
    function startGame(){
        yourScore = 0;
        targetScore = randomNum(19,120);
        
        red = randomNum(1,12);
        green = randomNum(1,12);
        orange = randomNum(1,12);
        blue = randomNum(1,12);

        $("#YZ").html(targetScore);
        $("ZX").html(yourScore);

        console.log("-----------------------");
        console.log("Target Score " + targetScore);
        console.log("Red " + red);
        console.log("Green " + green);
        console.log("Blue " + blue);
        console.log("Orange " +  orange);
        console.log("-----------------------");

    }
    // Function for adding value to yourscore
    function addValue(x){
        yourScore = yourScore + x ;

        $("#ZX").html(yourScore);
        
        checkScore();
        
        console.log("Your Score " + yourScore);
    }

    // Wins and Losses funtion with counter
    function checkScore(){
        
        if(yourScore > targetScore) {
            losses++;
            $("#L").html(losses);
            alert("Sorry,You Lost!")

            startGame()
        }

        if(yourScore == targetScore){
            wins++
            $("#W").html(wins);
            alert("Congratulation, You Won!");

            startGame();

        }

        
    }

    // ----------------------------------------------------------------------------------
    // Function execute
    
    startGame();

    $("#red").click(function(){
        addValue(red);
            
    });

    $("#green").click(function(){
        addValue(green);
    });

    $("#blue").click(function(){
        addValue(blue);
    });

    $("#orange").click(function(){
        addValue(orange);
    });


});
