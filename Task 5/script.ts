/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

type Game = 'rock' | 'paper' | 'scissors'; 

enum moves {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors'
}

enum results {
  Winner1 = "Player 1 won!",
  Winner2 = "Player 2 won!",
  Draw = "Draw!"
}

const RockPapperScissors = (player1: Game, player2: Game): string =>
  {
    if (player1 === player2)
      return results.Draw;
  
    switch (player1.toString()) 
    {
      case moves.Rock:
        if (player2.toString() === moves.Paper) return results.Winner2;
        break
      case moves.Paper:
        if (player2.toString() === moves.Scissors) return results.Winner2;
        break
      case moves.Scissors:
        if (player2.toString() === moves.Rock) return results.Winner2;
        break
      default:
        return results.Winner1;
    }
    return results.Winner1;
  }
  

  console.log( RockPapperScissors('scissors', 'scissors') );
  