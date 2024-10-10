import express from "express"
import { createKaryawan, deleteKaryawan, getAllKaryawan, getKaryawanById, updateKaryawan } from "../controllers/karyawanController.js";
import { createProyek, deleteProyek, getAllProyek, getProyekById, updateProyek } from "../controllers/ProyekController.js";
import { createTugas, deleteTugas, getAllTugas, getTugasById, updateTugas } from "../controllers/tugasController.js";
import { createClient, deleteClient, getAllClient, getClientById, updateClient } from "../controllers/clientController.js";
import { createStatus, deleteStatus, getAllStatus, getStatusById, updateStatus } from "../controllers/statusController.js";
const router = express.Router();

router.get("/karyawan", getAllKaryawan)
router.get("/karyawan/find/:id", getKaryawanById)
router.post("/karyawan/create", createKaryawan)
router.put("/karyawan/update/:id", updateKaryawan)
router.delete("/karyawan/delete/:id", deleteKaryawan)


router.get("/tugas", getAllTugas)
router.get("/tugas/find/:id", getTugasById)
router.post("/tugas/create", createTugas)
router.put("/tugas/update/:id", updateTugas)
router.delete("/tugas/delete/:id", deleteTugas)

router.get("/proyek", getAllProyek)
router.get("/proyek/find/:id", getProyekById)
router.post("/proyek/create", createProyek)
router.put("/proyek/update/:id", updateProyek)
router.delete("/proyek/delete/:id", deleteProyek)


router.get("/client", getAllClient)
router.get("/client/find/:id", getClientById)
router.post("/client/create", createClient)
router.put("/client/update/:id", updateClient)
router.delete("/client/delete/:id", deleteClient)


router.get("/status", getAllStatus)
router.get("/status/find/:id", getStatusById)
router.post("/status/create", createStatus)
router.put("/status/update/:id", updateStatus)
router.delete("/status/delete/:id", deleteStatus)


export default router