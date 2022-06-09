import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { UrlModel } from './../databases/model/Url';
import 'dotenv/config';

export class Url {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body;
        const url = await UrlModel.findOne({ originUrl });
        if (url) {
            res.json(url);
            return;
        }
        const urlHash = nanoid(8);
        const API_URL = process.env.API_URL;
        const PORT = process.env.PORT;
        const shortUrl = `${API_URL}:${PORT}/${urlHash}`;
        UrlModel.create({ originUrl, urlHash, shortUrl });
        res.json({ originUrl, urlHash, shortUrl });
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { urlHash } = req.params;
        const url = await UrlModel.findOne({ urlHash });
        url ? res.redirect(url.originUrl) : res.status(404).json({ error: 'Url not found' });
    }
}
