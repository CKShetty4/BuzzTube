import { Request, Response, NextFunction, RequestHandler } from 'express';

const asyncHandler = (func: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await func(req, res, next)
        } catch (err) {
            res.status((err as any).code || 500).json({
                success: false,
                message: (err as Error).message
            })
        }
    }
}

export default asyncHandler

// const asyncHandler = (func:RequestHandler) => {
//     return (req:Request, res:Response, next:NextFunction) => {
//         Promise.resolve(func(req, res, next)).catch((err) => {
//             res.status((err as any).code || 500).json({
//                 success: false,
//                 message: (err as Error).message
//             })
//         })
//     }
// }
