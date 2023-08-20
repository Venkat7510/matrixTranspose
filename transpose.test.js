const chai = require('chai');
const { validateInput, transposeMatrix } = require('./transpose');

const expect = chai.expect;

describe('Matrix Operations', () => {

    describe('validateInput()', () => {

        it('should return error when input is not an array', () => {
            const result = validateInput('not_an_array');
            expect(result).to.equal('Input must be a non-empty array');
        });

        it('should return error for an empty array', () => {
            const result = validateInput([]);
            expect(result).to.equal('Input must be a non-empty array');
        });

        it('should return error for invalid matrix dimensions', () => {
            const result = validateInput(new Array(1001).fill(new Array(1).fill(1)));
            expect(result).to.equal('Invalid matrix dimensions');
        });

        it('should return error when rows are not of the same length', () => {
            const result = validateInput([[1, 2], [1, 2, 3]]);
            expect(result).to.equal('All rows must have the same length and be arrays');
        });

        it('should return error for element out of bounds', () => {
            const result = validateInput([[1, 2], [3, 110]]);
            expect(result).to.equal('Matrix element out of bounds at row 2, column 2.');
        });

        it('should return null for a valid matrix', () => {
            const result = validateInput([[1, 2], [3, 4]]);
            expect(result).to.be.null;
        });

    });

    describe('transposeMatrix()', () => {

        it('should correctly transpose a 2x2 matrix', () => {
            const matrix = [[1, 2], [3, 4]];
            const expected = [[1, 3], [2, 4]];
            const result = transposeMatrix(matrix);
            expect(result).to.eql(expected);
        });

        it('should correctly transpose a 3x2 matrix', () => {
            const matrix = [[1, 2], [3, 4], [5, 6]];
            const expected = [[1, 3, 5], [2, 4, 6]];
            const result = transposeMatrix(matrix);
            expect(result).to.eql(expected);
        });

        it('should correctly transpose a 2x3 matrix', () => {
            const matrix = [[1, 2, 3], [4, 5, 6]];
            const expected = [[1, 4], [2, 5], [3, 6]];
            const result = transposeMatrix(matrix);
            expect(result).to.eql(expected);
        });

        it('should handle 1x1 matrix', () => {
            const matrix = [[1]];
            const expected = [[1]];
            const result = transposeMatrix(matrix);
            expect(result).to.eql(expected);
        });

    });

});
