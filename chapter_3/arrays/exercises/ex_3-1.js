let ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

// Here's one way your game could go:
ticTacToe[1][1] = "X";
ticTacToe[0][0] = "O";
ticTacToe[2][0] = "X";
ticTacToe[0][2] = "O";
ticTacToe[0][1] = "X";
ticTacToe[2][2] = "O";
ticTacToe[2][1] = "X";
ticTacToe;
// (3) [Array(3), Array(3), Array(3)]
// 0: (3) ['O', 'X', 'O']
// 1: (3) ['', 'X', '']
// 2: (3) ['X', 'X', 'O']

// X wins!