import db from "../utils/connection.js";
import Client from "./ClientModels.js";
import Karyawan from "./KaryawanModels.js";
import Proyek from "./ProyekModels.js";
import Status from "./Status.Models.js";
import Tugas from "./TugasModels.js";
// await User.sync()
// await Book.sync()

await db.sync()

await Client.sync()
await Status.sync()