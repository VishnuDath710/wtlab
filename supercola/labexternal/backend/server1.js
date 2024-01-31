const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/kmit').then(() => {
    console.log("connected to mongodb....");
});

const myschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rolno: {
        type: Number,
        required: true,
        unique: true
    },
    add: {
        type: String,
        required: true
    },
    passkey: {
        type: String,
        required: true
    }
});

let mymodel = new mongoose.model('regpage', myschema);

app.post('/register', (req, res) => {
    const userData = req.body;

    const tmodel = new mymodel(userData);

    tmodel.save().then(() => {
        console.log("saved successfully");
        res.send(`<h2>Thank you for Registering <br> <a href='./home.html'> Click Here goto Home page </a> </h2>`);
    }).catch((err) => {
        if (err.code === 11000) {
            res.send(`<h2>roll no already taken</h2>`);
        } else {
            res.send(`<h2>error in saving data</h2>`);
        }
    });
});
app.get('/fetchall', (req, res) => {
    mymodel.find().then((users) => {
        let tableHTML = `<h1 align="center">User Details</h1><table border="1" align="center"><tr><th>name</th><th>rollno</th><th>address</th><th>passkey</th>`;

        users.forEach((user) => {
            tableHTML += `<tr><td>${user.name}</td><td>${user.rolno}</td><td>${user.add}</td><td>${user.passkey}</td></tr>`;
        });

        tableHTML += '</table>';  
        tableHTML += `<h2>back to home page <br> <a href='./home.html'> Click Here goto Home page </a> </h2>`;  

        

        res.send(tableHTML);
    }).catch((error) => {
        res.status(500).send("Internal Server Error");
    });
});


app.listen(port, () => {
    console.log("successfully running on port 8000");
});
