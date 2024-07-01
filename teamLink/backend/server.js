/* eslint-disable no-undef */
import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = jsonServer.router(join(__dirname, 'db.json'));

server.use(cors()); // Add this line to enable CORS
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});





