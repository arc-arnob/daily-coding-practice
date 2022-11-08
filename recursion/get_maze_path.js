const get_maze_path = (sr, sc, dr, dc) => {
    // Base case
    if(sr > dr || sc > dc) return;

    if( sr === dr && sc === dc) return [""];
    // Recursion
    const horizontal_paths = get_maze_path(sr, sc + 1, dr, dc);
    const vertical_paths = get_maze_path(sr + 1, sc, dr, dc);

    const paths = [];

    for(i in horizontal_paths){
        paths.push('h'+horizontal_paths[i]);
    }

    for(i in vertical_paths){
        paths.push('v' + vertical_paths[i]);
    }
    return paths;
}

console.log("Maze Paths: ", get_maze_path(0, 0, 10, 10)); // Zero index based