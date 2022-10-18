import express from 'express';
import router from './routes/todo.routes.js';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';

const app = express();

const swaggerFile = JSON.parse(fs.readFileSync('./swagger/output.json'));
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//JSON parsing
app.use(express.json());

//Route handling
app.use('/todos', router);

app.get('*', (res) => {
    res.send('Only /todos endpoint is available.');
});

app.use((err, res) => {
    console.log(err);
    const status = err.status || 500;
    const message = err.message || 'Something went wrong. Try again later';
    res.status(status).json({message});
});

app.listen(1703, () => {
    console.log('Server is ready to work')
});
