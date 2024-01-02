import swaggerAutogen from 'swagger-autogen';

const config = {
    info: {
        version: "1.0.0",
        title: 'API Hello',
        description: 'Description bla bla bla'
    },
    host: 'localhost:3333'
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes.js'];

swaggerAutogen()(outputFile, routes, config);
