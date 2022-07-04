import { generateGrid } from "./generate-grid";
import { moveRobot, rotateRobot } from "./robot-actions";

export const getRobotStartToInstructions = inputLines => {
    return inputLines.reduce((acc, elem, index, arr) => {
        if (index !== arr.length - 1 && elem !== "" && arr[index + 1] !== "") {
            return [...acc, {start: elem, ins: arr[index + 1]}];
        }
        return acc;
    }, ([]));
};

export const martianRobots = input => {
    const inputLines = input.split("\n");
    const firstLineArgs = inputLines[0].split(" ");
    const gridXTopRight = parseInt(firstLineArgs[0]);
    const gridYTopRight = parseInt(firstLineArgs[1]);
    const martianGrid = generateGrid(gridXTopRight + 1, gridYTopRight + 1);
    let output = "";

    const robotsArr = getRobotStartToInstructions(inputLines.slice(1));

    robotsArr.forEach((robot) => {
        const startArgs = robot.start.split(" ")
        const startX = parseInt(startArgs[0]);
        const startY = parseInt(startArgs[1]);
        const direction = startArgs[2];
        
        const finalPositionObj = robot.ins.split("").reduce((acc, action) => {
            if (!acc.isLost) {
                if (action === "F") {
                    const newPosition = moveRobot(acc.direction, action, acc.currentX, acc.currentY);
                    const martianGridY = martianGrid.length - newPosition[1]; 

                    if (martianGrid[newPosition[0]] === undefined || martianGrid[newPosition[0]][martianGridY] === undefined) {
                        return {...acc, isLost: true};
                    } else {
                        return {...acc, currentX: newPosition[0], currentY: newPosition[1]}
                    }
                } else {
                    const newDirection = rotateRobot(acc.direction, action);
                    return {...acc, direction: newDirection};
                }
            }
            return acc;
        }, ({ currentX: startX, currentY: startY, direction: direction, isLost: false}));

    });


};