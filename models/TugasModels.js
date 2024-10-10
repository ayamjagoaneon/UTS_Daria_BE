import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Tugas = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Tugas",
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
    deadline: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: "tugas",
}
);


export default Tugas;