import { Router } from 'express';

import Url from '../controllers/Url';

const url = new Url();

const routes = Router();

routes.post('/shorten', url.shorten);
routes.get('/:urlHash', url.redirect);

export default routes;