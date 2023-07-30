"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var floodFillPath = function (maze, sr, sc, asf) {
    if (sr < 0 || sc < 0)
        return;
    if (sr > maze.length - 1 || sc > maze[0].length - 1 || maze[sr][sc] == 1)
        return;
    if (sr == maze.length - 1 && sc == maze[0].length - 1) {
        console.log(asf);
        return;
    }
    if (maze[sr][sc] == 2)
        return;
    maze[sr][sc] = 2;
    floodFillPath(maze, sr - 1, sc, asf + 't');
    floodFillPath(maze, sr + 1, sc, asf + 'd');
    floodFillPath(maze, sr, sc - 1, asf + 'l');
    floodFillPath(maze, sr, sc + 1, asf + 'r');
    maze[sr][sc] = 0;
};
var getDaInput = function () {
    // Assuming you want to take input from the user for maze dimensions and walls.
    var rl = readline_1["default"].createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("Enter the number of rows:");
    var rows = 0;
    rl.on('line', function (input) {
        rows = parseInt(input, 10);
        if (!isNaN(rows)) {
            console.log("Enter the number of columns:");
        }
        else {
            console.log("Invalid input. Please enter a valid number.");
        }
    });
    rl.on('line', function (input) {
        var columns = parseInt(input, 10);
        if (!isNaN(columns)) {
            console.log("Enter the maze layout (0 for path, 1 for wall):");
            var maze_1 = [];
            rl.on('line', function (input) {
                var row = input.split('').map(function (val) { return parseInt(val, 10); });
                maze_1.push(row);
                if (maze_1.length === rows) {
                    rl.close();
                    floodFillPath(maze_1, 0, 0, "");
                }
            });
        }
        else {
            console.log("Invalid input. Please enter a valid number.");
        }
    });
    return [];
};
getDaInput();
