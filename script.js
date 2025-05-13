let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return "It's a tie!";
 }
else if (
(playerSelection === 'rock' && computerSelection === 'scissors') ||
(playerSelection === 'paper' && computerSelection === 'rock') ||
(playerSelection === 'scissors' && computerSelection === 'paper')
) {
playerScore++;
return `You win! ${playerSelection} beats ${computerSelection}`;

 } else {
computerScore++;
return `You lose! ${computerSelection} beats ${playerSelection}`;
 }    
}

function updateUI(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultText = playRound(playerSelection, computerSelection);

resultDiv.textContent = resultText;
scoreDiv.textContent = `Score - You: ${playerScore} | Computer: ${computerScore}`;
if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? 'You win the game!' : 'Computer wins the game!';
resultDiv.textContent = winner;

document.querySelectorAll('button').forEach(btn => btn.disabled = true);
 }
}

document.getElementById('rock').addEventListener('click', ()=> updateUI('rock'));
document.getElementById('paper').addEventListener('click', () => updateUI('paper'));
document.getElementById('scissors').addEventListener('click', () => updateUI('scissors'));
