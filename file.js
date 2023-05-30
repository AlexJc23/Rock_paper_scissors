

//get a random selection from computer
function getComputerChoice() {
    let option = Math.floor(Math.random() *  3 );
    
    if (option === 0) {
       return "rock"
    };
     if (option === 1 ) {
       return "paper"
    };
     if (option === 2) {
       return "scissors"
    };
  }
  //allow user to pick between rock, paper, and scissors
  function userAnswer() {
    let userAnswer = prompt("Choose Rock, Paper or Scissors...");
    return userAnswer.toLowerCase() 
  };
  
  //play a single round of rock, paper, scissors
  function playRound() {
    const playerSelection = userAnswer();
  const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      return alert('Its a draw')
    } 
     else if  ((playerSelection === 'rock' && computerSelection === "scissors") || 
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
       playerScore++
      return alert('You Won this round')
     }  {
      computerScore++
      return alert('You lost this Round')
    }
  };
  
  
  //scorekeeping
  let playerScore = 0;
  let computerScore = 0;
  
  function scoreKeep() {
    if (playerScore > computerScore) {
      alert('You won the match! ' + "Your score " + playerScore + " " + 'Computer Score ' + computerScore)
      
    } else if (computerScore > playerScore) {
      alert('Computer Won the match! ' + "Your score " + playerScore + " " + 'Computer Score ' + computerScore)
    }
   };
  
  //Full game of rock, paper, scissors with 5 rounds
  for(let i = 0; i < 5; i++) {
    console.log(playRound())
  };
  //Who won and the score
  console.log(scoreKeep())