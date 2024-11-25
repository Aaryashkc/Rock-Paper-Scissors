
  //variable for our score
  // const score={
  //   wins: 0,
  //   losses: 0,
  //   ties: 0
  // };

  let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
  };

  updateScore();
  
  // if (!score){
  //   score = {
  //     wins:0,
  //     losses:0,
  //     ties:0
  //   };
  // }

  //main code to run this game here.
  function playGame(playerMove){
    const computerMove = pickComputerMove();
    //FOR POP UP

    let result ='';
    
    if (playerMove === 'scissors'){
        if(computerMove === 'rock'){
        result = 'You lose, Better luck next time.'
        } else if (computerMove === 'paper'){
        result = 'The crown is yours this time.'
        } else if (computerMove === 'scissors'){
        result = 'Looks like we are evenly matched.'
        } 
 
    } else if (playerMove === 'paper'){
      
      if(computerMove === 'rock'){
      result = 'The crown is yours this time.'
      } else if (computerMove === 'paper'){
      result = 'Looks like we are evenly matched.'
      } else if (computerMove === 'scissors'){
      result = 'You lose, Better luck next time.'
      } 

    } else if (playerMove === 'rock'){
      
      if(computerMove === 'rock'){
      result = 'Looks like we are evenly matched.'
      } else if (computerMove === 'paper'){
      result = 'You lose, Better luck next time.'
      } else if (computerMove === 'scissors'){
      result = 'The crown is yours this time.'
      } 

    }

    // for counting result
    if(result === 'The crown is yours this time.'){
      score.wins += 1;
    }else if(result === 'You lose, Better luck next time.'){
      score.losses += 1;
    } else if (result === 'Looks like we are evenly matched.'){
      score.ties += 1;
    }

    //save in local storage
    localStorage.setItem('score', JSON.stringify(score));

    //update

    updateScore();

    document.querySelector('.result-view').innerHTML = result;

    document.querySelector('.result-moves').innerHTML = `  You 
    <img src="image/${playerMove}-emoji.png" class="rocky">
    <img src="image/${computerMove}-emoji.png" class="rocky">
    Computer`;

  }

  //function to update the score or reuse it

function updateScore(){
  document.querySelector('.score-result').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
    //GENERATES RANDOM NUMS BELOW 1
    function pickComputerMove(){
          
    const randomNUMBER = Math.random();

    let computerMove = '';

    if (randomNUMBER >=0 && randomNUMBER < 1/3) {
      computerMove = 'rock';
    } else if (randomNUMBER >=1/3 && randomNUMBER < 2/3){
      computerMove = 'paper';
    } else if(randomNUMBER >=2/3 && randomNUMBER < 1){
      computerMove = 'scissors';
    }
    return computerMove;
    }
