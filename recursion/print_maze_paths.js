const printMazePath= (sourceRow, sourceColumn, destinationRow, destinationColumn, paths) => {
    if(sourceRow === destinationRow && sourceColumn === destinationColumn){
        console.log(paths);
        return;
    }
    if(sourceColumn > destinationColumn || sourceRow > destinationRow) return;

    printMazePath(sourceRow, sourceColumn + 1, destinationRow, destinationColumn, "h" + paths);
    printMazePath(sourceRow + 1, sourceColumn, destinationRow, destinationColumn, "v" + paths);
}

printMazePath(1,1, 3, 3, "");

// Time Taken: 3 mins - No Reference