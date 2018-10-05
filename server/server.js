const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

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

let allowCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    next();
};


const static = express.static;

app.use(static('../client/'))
app.use(allowCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/postcontribute', upload.single('selectedFile'), (req, res)=> {
    res.send(req.file.filename)
});

app.listen(5000);