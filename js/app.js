/***********  Srinivasa Raju Datla  **********************
This is a guessing game about me (Srinivasa Raju Datla). 
User is given some simple questions to answer, and at
the end user is given how many they scored correct.
*******************************************************/
"use-strict";

//Get User first and last name
var firstName = prompt("What is your First name?");
var lastName = prompt("What is your Last Name?");

//variables for number of questions and correct answers.
var numberOfQuestion = 0;
var correctAnswers = 0;

//greet the user and check if interested in playing the game.
if (firstName || lastName) {
    //Validating user first name and last name
    nameValidation(firstName, lastName);
    //Check if user wants to play the game
    var guessingGameFlag = prompt("Ready to play a guesssing game about me?");

    //main entry
    if (guessingGameFlag.toUpperCase() === 'Y' || guessingGameFlag.toUpperCase() === 'YES') {
        alert("Lets Rock and Roll!!!!!");

        // 1st Function
        var questionOneTwo = functionQuestionOneTwo();
        var numberOfQuestionOneTwo = questionOneTwo[0];
        var correctAnswersOneTwo = questionOneTwo[1];

        //increment the counter 
        numberOfQuestion = numberOfQuestion + numberOfQuestionOneTwo;
        correctAnswers = correctAnswers + correctAnswersOneTwo;


        //3rd Question
        var favoritePastTime = prompt('Is playing video games my favorite past time?');
        numberOfQuestion++;
        console.log('Favorite Past Time', favoritePastTime);

        if (favoritePastTime.toUpperCase() === 'YES' || favoritePastTime.toUpperCase() === 'Y') {
            correctAnswers++;
            alert("Correct Answer!!!");

            //4th Question
            var favoriteVideoGame = prompt('Is FIFA my favorite video game?');
            numberOfQuestion++;
            console.log('Favorite video game', favoriteVideoGame);

            if (favoriteVideoGame.toUpperCase() === 'Y' || favoriteVideoGame.toUpperCase() === 'YES') {
                correctAnswers++;
                alert("Correct Answer!!!");
            }
        }

        //5th Question
        var favoriteHobby = prompt('Is photography one of my favorite hobby?');
        numberOfQuestion++;
        console.log('Favorite Hobby', favoriteHobby);
        if (favoriteHobby.toUpperCase() === 'Y' || favoriteHobby.toUpperCase() === 'YES') {
            alert("Correct Answer!!!");
        }

        alert("Ok. You have another 3 chances to guess my favorite number. HINT: It's a multiple of 3");
        numberOfQuestion++;

        var attempts = 0;
        while (attempts <= 2) {

            //6th Question
            var favoriteNumber = prompt('What is my favorite number?');
            console.log('Favorite Number Attempt ', attempts, ' is ', favoriteNumber);

            if (parseInt(favoriteNumber) === 9) {
                correctAnswers++;
                alert("BINGO!! You got the number!!!");
                break;
            } else if (parseInt(favoriteNumber) <= 9) {
                alert("Too Low!!!");
            } else if (parseInt(favoriteNumber) >= 9) {
                alert("Too High!!!");
            }
            attempts++;
        }

        //7th Question
        alert("Ok. Can you guess 3 of my favorite places to visit in my bucket list. HINT: 90% of them are in Europe");
        numberOfQuestion++;
        var getFavoritePlacesFromUser = 0;
        var favoritePlaceUserArray = [];
        var favoritePlaces = ["BARCELONA", "VENICE", "ZURICH", "ISTANBUL", "AMSTERDAM", "SANTORINI"];
        var correctAnswersFavoritePlaces = 0;

        while (getFavoritePlacesFromUser <= 2) {
            favoritePlaceUserArray.push(prompt('Enter favorite place  ' + (getFavoritePlacesFromUser + 1)));
            console.log(favoritePlaceUserArray[getFavoritePlacesFromUser]);
            getFavoritePlacesFromUser++;
        }

        //loop through the favorite places and check answer
        for (var i = 0; i < favoritePlaceUserArray.length; i++) {
            for (var j = 0; j <= favoritePlaces.length; j++) {
                if (favoritePlaceUserArray[i].toUpperCase() === favoritePlaces[j]) {
                    correctAnswersFavoritePlaces++;
                }
            }
        }

        //increment total correct answers id user has provided all 3 correctly
        if (correctAnswersFavoritePlaces === 3) {
            alert("BINGO!!! You got all the 3 correct")
            correctAnswers++;
        } else {
            alert("You got " + correctAnswersFavoritePlaces + " favorite places correct out of 3 correct!!!");
        }
        alert('Thanks for playing the guessing game!! You got  ' + correctAnswers + ' out of ' + numberOfQuestion + ' questions correct.');
    } else {
        alert("Thanks and appreciate your time searching for this guessing game!!!");
    }
} else{
    alert("Thanks for visiting my home page, Enjoy the day");
}

/* First Name and Last Name Validations for alerting welcome */

function nameValidation(firstName, lastName){
    firstName= firstName.toUpperCase()
    lastName = lastName.toUpperCase()
    
   if((!!firstName) && (!!lastName)){
        alert('Greetings ' + firstName + ' ' + lastName + '!!! ' + 'Welcome to my small guessing game!!!!');
    } else {
        if (!!lastName){
            alert('Greetings ' + lastName + '!!! ' + 'Welcome to my small guessing game!!!!');
        }
        if (!!firstName)
        {
            alert('Greetings ' + firstName + ' ' + '!!! ' + 'Welcome to my small guessing game!!!!');
        }
    }
}

// Function for Question one and two
// Returns the number of questions and correct answers as array
function functionQuestionOneTwo() {
    var numberOfQuestion = 0;
    var correctAnswers = 0;

    //1st question
    var homeCountry = prompt('Is my home country India?');
    numberOfQuestion++;
    console.log('Home Country:', homeCountry);

    if (homeCountry.toUpperCase() === 'Y' || homeCountry.toUpperCase() === 'YES') {
        //Increment correct answer counter 
        correctAnswers++;
        alert("Correct Answer!!!");

        //2nd Question
        var homeCountryCity = prompt("Guess my home city - Hyderabad, Delhi, Mumbai, Goa ?");
        numberOfQuestion++;
        console.log('Home City:', homeCountryCity);

        if (homeCountryCity.toUpperCase() === "HYDERABAD") {
            correctAnswers++;
            alert("Correct Answer!!!");
        }
    }
    return [numberOfQuestion, correctAnswers];
}
