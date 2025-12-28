import User from "../models/users";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try{
        const user = await User.findAll();
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error"});
    };
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: "Not Found"});

        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    };
};

export const postUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        return res.status(201).json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "Bad Request" });
    };
};

export const putUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "Not Found" });

        const { name, email, password } = req.body;
        user.name = name ?? user.name;
        user.email = email ?? user.email;
        user.password = password ?? user.password;

        await user.save();
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "Bad Request" });
    };
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "Not Found" });

        await user.destroy();
        return res.status(204).json({ error: "No content"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    };
};

export default { getAllUsers, getUserById, postUser, putUser, deleteUser };