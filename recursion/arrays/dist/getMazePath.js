function getMaxPath(sr, sc, dr, dc, pathSoFar) {
    if (sr > dr || sc > dc)
        return;
    if (sr === dr && sc === dc) {
        console.log(pathSoFar);
        return;
    }
    getMaxPath(sr + 1, sc, dr, dc, 'h' + pathSoFar);
    getMaxPath(sr, sc + 1, dr, dc, 'v' + pathSoFar);
}
getMaxPath(1, 1, 3, 3, '');
