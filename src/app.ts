import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req: Request, res: Response) => {
    res.json({
        title: "Holaa Mi amosito",
        mensaje: "Bienvenida",
    });
});

export default app;