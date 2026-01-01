import { Request, Response } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loguinUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: email });
        if (!user) return res.status(400).json({ mensaje: "El usuario no existe" })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ mensaje: "Contraseña incorrecta" });

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "1h" }
        );

        return res.json(token);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    };
};