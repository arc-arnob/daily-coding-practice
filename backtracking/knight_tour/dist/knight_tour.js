var printKnightTour = function (chess, r, c, upComingMove) {
    // if (upComingMove == chess.length * chess.length) {
    //     console.log(upComingMove + ' ', r, c);
    // }
    if (upComingMove == chess.length * chess.length) {
        // console.log(upComingMove + ' ', r, c);
        // chess[r][c] = upComingMove;
        displayChessBoard(chess);
        // chess[r][c] = 0;
        return;
    }
    if (r < 0 || c < 0 || r >= chess.length || c >= chess.length || chess[r][c] != 0) {
        return;
    }
    // if (upComingMove == chess.length * chess.length) {
    //     console.log(upComingMove + ' ', r, c);
    //     chess[r][c] = upComingMove;
    //     displayChessBoard(chess);
    //     chess[r][c] = 0;
    //     return;
    // }
    chess[r][c] = upComingMove;
    // Travese all routes
    printKnightTour(chess, r - 2, c + 1, upComingMove + 1);
    printKnightTour(chess, r - 1, c + 2, upComingMove + 1);
    printKnightTour(chess, r + 1, c + 2, upComingMove + 1);
    printKnightTour(chess, r + 2, c + 1, upComingMove + 1);
    printKnightTour(chess, r + 2, c - 1, upComingMove + 1);
    printKnightTour(chess, r + 1, c - 2, upComingMove + 1);
    printKnightTour(chess, r - 1, c - 2, upComingMove + 1);
    printKnightTour(chess, r - 2, c - 1, upComingMove + 1);
    chess[r][c] = 0;
};
var displayChessBoard = function (chess) {
    for (var i = 0; i < chess.length; i++) {
        for (var j = 0; j < chess[i].length; j++) {
            process.stdout.write(chess[i][j] + ' '); // Using process.stdout.write to print without newline
        }
        console.log(); // Move to the next line after printing a row
    }
    console.log("******");
};
var createChess = function (n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push(Array(n).fill(0));
    }
    return matrix;
};
var chess = createChess(5);
printKnightTour(chess, 0, 0, 0);
