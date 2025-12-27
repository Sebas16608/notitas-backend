import app from "./app";
import sequelize from "./config/database";

// IMPORTAR MODELOS
import "./models/users";
import "./models/notita-model";
import "./models/associations";

const PORT = 3000;

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });

        console.log("DB conectada");

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
    }
})();
