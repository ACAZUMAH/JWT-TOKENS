import { createAccessToken } from '../middleware/auth';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createHttpError from 'http-errors';

export const login = async (_req: Request, res: Response) => {
    const { username, password } = _req.body;
    const errors = validationResult(_req);
    if (!errors.isEmpty())
        throw createHttpError.BadRequest(errors.array()[0].msg);
    const token = createAccessToken(username);
    res.json({ msg: 'user logged in', token });
}

export const dashboard = async (_req: Request, res: Response) => {
    const token = _req.body.userId;
    const num = Math.floor(Math.random() * 100);
    res.json({ msg: `Hello ${token}`, secret: `this is your authorized data ${num}` });
}