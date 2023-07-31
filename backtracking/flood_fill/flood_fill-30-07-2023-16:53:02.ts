const floodFillPath = (maze: Array<Array<number>>, sr: number, sc: number, asf: String): void => {
    if (sr < 0 || sc < 0) return;
    if (sr > maze.length - 1 || sc > maze[0].length - 1 || maze[sr][sc] == 1) return;
    if (sr == maze.length - 1 && sc == maze[0].length - 1) {
        console.log(asf);
        return;
    }
    if (maze[sr][sc] == 2) return;

    maze[sr][sc] = 2;
    floodFillPath(maze, sr - 1, sc, asf + 't');
    floodFillPath(maze, sr + 1, sc, asf + 'd');
    floodFillPath(maze, sr, sc - 1, asf + 'l');
    floodFillPath(maze, sr, sc + 1, asf + 'r');
    maze[sr][sc] = 0;
}

const getDaInput = (): Array<Array<number>> => {
    return [
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
}

floodFillPath(getDaInput(), 0, 0, "");