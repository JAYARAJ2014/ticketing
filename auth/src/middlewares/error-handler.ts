/***
 * To always send back a consistent error response whatever the error may be. 
 */

import { Request, Response, NextFunction } from "express";
export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
    )=> {
        console.log(err);
        res.status(400).send({message: 'Something went wrong!'});
};