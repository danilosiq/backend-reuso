import { NextFunction } from "express";

export function logge(req: Request, res: Response, next: NextFunction): void {
    console.log(`
        [${new Date().toISOString()}]
        ${req.method}
        ${req.url}`)
        next()


}