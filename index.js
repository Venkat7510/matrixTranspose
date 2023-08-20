const express = require('express');
const { validateInput, transposeMatrix } = require('./transpose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text());
app.use(jsonParsingMiddleware);
app.use(handleJsonError);

function jsonParsingMiddleware(req, res, next) {
    if (req.is('json')) {
        // The Req body should be in JSON Format or else it would throw an error
        next();
    } else if (req.is('text/*')) {
        // For text inputs, we try to parse it as JSON
        try {
            req.body = JSON.parse(req.body);
        } catch (e) {
            // Parsing failed, the body will remain as plain text
            console.log("Parsing as JSON failed, proceeding with plain text");
        }
        next();
    } else {
        // Unsupported content type
        res.status(400).send({ error: 'Invalid content type. Only JSON or plain text are supported.' });
    }
}

function handleJsonError(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).send({ error: 'Invalid JSON input' });
    }
    // If it's not a JSON parsing error, move to the next middleware (or error handler)
    next(err);
}

app.post('/transpose', (req, res) => {
    const matrix = req.body;
    const validationError = validateInput(matrix);
    // validationError checks if the input is in a valid format
    if (validationError) {
        res.status(400).send({ error: validationError });
    } else {
        const transposedMatrix = transposeMatrix(matrix);
        //transposedMatrix returns the required output for the given matrix
        res.status(200).send(transposedMatrix);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
