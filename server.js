const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express();
const port = process.env.PORT

app.use(express.json());

dbConnect();

app.get('/', (req, res) => {
    res.send('Congs!! Your Server is Working!! Continue')
})

app.listen(port, () => {
    console.log(`SUIIII!!!!!! your Server is Running on http://localhost:${port}`);
})