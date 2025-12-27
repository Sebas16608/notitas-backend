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

// DATABASE
import sequelize from "./config/database";
import Notita from "./models/notita-model";
import User from "./models/user";
import "./models/associations";

sequelize.sync({ force: false })
    .then(() => console.log("DB conectada"))
    .catch(err => console.log("Error al sincronizar la DB", err));

export default app;