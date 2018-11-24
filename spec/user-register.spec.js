const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

const user = {
    email: 'prueba3@prueba.com',
    password: '123456',
    firstName: 'Pepito',
    lastName: 'Pérez',
    birthday: '1700/12/31'
};


it('Registro de usuario', function () {
    return frisby
        .post('http://localhost:3000/user/save', user)
        .expect('status', 200)
        .expect('json', 'status', true)
        .expect('jsonTypes', 'content[0]', {
            command: "message",
            type: "info",
            content: "user registrado"

        })
        .expect('jsonTypes', 'content[1]', {
            command: 'model',
            type: 'user',
        })
        .expect('jsonTypes', 'content[1].content', {
            email: user.email,
            password: '*****',
            firstName: user.firstName,
            lastName: user.lastName
        })
        .then(response => {
            let data = response._json;
            let {
                status,
                content
            } = data;
            let tmpUser = content[1].content;

            return frisby
                .post('http://localhost:3000/user/login', {
                    email: user.email,
                    password: user.password
                })
                .expect('status', 200)
                .expect('json', 'status', true)
                .expect('jsonTypes', 'content', {
                    id: Joi.number().required(),
                    email: tmpUser.email,
                    token: Joi.string().required()
                })
                .expect('json', 'content.email', user.email)
                .expect('json', 'content.password', '*****')
        })
});