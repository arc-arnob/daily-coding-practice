const printFloodPaths = (maze, currentRow, currentColumn, paths) => {
    // 0 -> Mark Visited will be -2
    // 1 -> Mark Visited shall be -1
    if(currentColumn < 0 || currentRow < 0) return;
    if(currentColumn >= maze[0].length || currentRow >= maze.length) return;

    if(maze[currentRow][currentColumn] === 1 || maze[currentRow][currentColumn] === -2) return;

    if(currentColumn === (maze[0].length -1) && currentRow === (maze.length - 1)){
        console.log(paths);
        return;
    }

    maze[currentRow][currentColumn] = -2;

    printFloodPaths(maze, currentRow -1, currentColumn,  paths + "t");
    printFloodPaths(maze, currentRow , currentColumn -1, paths + "l" );
    printFloodPaths(maze, currentRow + 1, currentColumn, paths + "d" );
    printFloodPaths(maze, currentRow , currentColumn + 1, paths + "r");

    maze[currentRow][currentColumn] = 0;
}

const getInput = (n) => {
    return [
            [0,0,0,0], 
            [1,0,1,0], 
            [0,0,0,0],
            [0,0,0,0]
        ];
}
 
printFloodPaths(getInput(), 0, 0, "");