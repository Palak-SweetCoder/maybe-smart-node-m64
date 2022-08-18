const express = require('express')
var cors = require('cors');
const { urlencoded } = require('express');
const app = express()
const port = process.env.PROT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Mr.Auto Node dude!')
})


const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01788888888' },
    { id: 3, name: 'purnima', email: 'purnima@gmail.com', phone: '01788888888' },
    { id: 4, name: 'jin', email: 'jin@gmail.com', phone: '01788888888' },
    { id: 5, name: 'vut', email: 'vut@gmail.com', phone: '01788888888' },
    { id: 6, name: 'petni', email: 'petni@gmail.com', phone: '01788888888' },
    { id: 7, name: 'pori', email: 'pori@gmail.com', phone: '01788888888' }
]

app.get('/users', (req, res) => {
    //filtering by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    // console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // console.log(id);
    res.send(user);
    // console.log(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'appple', 'orange']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.req('sour sour fazle flavor');
})

app.listen(port, () => {
    console.log('Listening the provided port', port)
})