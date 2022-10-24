require('dotenv').config()
const express = require('express');
const authRouter = require('./routes/auth.routes');
const fileRouter = require('./routes/file.routes');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', authRouter);
app.use('/file', fileRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start();