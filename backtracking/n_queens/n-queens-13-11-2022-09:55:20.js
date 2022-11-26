const nQueens = (board, places, row) => {
    
    if(row === board.length){
        console.log(places);
        return;
    }

    for(let col = 0; col <= board[0].length; col++){
        if(board[row][col] === 0 && isQueenPlaceValid(board, row, col)){
            board[row][col] = 1;
            nQueens(board, places + row + '-' + col + ',', row + 1);
            board[row][col] = 0;
        }
    }   
}

const isQueenPlaceValid = (chess, row, col) => {
    for(let i = row -1, j = col -1; i >=0 && j >= 0; i--, j--){
        if(chess[i][j] === 1){
            return false;
        }
    }
    for(let i = row -1, j = col; i >=0; i--){
        if(chess[i][j] === 1){
            return false;
        }
    }
    for(let i = row -1, j = col + 1; i >=0 && j < chess.length; i--, j++){
        if(chess[i][j] === 1){
            return false;
        }
    }
    for(let i = row,j = col -1; j >= 0; j--){
        if(chess[i][j] === 1){
            return false;
        }
    }
    return true
}
let board = Array(4).fill(Array(4).fill(0))
nQueens(board, "", 0);