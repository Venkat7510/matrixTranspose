// This module provides matrix operations: validation and transposition

function validateInput(matrix) {
    console.log(matrix);
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return 'Input must be a non-empty array';
    }

    const m = matrix.length;
    const n = matrix[0].length;

    if (m < 1 || m > 1000 || n < 1 || n > 1000 || m * n > 105) {
        return 'Invalid matrix dimensions';
    }

    for (let i = 0; i < m; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
            return 'All rows must have the same length and be arrays';
        }
        for (let j = 0; j < n; j++) {
            if (typeof matrix[i][j] !== 'number' || matrix[i][j] < -109 || matrix[i][j] > 109) {
                return `Matrix element out of bounds at row ${i + 1}, column ${j + 1}.`;
            }
        }
    }

    return null;
}

function transposeMatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const transposed = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}

module.exports = {
    validateInput,
    transposeMatrix
};
