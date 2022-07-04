import { expect } from 'chai';
import { martianRobots, getRobotStartToInstructions } from './martian-robots';

describe('Martian robots', () => {

    it('should for a given input of instructions for three robots return their final positions', () => {
        const expected = 
            "1 1 E\n" +
            "3 3 N LOST\n" +
            "2 3 S";
        const actual = martianRobots(
            "5 3\n" +
            "1 1 E\n" +
            "RFRFRFRF\n" +
            "\n" +
            "3 2 N\n" +
            "FRRFLLFFRRFLL\n" +
            "\n" +
            "0 3 W\n" +
            "LLFFFLFLFL"
        );

        expect(actual).to.equal(expected);
    });

});

describe('getRobotStartToInstructions', () => {

    it('should return an array with each element being an object representing a robot with the start position and instructions', () => {
        const expected = [{start: "1 1 E", ins: "RFRFRFRF"}, {start: "3 2 N", ins: "FRRFLLFFRRFLL"}, {start: "0 3 W", ins: "LLFFFLFLFL"}];
        const actual = getRobotStartToInstructions([
            "1 1 E",
            "RFRFRFRF",
            "",
            "3 2 N",
            "FRRFLLFFRRFLL",
            "",
            "0 3 W",
            "LLFFFLFLFL"
        ]);

        expect(actual).to.deep.equal(expected);   
    });
});