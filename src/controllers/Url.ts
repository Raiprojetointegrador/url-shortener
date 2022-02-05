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

    public async redirect(req: Request, res: Response): Promise<void> {
        const { urlHash } = req.params;
        const url = {
            originUrl: "https://www.udemy.com/course/grpc-nodejs/",
            urlHash: "O3sNocaZ",
            shortUrl: "http://localhost:3000/O3sNocaZ"
        }
        res.redirect(url.originUrl);
    }
}
