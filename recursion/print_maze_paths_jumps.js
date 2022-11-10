const printMazePathsWithJumps = (
    sourceColumn, sourceRow, destinationColumn, destinationRow, paths
) => {
    if(sourceColumn === destinationColumn && sourceRow === destinationRow){
        console.log(paths);
        return;
    }
    if(sourceColumn > destinationColumn || sourceRow > destinationRow) return;

    // Loop at each Possible Move
    for(let horizontalMove = 1; horizontalMove <= destinationColumn; horizontalMove++){
        printMazePathsWithJumps(sourceColumn + horizontalMove, sourceRow, destinationColumn, destinationRow, "h" + horizontalMove + paths);
    }
    for(let verticalMove = 1; verticalMove <= destinationRow; verticalMove++){
        printMazePathsWithJumps(sourceColumn , sourceRow + verticalMove, destinationColumn, destinationRow, "v" + verticalMove + paths);
    }
    for(let diagonalMove = 1; diagonalMove <= destinationColumn && diagonalMove <= sourceRow; diagonalMove++){
        printMazePathsWithJumps(sourceColumn + diagonalMove, sourceRow + diagonalMove, destinationColumn, destinationRow, "d" + diagonalMove + paths);
    }

}

printMazePathsWithJumps(1,1,2,2,"");