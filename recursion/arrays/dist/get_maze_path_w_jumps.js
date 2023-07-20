function getMazePathWithJumps(sr, sc, dr, dc, asf) {
    // Base Cases
    if (sr > dr || sc > dc)
        return;
    if (sr == dr && sc == dc) {
        console.log(asf);
        return;
    }
    var move;
    for (move = 1; move <= dr - sr; move++) {
        getMazePathWithJumps(sr + move, sc, dr, dc, 'h' + move + asf);
    }
    for (move = 1; move <= dc - sc; move++) {
        getMazePathWithJumps(sr, sc + move, dr, dc, 'v' + move + asf);
    }
    for (move = 1; move <= dr - sr && move < dc - sc; move++) {
        getMazePathWithJumps(sr + move, sc + move, dr, dc, 'd' + move + asf);
    }
}
getMazePathWithJumps(1, 1, 3, 3, '');
