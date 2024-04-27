//We will be using 2 variables one to track user score and one to track computer's score.

let userScore = 0;
let compScore = 0;

//we need to access on which img the user or the comp is clicking on
//we need to access all our choices

const choices = document.querySelectorAll(".choice");

//to display msg on the play your move box we need to access the msg box
const msg = document.querySelector("#msg");

//To display the score on screen we will access their id's

const userScoreVal = document.querySelector("#user-score");
const compScoreVal = document.querySelector("#comp-score");

//we will add an event listener on div choices itself so that when any choice is "clicked"
//some action is performed.

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=> {

        //we will access the each div with their id
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playGame(userchoice); //this will help us track computer's choice and also update the score.
    });
});


//to play the game
const playGame = (userchoice)=>{
    // console.log("user choice = ",userchoice);
    //generate computer's choice
    const compchoice = gencompChoice();
    // console.log("comp choice = ", compchoice);


    //conditions
    if(userchoice === compchoice){
        drawGame();
    }else{
        //We will track if userwins

        let userWins = true;
        if(userchoice === "rock"){
            //now computer has 2 choices scissors,paper
            //if compchoice is paper user loses else if compchoice is scissors then user wins
            userWins = compchoice === "paper" ? false : true;
        }  else if(userchoice === "paper"){
            //now computer has 2 choices rock,scissors
            //if compchoice is rock then user wins else if compchoice is scissors then comp wins
            userWins = compchoice === "scissors" ? false : true;
        }  else{
            //now computer has 2 choices rock,paper
            //if compchoice is rock then user loses else if compchoice is paper then comp wins
            userWins = compchoice === "rock" ? false :  true;
        }

        showWinner(userWins,userchoice,compchoice);
    }
};

//to generate the computer's choice
const gencompChoice = () =>{

    //computer should randomly generate any of the 3 choices.
    //hence we will store all 3 options in an array

    let options = ["rock","paper","scissors"];

    //JS has a function called random which will randomly generate values between 0 and 1

    //In JS it is not possible randomly generate strings hence we will generate the numbers
    //so that they act as index for our options array.


    //we have 3 choices hence indexes will be 0,1,2

    //now math.random() will generate numbers between 0 and 1 to generate numbers between 0 and 2
    // we can multiply math.random() * 3 this will generate random numbers between 0,1,2.
    //numbers generate are decimal numbers.


    //to get whole numbers we have another property in JS that is Math.floor(Math.random() * 3);
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};


//If the game was a tie
const drawGame = ()=> {
    msg.innerText = "Game was a Draw, Play Again!";
    //if the game is a draw then background color will be the same
    msg.style.backgroundColor = "#081831";
};

//To display the winner

const showWinner = (userWins,userchoice,compchoice) =>{
    if(userWins){
        userScore++;
        userScoreVal.innerText = userScore;
        //To display msg on the play your move box
        msg.innerText = `You Won! Your ${userchoice} beats ${compchoice}`;
        //After we won we will change the background color of the msg
        msg.style.backgroundColor  = "green";
    }else{
        compScore++;
        compScoreVal.innerText = compScore;
        //To display msg on the play your move box
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};