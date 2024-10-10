import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Client from "./ClientModels.js";
import Status from "./Status.Models.js";

const Proyek = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Proyek",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: "proyek",
}
);

Client.belongsTo(Proyek, {
    foreignKey: "ProyekId",
    as: "proyek",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Proyek.hasMany(Client,{
    foreignKey: "ProyekId",
    as: "client",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Proyek.belongsTo(Status, {
    foreignKey: "StatusId",
    as: "status",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Status.hasMany(Proyek, {
    foreignKey: "StatusId",
    as:"proyek",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

export default Proyek;