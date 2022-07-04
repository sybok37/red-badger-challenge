import { expect } from 'chai';
import { rotateRobot, moveRobot } from './robot-actions';

describe('rotateRobot', () => {

    it('should return orientation of the robot from N after R action', () => {
        const expected = "E";
        const actual = rotateRobot("N", "R");

        expect(actual).to.equal(expected);   
    });

    it('should return orientation of the robot from S after R action', () => {
        const expected = "W";
        const actual = rotateRobot("S", "R");

        expect(actual).to.equal(expected);   
    });

    it('should return orientation of the robot from N after L action', () => {
        const expected = "W";
        const actual = rotateRobot("N", "L");

        expect(actual).to.equal(expected);   
    });

    it('should return orientation of the robot from S after L action', () => {
        const expected = "E";
        const actual = rotateRobot("S", "L");

        expect(actual).to.equal(expected);   
    });
});

describe('moveRobot', () => {

    it('should return new coordinates when F action and N direction are passed in', () => {
        const expected = [0, 1];
        const actual = moveRobot("N", "F", 0, 0);

        expect(actual).to.deep.equal(expected);   
    });

    it('should return new coordinates when F action and E direction are passed in', () => {
        const expected = [5, 5];
        const actual = moveRobot("E", "F", 4, 5);

        expect(actual).to.deep.equal(expected);   
    });

    it('should return new coordinates when F action and S direction are passed in', () => {
        const expected = [2, 3];
        const actual = moveRobot("S", "F", 2, 4);

        expect(actual).to.deep.equal(expected);   
    });

    it('should return new coordinates when F action and W direction are passed in', () => {
        const expected = [-1, 3];
        const actual = moveRobot("W", "F", 0, 3);

        expect(actual).to.deep.equal(expected);   
    });

});