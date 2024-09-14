//const CustomAPIError = require('../errors/custom-error')
import createError from 'http-errors'
import { Request, Response, NextFunction } from 'express'
const errorHandlerMiddleware = (err: any, _req:Request, _res:Response, _next: NextFunction) => {
  if (createError.isHttpError(err)) {
    return _res.status(err.statusCode).send({errors: [{ msg: err.message }]})
  }
  return _res.status(500).json({errors: [{ msg: 'Something went wrong try again later' }]})
}

export default errorHandlerMiddleware
