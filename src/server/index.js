const express = require('express');
const os = require('os');
const axios = require('axios');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('dist'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 


app.get('/api/products', (req, res) => {
    axios.get('http://localhost:3004/products')
        .then(function (response) {
            return res.send(response.data)
        })
});

app.post('/api/products', (req, res) => {
    axios.post('http://localhost:3004/products', req.body)
        .then(function (response) {
            return res.send(response.data)
        })
})

app.put('/api/products/:proId', (req, res) => {
    axios.put(`http://localhost:3004/products/${req.params.proId}`, req.body)
        .then(function (response) {
            return res.send(response.data)
        })
})

app.delete('/api/products/:proId', (req, res) => {
    axios.delete(`http://localhost:3004/products/${req.params.proId}`)
        .then(function (response) {
            return res.send(response.data)
        })
})


app.get('/api/users', (req, res) => {
    axios.get('http://localhost:3004/users')
        .then(function (response) {
            return res.send(response.data)
        })
});

app.post('/api/users', (req, res) => {
    axios.post('http://localhost:3004/users', req.body)
        .then(function (response) {
            return res.send(response.data)
        })
})

app.put('/api/users/:userId', (req, res) => {
    axios.put(`http://localhost:3004/users/${req.params.userId}`, req.body)
        .then(function (response) {
            return res.send(response.data)
        })
})

app.delete('/api/users/:userId', (req, res) => {
    axios.delete(`http://localhost:3004/users/${req.params.userId}`)
        .then(function (response) {
            return res.send(response.data)
        })
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
