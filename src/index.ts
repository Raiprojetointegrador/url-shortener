import { MongoConnection } from './databases/MongoConnection';
import express from 'express';
import { Url } from './controllers/Url';

const api = express();
api.use(express.json());

const database = new MongoConnection;
database.connect();

const url = new Url();
api.post('/shorten', url.shorten);
api.get('/:urlHash', url.redirect);

const PORT = process.env.PORT 
api.listen(PORT, () => console.log(`listening on port ${PORT}`));