import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/notita-routes";

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
        endpoints: "/notita"
    });
});

// Rutas
app.use("/notita", router);

export default app;
