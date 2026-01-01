import Notita from "../models/notita-model";
import { Request, Response } from "express";

export const getAllNotita = async (req: Request, res: Response) => {
    try {
        const notita = await Notita.findAll();
        return res.status(200).json(notita);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: "Internal Server Error"});
    };
};

export const getNotitaById = async (req: Request, res: Response) => {
    try {
        const notita = await Notita.findByPk(req.params.id);
        if (!notita) return res.status(404).json({error: "Not found" });

        return res.status(200).json(notita);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error"});
    };
};

export const postNotita = async (req: Request, res: Response) => {
    try {
        const { title, content, userId } = req.body;

        const notita = await Notita.create({ title, content, userId });
        return res.status(201).json(notita);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "Bad Request"})
    };
};

export const putNotita = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const notita = await Notita.findByPk(id);
        if (!notita) return res.status(404).json({ error: "Not Found" });

        const { title, content, userId } = req.body;
        notita.title = title ?? notita.title;
        notita.content = content ?? notita.content;
        notita.userId = userId ?? notita.userId;

        await notita.save()
        return res.json(notita);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "bad request" });
    };
};

export const deleteNotita = async (req: Request, res: Response) => {
     try {
        const { id } = req.params
        const notita = await Notita.findByPk(id);
        if (!notita) return res.status(404).json({ "error": "Not Fuond" });

        await notita.destroy()
        return res.status(204).json({ error: "No content"});
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    };
};

export default { getAllNotita, getNotitaById, postNotita, putNotita, deleteNotita };