const express = require('express');
const os = require('os');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
    return res.send({"username":"check"})
});

app.get('/api/products', (req, res) => {
    axios.get('http://localhost:3004/products')
        .then(function (response) {
            return res.send(response.data)
        })
});



app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
