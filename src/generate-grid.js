export const generateGrid = (columns, rows) => {
    const grid = [];

    for (let i = 0; i < rows; i++) {
        grid.push([]);
        
        for (let j = 0; j < columns; j++) {
            const isFirstRow = i === 0;
            const isLastRow = i === rows - 1;
            const isFirstColumn = j === 0;
            const isLastColumn = j === columns - 1;
            const isEdgeOfGrid = isFirstColumn || isLastColumn || isFirstRow || isLastRow;

            grid[i].push(isEdgeOfGrid ? {hasRobotFallenHere: false} : null);
        }
    }

    return grid;
};