import express, { Request, Response } from 'express';
import { Url } from './controllers/Url';

const api = express();
api.use(express.json());

const url = new Url();
api.post('/shorten', url.shorten);

api.listen(3000, () => console.log('listening on port 3000'));