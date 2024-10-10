import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Tugas from "./TugasModels.js";
import Proyek from "./ProyekModels.js";

const Karyawan = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Karyawan",
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
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: "karyawan",
}
);

//RELASI USER KE BOOK

//ARTINYA USER BISA MELIHAT BANYAK BUKU
Karyawan.hasMany(Tugas, {
    //CASCADE DIGUNAKAN KETIKA DATA DITABEL REFRENSI DIHAPUS, MAKA DATA YANG TERKAIT DI TABEL INI JUGA AKAN DI HAPUS
    foreignKey: "KaryawanId",
    as: "tugas",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Tugas.belongsTo(Karyawan, {
    foreignKey: "KaryawanId",
    as: "karyawan",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Karyawan.hasMany(Proyek, {
    foreignKey: "KaryawanId",
    as: "proyek",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Proyek.belongsTo(Karyawan, {
    foreignKey: "KaryawanId",
    as: "karyawan",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Proyek.belongsTo(Tugas, {
    foreignKey: "TugasId",
    as: "tugas",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Tugas.hasMany(Proyek, {
    foreignKey: "TugasId",
    as: "proyek",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})


export default Karyawan;