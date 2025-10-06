const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Willkommen im Versionskontrolle Wiki!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
