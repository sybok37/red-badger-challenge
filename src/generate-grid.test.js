import { expect } from 'chai';
import { generateGrid } from './generate-grid';

describe('Martian robots - generateGrid', () => {

    it('should return an array of arrays representing a robot grid with the specified number of columns and rows. ' +
       'The edge cells should have an object used to keep track of robots falling off the edge.', () => {
        const edgeObj = {hasRobotFallenHere: false};
        const expected = [
            [{...edgeObj}, {...edgeObj}, {...edgeObj}, {...edgeObj}, {...edgeObj}, {...edgeObj}],
            [{...edgeObj}, null, null, null, null, {...edgeObj}],
            [{...edgeObj}, null, null, null, null, {...edgeObj}],
            [{...edgeObj}, {...edgeObj}, {...edgeObj}, {...edgeObj}, {...edgeObj}, {...edgeObj}]
        ];
        const actual = generateGrid(6, 4);

        expect(actual).to.deep.equal(expected);
    });

});