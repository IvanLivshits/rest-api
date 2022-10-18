import express from 'express';
import router from './routes/todo.routes.js';

const app = express();

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
