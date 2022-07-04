export const rotateRobot = (currentDirection, action) => {
    const directions = ["N", "E", "S", "W"];
    const lastDirectionIndex = directions.length - 1;
    const currentDirIndex = directions.indexOf(currentDirection);
    const newdirectionIndex = action === "R" ? currentDirIndex + 1 : currentDirIndex - 1;

    return directions[newdirectionIndex < 0 ? lastDirectionIndex : newdirectionIndex % directions.length]; 
};

export const moveRobot = (currentDirection, action, xCoordinate, yCoordinate) => {
    if (action === "F") {
        if (currentDirection === "N") return [xCoordinate, yCoordinate + 1];
        if (currentDirection === "E") return [xCoordinate + 1, yCoordinate];
        if (currentDirection === "S") return [xCoordinate, yCoordinate - 1];
        if (currentDirection === "W") return [xCoordinate - 1, yCoordinate];
    }
};