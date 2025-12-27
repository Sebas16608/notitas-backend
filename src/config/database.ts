import { Sequelize } from "sequelize";
import path from "node:path";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
    logging: false,
});

import "../models/associations";

export default sequelize;