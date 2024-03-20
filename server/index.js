const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// body parser middleware

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})