require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { sign, verify } from "jsonwebtoken";
import { Types } from "mongoose";

export const createAccessToken = (userId: string | Types.ObjectId) => {
  const payload = { _id: userId}
  return sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1d",
  });
};

export const verifyAccessToken = (_req: Request, _res: Response, next: NextFunction) => {
  const authHeader = _req.headers.authorization;
  if (!authHeader) return createHttpError.Unauthorized('Access Denied');
  const token = authHeader.split(" ")[1];
  if (!token) return createHttpError.Unauthorized('Access Denied');
  verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, decoded: any) => {
    if (err) return createHttpError.Unauthorized('Access Denied');
    _req.body.userId = decoded._id;
    next();
  });
}