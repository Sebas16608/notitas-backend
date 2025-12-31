import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
    id: number;
    email: string;
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ mensaje: "No Token"});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!,
        ) as JwtPayload;

        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ mensaje: "Token Invalido" });
    };
};