"use strict";
var moves;
(function (moves) {
    moves["Rock"] = "rock";
    moves["Paper"] = "paper";
    moves["Scissors"] = "scissors";
})(moves || (moves = {}));
var results;
(function (results) {
    results["Winner1"] = "Player 1 won!";
    results["Winner2"] = "Player 2 won!";
    results["Draw"] = "Draw!";
})(results || (results = {}));
const RockPapperScissors = (player1, player2) => {
    if (player1 === player2)
        return results.Draw;
    switch (player1.toString()) {
        case moves.Rock:
            if (player2.toString() === moves.Paper)
                return results.Winner2;
            break;
        case moves.Paper:
            if (player2.toString() === moves.Scissors)
                return results.Winner2;
            break;
        case moves.Scissors:
            if (player2.toString() === moves.Rock)
                return results.Winner2;
            break;
        default:
            return results.Winner1;
    }
    return results.Winner1;
};
console.log(RockPapperScissors('scissors', 'scissors'));
