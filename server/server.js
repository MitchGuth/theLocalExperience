const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const { signature, name } = require('./variables');
const pg = require('pg-promise')();
const dbConfig = name;
const db = pg(dbConfig);
const jwt = require('jsonwebtoken');


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
    db.one(`SELECT * FROM users WHERE users.email = '${credentials.email}'`)
    .then(user=> {
        if (user.email === credentials.email && user.password === credentials.password) {
            let token = createToken(user);
            let userInformation = {token, user}
            res.send(JSON.stringify(userInformation));
        } else {
            res.send('Wrong Password');
        }
    })
};

let getExperiences = (req, res) => {
    db.query(`SELECT * FROM contributions`)
    .then(results=> {
        res.send(JSON.stringify(results))
    })
};

let getUserContributions = (req, res) => {
    console.log(req.url);
    // db.query(`SELECT * FROM contributions WHERE userid = ${req.}`)
}

let signupUser = async (req, res) => {
    let credentials = req.body;
    try { 
        let user = await db.query(`INSERT INTO
                users (email, password, name, contributions)
                VALUES ('${credentials.signupEmailInput}', '${credentials.signupPasswordInput}', '${credentials.signupNameInput}', '{}')`)
        .then(user=> {
            let userInformation = {
                email: credentials.signupEmailInput,
                password: credentials.signupPasswordInput
            };
            res.send(JSON.stringify(userInformation));
        })
    } catch(err) {
        console.log(err);
        res.send(JSON.stringify('Email already taken'));
    }
};

let postContribute = async (req, res) => {
    let contributionId = await db.query(`INSERT INTO 
                contributions (latitude, longitude, title, description, tags, userid, photourl, time)
                VALUES ('${req.body.latitude}', '${req.body.longitude}', '${req.body.title}', '${req.body.description}', 'tags', '${req.body.userId || ''}', '${req.body.photoUrl}', '${req.body.time}')
                RETURNING postid`);
    if (req.body.userId !== '') {
        let contributionsArray = await db.one(`SELECT contributions FROM users WHERE userid = '${req.body.userId}'`);
        if (contributionsArray.length === 0) {
            let newContributionsArray = await db.query(`INSERT INTO 
                users (contributions)
                VALUES ('${contributionId[0].postid})
                WHERE userid = '${req.body.userId}'
                RETURNING contributions`)
            let successfulContributionPost = {
                contributionId: contributionId[0].postid, 
                newContributionsArray: newContributionsArray[0]
            };
            let stringifiedSuccessfulContributionPost = JSON.stringify(successfulContributionPost);
            res.send(stringifiedSuccessfulContributionPost);
        } else {
            let newContributionsArray = await db.query(`UPDATE
                users
                SET contributions = array_cat(contributions, '{${contributionId[0].postid}}')
                WHERE userid = '${req.body.userId}'
                RETURNING contributions`)
                let successfulContributionPost = await {
                    contributionId: contributionId[0].postid, 
                    newContributionsArray: newContributionsArray[0]
                };
                let stringifiedSuccessfulContributionPost = JSON.stringify(successfulContributionPost);
                res.send(stringifiedSuccessfulContributionPost);
        }
    }
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
app.get('/api/getexperiences', getExperiences);
app.get('/api/user/:id/contributions', getUserContributions)
app.post('/api/login', checkUser);
app.post('/api/signup', signupUser);
app.post('/api/postcontributephoto', upload.single('selectedFile'), (req, res)=> {
    res.send(req.file.filename)
});
app.post('/api/postcontribute', postContribute);

app.listen(5000);