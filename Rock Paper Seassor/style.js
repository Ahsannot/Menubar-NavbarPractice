let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");

let userScortxt = document.querySelector("#user-score");
let compScortxt = document.querySelector("#comp-score");



let selectChoice = document.querySelectorAll(".choice");
// console.log(selectChoice);
selectChoice.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log(`${userChoice} was selected`);
        playGame(userChoice);
    });
});

let playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    let computerChoice = genComputerChoice();
    console.log(`Comp choice = ${computerChoice}`);

    if (userChoice == computerChoice ){
        drawGame(userChoice,computerChoice);
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            if(computerChoice == "paper"){
                userWin = false;
                if (computerChoice == "scissors") {
                    userWin = true;
                }
            }
        } else if(userChoice == "paper"){
            if(computerChoice == "scissors"){
                userWin = false;
                if (computerChoice == "rock") {
                    userWin = true;
                }
            }
        } else {
            if(computerChoice == "rock"){
                userWin = false;
                if (computerChoice == "paper") {
                    userWin = true;
                }
            }
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

let genComputerChoice = () => {
    let option = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

let drawGame = (userChoice, computerChoice) => {
    console.log("Game was draw.");
    msg.innerText = `Game was draw. You select ${userChoice} V/S Comp select ${computerChoice} Play again!`;
    msg.style.backgroundColor =   "Black";
};

let showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScortxt.innerText = userScore;
        console.log(`You Win!.`);
        msg.innerText = `You Win!. You select ${userChoice} V/S Comp select ${computerChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScortxt.innerText = compScore;
        console.log("You Lose.");
        msg.innerText = `You Lose. You select ${userChoice} V/S Comp select ${computerChoice}`;
        msg.style.backgroundColor = "Red";
    }
};