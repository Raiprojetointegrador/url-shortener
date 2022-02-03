import express, { Request, Response } from 'express';

const api = express();
api.listen(3000, () => console.log('listening on port 3000'));

api.get('/', (req: Request, res: Response) => {
  res.json({succeed: true});
});

