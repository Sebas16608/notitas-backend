import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import NotitaRouter from "./routes/notita-routes";
import UserRouter from "./routes/user-routes";
import AuthRouter from "./routes/auth-router";

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
        endpoints: {
            auth: "/auth"
            notita: "/notita",
            user: "/user"
        }
    });
});

// Rutas
app.use("/notita", NotitaRouter);
app.use("/user", UserRouter);
app.use("/auth", AuthRouter)

export default app;
