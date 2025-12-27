import { DataType, Model } from "sequelize";
import sequelize from "../config/database";

class Notita extends Model {
    declare id?: number;
    declare title: string;
    declare content: string;
    declare userId: string;
}