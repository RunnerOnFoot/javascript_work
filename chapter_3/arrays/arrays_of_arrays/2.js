let ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

ticTacToe;
// (3) [Array(3), Array(3), Array(3)]

ticTacToe[0][2] = "X";
// "X"

ticTacToe;
// (3) [Array(3), Array(3), Array(3)]
// 0: (3) ['', '', 'X']
// 1: (3) ['', '', '']
// 2: (3) ['', '', '']
// length: 3
// [[Prototype]]: Array(0)