import { Request, response, Response } from 'express';
import { nanoid } from 'nanoid';
import 'dotenv/config';

export class Url {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body;
        // check if url exists
        const urlHash = nanoid(8);
        const shortUrl = `${process.env.API_URL}/${urlHash}`;
        // save url to database
        // return shortened url
        res.json({ originUrl, urlHash, shortUrl });
    }
}
