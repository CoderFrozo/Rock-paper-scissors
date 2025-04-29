function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  console.log(getComputerChoice()); // Çıktıyı test etmek için

function getHumanChoice() {
const userChoice = prompt("Please enter 'rock', 'paper', or 'scissors':");
return userChoice.toLowerCase();
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
return "It's a tie!";
    }
if (
(humanChoice === "rock" && computerChoice === "scissors") ||
(humanChoice === "scissors" && computerChoice === "paper") ||
(humanChoice === "paper" && computerChoice === "rock")
) {
 return "You win!";
 } else {
 return "You lose!";
 }
 }
let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice,computerChoice);

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);

    if(result === "You win!"){
        humanScore++;
    } else if(result === "You lose!") {
        computerScore++;
    }
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`\n--- Round ${i} ---`);
        playRound();
    }
    console.log(`\nFinal Score: You ${humanScore} - Computer ${computerScore}`);

    if(humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
    console.log("It's a tie game");
    }
}