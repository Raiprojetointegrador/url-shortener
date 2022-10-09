import { MongoConnection } from './databases/MongoConnection';
import express from 'express';
import routes from "./routes";
import 'dotenv/config';


if (process.env.NODE_ENV !== 'test') {
    const database = new MongoConnection;
    database.connect();
}

const api = express();
api.use(express.json());

api.use(routes);

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 8080
    api.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

export default api;