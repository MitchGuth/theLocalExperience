const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const pg = require('pg-promise')();
const dbConfig = 'postgres://brandonhumphries@localhost:5432/the-local-experience';
const db = pg(dbConfig);
const jwt = require('jsonwebtoken');
const { signature } = require('./variables');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const newFileName = `${uuidv4()}${path.extname(file.originalname)}`
        cb(null, newFileName)
    }
});

const upload = multer({ storage });

let createToken = user => 
    jwt.sign(
        { userId: user.id },
        signature,
        { expiresIn: '7d' }
);

let checkUser = (req, res) => {
    let credentials = req.body;
    db.one(`SELECT * FROM users WHERE users.email = '${credentials.loginEmailInput}'`)
    .then(user=> {
        if (user.email === credentials.loginEmailInput && user.password === credentials.loginPasswordInput) {
            console.log('correct');
            let token = createToken(user);
            let userInformation = {token, user}
            res.send(JSON.stringify(userInformation));
        } else {
            res.send('Wrong Password');
        }
    })
};

let signupUser = (req, res) => {
    let credentials = req.body;
    console.log(credentials);
    db.query(`INSERT INTO
                users (email, password, name)
                VALUES ('${credentials.signupEmailInput}', '${credentials.signupPasswordInput}', '${credentials.signupNameInput}')`)
    .then(user=> {
        console.log(user);
    })
}

let postContribute = (req, res) => {
    db.query(`INSERT INTO 
                contributions (latitude, longitude, title, description, tags, userId, photoUrl, time)
                VALUES ('${req.body.latitude}', '${req.body.longitude}', '${req.body.title}', '${req.body.description}', 'tags', 'userId', '${req.body.photoUrl}', '${req.body.time}')`)
    .then(results=> {
        res.send('received');
    })
};

let allowCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    next();
};


const static = express.static;

app.use(static('../client/build'));
app.use('/uploads', static(__dirname + '/uploads'));
app.use(allowCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/login', checkUser);
app.post('/api/signup', signupUser);
app.post('/api/postcontributephoto', upload.single('selectedFile'), (req, res)=> {
    res.send(req.file.filename)
});
app.post('/api/postcontribute', postContribute);

app.listen(5000);