import { Router } from 'express';
import db from '../db/index.js';

const router = Router();

//All tasks
router.get('/', async(req, res, next) => {
    try {
        await db.read();

        if ( db.data.length ) {
            res.status(200).json(db.data);
        } else {
            res.status(200).json({
                message: 'There are no todos.'
            });
        }
    } catch (e) {
        console.log('Get all todos')
        next(e);
    }
});

//Get 1 task by id
router.get('/:id', async(req, res, next) => {
    const id = req.params.id;

    try {
        await db.read();

        if ( !db.data.length ) {
            return res.status(400).json({ 
                message: 'There are no todos' 
            });
        }

        const z = db.data.find((t) => t.id === 2);
        const todo = db.data.find((t) => t.id === +id);

        if ( !todo ) {
            return res.status(400).json({ 
                    message: 'There is no todo with provided ID' 
            });
        }

        res.status(200).json(todo);
    } catch (e) {
        console.log('Get todo by ID');
        next(e);
    }
});

//Add new task
router.post('/', async(req, res, next) => {
    const text = req.body.text;

    if ( !text ) {
        return res.status(400).json({
            message: 'New todo text must be provided'
        });
    }

    try {
        await db.read();

        const newTodo = {
            id: String(db.data.length + 1),
            text,
            done: false
        }

        db.data.push(newTodo);
        await db.write();

        res.status(201).json(db.data);
    } catch (e) {
        console.log('Create todo');
        next(e);
    }
});

//Update task by its identifier
router.put('/:id', async(req, res, next) => {
    const id = req.params.id;

    if ( !id ) {
        return res.status(400).json({
            message: 'Existing todo ID must be provided'
        });
    }

    const changes = req.body.changes;

    if ( !changes ) {
        return res.status(400).json({
            message: 'Change must be provided'
        });
    }

    try {
        await db.read();

        const todo = db.data.find((t) => t.id === +id);

        if ( !todo ) {
            return res.status(400).json({
                message: 'There is no todo with provided ID'
            });
        }

        const updatedTodo = { ...todo, ...changes };
        const newTodos = db.data.map((t) => (t.id === +id ? updatedTodo : t));

        db.data = newTodos;
        await db.write();
    } catch (e) {
        console.log('Update todo');
        next(e);
    }
});

//Deleted task by its identifier
router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;

    if ( !id ) {
        return res.status(400).json({
            message: 'Existing todo ID must be provided'
        });
    }

    try {
        await db.read();

        const todo = db.data.find((t) => t.id === +id);

        if ( !todo ) {
            return res.status(400).json({
                message: 'There is no todo with provided ID'
            });
        }

        const newTodos = db.data.filter((t) => t.id !== +id);
        db.data = newTodos;
        await db.write();
    } catch (e) {
        console.log('Remove todo');
        next(e);
    }
});

export default router;