import { Request, Response, NextFunction } from "express";

export function validateCreateUser (
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ mensaje: "Email y password requeridos" });
    };
    if (password.lenght < 6) {
        return res.status(400).json({ mensaje: "La contraseña es muy corta" });
    }
    next();
};

export default validateCreateUser;