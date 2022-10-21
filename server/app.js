const express = require('express');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const bodyParser = require('body-parser');
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsMiddleware);
app.use('/', authRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start();