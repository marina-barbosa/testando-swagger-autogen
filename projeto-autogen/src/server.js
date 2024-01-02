
import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger-output.json' assert { type: 'json' };

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3333

server.listen(port, () => {
    console.log(`Servidor disponível na porta ${port}.`)
});