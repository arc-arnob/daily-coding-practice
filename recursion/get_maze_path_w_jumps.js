const getMazePathJumps = (sr, sc, dr, dc) => {

    // Base Case:
    if(sr> dr || sc > dc) return;

    if(sr === dr && sc === dc) return [""];
    const paths = [];
    for(let move = 1; move <= dc - sc; move++){
        const h_paths = getMazePathJumps(sr, sc + move, dr, dc);
        for( i in h_paths){
            paths.push('h' + move + h_paths[i]);
        }
    }

    for(let move = 1; move <= dr - sr; move++){
        const v_paths = getMazePathJumps(sr + move, sc, dr, dc);
        for( i in v_paths){
            paths.push('v' + move + v_paths[i]);
        }
    }

    for(let move = 1; move <= dc - sc &&  move <= dr - sr ; move++){
        const d_paths = getMazePathJumps(sr + move, sc + move, dr, dc);
        for( i in d_paths){
            paths.push('d' + move + d_paths[i]);
        }
    }

    return paths;

}


console.log("All Paths: ", getMazePathJumps(1, 1, 2, 2));