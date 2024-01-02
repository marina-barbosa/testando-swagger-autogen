import express from 'express';
import helloWorld from './controllers/hello.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../swagger-output.json' assert { type: 'json' };

const routes = express.Router();

routes.get('/api', helloWorld);

// routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default routes;