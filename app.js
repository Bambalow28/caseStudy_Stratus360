const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require("cors")

app.use(cors({
    origin: 'https://case-study-stratus-360.herokuapp.com/',
    }));

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.port || 8080);