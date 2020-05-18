function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return 'paper'
    case 1:
      return 'rock'
    case 2:
      return 'scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock') {
      switch (computerSelection) {
        case 'rock':
          return [0, 'Draw! Rock draws Rock'];
        case 'paper':
          return [2, 'You Lose! Rock loses against Paper'];
        case 'scissors':
          return [1, 'You Win! Rock beats Scissors'];
      }
  } else if (playerSelection == 'paper') {
      switch (computerSelection) {
        case 'rock':
          return [1, 'You Win! Paper beats Rock'];
        case 'paper':
          return [0, 'Draw! Paper draws Paper'];
        case 'scissors':
          return [2, 'You Lose! Paper loses against Scissors'];
      }
  } else if (playerSelection == 'scissors') {
      switch (computerSelection) {
        case 'rock':
          return [2, 'You Lose! Scissors loses against Rock'];
        case 'paper':
          return [1, 'You Win! Scissors beats Paper'];
        case 'scissors':
          return [0, 'You Draw! Scissors draws Scissors'];
      }
  }
}

function getMatchResult(playerWins, computerWins) {
  if (playerWins > computerWins) { 
    return `The winner of the match is Player: ${playerWins} vs ` +
      computerWins;
    } else if (computerWins > playerWins) { 
      return `The winner of the match is Computer: ${computerWins}` + 
        ` vs ${playerWins}`;
    } else if (playerWins == computerWins) {
      return `The match ended in a draw: ${playerWins} vs ` +
        computerWins;
    }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  const resultsDiv = document.querySelector('#results');
  const buttons = document.querySelectorAll('button');
  const scoreDiv = document.querySelector('#score');
  const gameResult = document.querySelector('#gameResult');
  const liveScore = document.createElement('p');
  const matchResult = document.createElement('p');

  scoreDiv.appendChild(liveScore);
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (playerWins < 5 && computerWins < 5) {
        let btnPara = document.createElement('p');

        let computerSelection = computerPlay();
        let playerSelection = button.id;
        let roundResult = playRound(playerSelection, computerSelection);
        let roundWinner = roundResult[1];

        if (roundResult[0] == 1) playerWins += 1;
        else if (roundResult[0] == 2) computerWins += 1;

        btnPara.textContent = roundWinner;
        liveScore.textContent = `Player: ${playerWins} Computer: ${computerWins}`;
        resultsDiv.appendChild(btnPara);
        if (playerWins == 5 || computerWins == 5) {
          gameResult.appendChild(matchResult);
          matchResult.textContent = getMatchResult(playerWins, computerWins);
        }
      }
    });
  });
}
game();