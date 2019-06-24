import * as express from 'express';

export default async (request: express.Request, response: express.Response): Promise<void> {
    response.status(200).jsonp([]);
}
