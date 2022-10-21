const Router = require('express');
const db = require('../../db/db');
const { check, validationResult, oneOf } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

const router = new Router();

router.post(
    '/signup', 
    [
        oneOf([check('login', 'Incorrect phone').isMobilePhone(), check('login', 'Incorrect email').isEmail()]),
        check('password', 'Incorrect password').isLength({min:3, max: 12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if ( !errors.isEmpty() ) {
            return res.status(400).json({message: 'Incorrect request', errors});
        };

        const {login, password} = req.body;
        const encodePassword = await bcrypt.hash(password, 6);

        const user_id = await db.query(`select id from users where login = '${login}';`).then(result => {
            return result[0][0] || null;
        });

        if ( user_id ) {
            return res.status(400).json({message: `User with login ${login} already exist`});
        }

        await db.query(`insert into users(login, password) values('${login}', '${encodePassword}');`).then(() => {
            return res.json({message: 'User was created'});
        });
    } catch (error) {
        console.log(error);
        res.send({message: "Server error"})
    }
});

router.post('/signin', async (req, res) => {

    const {login, password} = req.body;

    const user_id = await db.query(`select id from users where login = '${login}';`).then(result => {
        return result[0][0] || null;
    });

    if ( !user_id ) {
        return res.status(400).json({message: 'User not found'});
    }

    const user_pass = await db.query(`select password from users where id = ${user_id.id};`).then(result => {
        return result[0][0] || null;
    });
    const isPassValid = bcrypt.compareSync(password, user_pass.password);

    if ( !isPassValid ) {
        return res.status(400).json({message: 'Invalid password'});
    };

    const token = jwt.sign({id: user_id.id}, config.get('secretKey'), {expiresIn: "10min"});
    return res.json({
        token,
        user: {
            id: user_id.id,
            login: login
        }
    })
})

module.exports = router;