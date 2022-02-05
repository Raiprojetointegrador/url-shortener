import { Request, response, Response } from 'express';
import { nanoid } from 'nanoid';

export class Url {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body;
        // check if url exists
        const urlHash = nanoid(8);
        const shortUrl = `${process.env.API_URL}/${urlHash}`;
        // save url to database
        // return shortened url
        response.json({ originUrl, urlHash, shortUrl });
    }
}
