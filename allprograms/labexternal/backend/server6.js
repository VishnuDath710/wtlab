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
        required: true,
        unique: true
    },
    passkey: {
        type: String,
        required: true
    },
    rolno: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    }
});

let mymodel = new mongoose.model('doc6', myschema);

app.post('/register', (req, res) => {
    const userData = req.body;

    const tmodel = new mymodel(userData);

    tmodel.save().then(() => {
        console.log("saved successfully");
        res.send(`<h2>Thank you for Registering <br> <a href='./home.html'> Click Here goto Home page </a> </h2>`);
    }).catch((err) => {
        if (err.code === 11000) {
            res.send(`<h2>Username already taken</h2>`);
        } else {
            res.send(`<h2>Error in saving data</h2>`);
        }
    });
});

app.post('/delete', (req, res) => {
    const { name, passkey } = req.body;

    mymodel.findOneAndDelete({ name, passkey }).then((user) => {
        if (!user) {
            return res.send(`<h2>Invalid username or password</h2>`);
        }

        console.log("deleted successfully");
        res.send(`<h2>Profile deleted successfully <br> <a href='./home.html'> Click Here to go to Home page </a> </h2>`);
    }).catch((err) => {
        console.log("Error in deleting user:", err);
        res.send(`<h2>Error in deleting profile</h2>`);
    });
});


app.listen(port, () => {
    console.log("successfully running on port 8000");
});
