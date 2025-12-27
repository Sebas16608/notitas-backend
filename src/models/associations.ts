import User from "./user";
import Notita from "./notita-model";

User.hasMany(Notita, {
    foreignKey: "userId",
    as: "notitas",
});

Notita.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
});