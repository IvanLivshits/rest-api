const Router = require('express');
const db = require('../../db/db');
const { check, validationResult, oneOf } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/auth.middleware');
const { UserRepository } = require('../repository/mysql');
const { RegistrationService } = require('../service');
const { RegistrationController } = require('../controller');

const router = new Router();
const users = new UserRepository(db);
const secret = process.env.KEY;
const service = new RegistrationService({users, secret});
const controller = new RegistrationController({service});

//to do: SQL Injection
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

router.post('/signin', controller.signIn.bind(controller));

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user_id = req.user.id;

            const user = await db.query(`select * from users where id = ${user_id};`).then(result => {
                return result[0][0] || null;
            });

            const token = jwt.sign({id: user.id}, process.env.KEY, {expiresIn: "10min"});

            return res.json({
                token,
                user: {
                    id: user.id,
                    login: user.login
                }
            })
        } catch (error) {
            console.log(error);
            res.send({message: "Server error"})
        }
    }
);

module.exports = router;