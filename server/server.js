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

let createToken = (user) => {
    let token = jwt.sign(
        { userId: user.userid },
        signature,
        { expiresIn: '7d' })
    return token;
};

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

let getUserInformation = async (req, res) => {
    let userInformation = await db.one(`SELECT * FROM users WHERE userId = '${req.jwt.userId}'`);
    console.log(userInformation);
    res.send(JSON.stringify(userInformation));
}

let checkToken = (req, res, next) => {
    let { authorization: token } = req.headers;
    let payload;
    try {
        payload = jwt.verify(token, signature)
    } catch(err) {
        console.log(err);
    }
    if (payload) {
        req.jwt = payload;
        next();
    } else {
        res.send('You do not have a token!');
    }
};


let getExperiences = (req, res) => {
    db.query(`SELECT * FROM contributions`)
    .then(results=> {
        res.send(JSON.stringify(results))
    })
};

let getUserContributions = async (req, res) => {
    let contributionsArray = await db.query(`SELECT * FROM contributions WHERE userid = '${req.params.id}'`)
    res.send(JSON.stringify(contributionsArray));
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
            console.log('updating');
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
    } else {
        let successfulContributionPost = await {
            contributionId: contributionId[0].postid
        };
        let stringifiedSuccessfulContributionPost = JSON.stringify(successfulContributionPost);
        res.send(stringifiedSuccessfulContributionPost);
    }
};

let allowCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, authorization');
    next();
};


const static = express.static;

app.use(static('../client/build'));
app.use('/uploads', static(__dirname + '/uploads'));
app.use('/imgs', static(__dirname + '/imgs'));
app.use(allowCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/getexperiences', getExperiences);
app.get('/api/user/:id/contributions', checkToken, getUserContributions);
app.get('/api/checktoken', checkToken, getUserInformation);
app.post('/api/login', checkUser);
app.post('/api/signup', signupUser);
app.post('/api/postcontributephoto', upload.single('selectedFile'), (req, res)=> {
    res.send(req.file.filename)
});
app.post('/api/postcontribute', postContribute);

app.listen(5000);