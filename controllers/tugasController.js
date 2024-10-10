import Tugas from "../models/TugasModels.js";

export const createTugas = async (req, res) => {
    try{
        const { name, description, start_date, end_date, deadline, KaryawanId  } = req.body;
        const proyek = await Tugas.create({name, description, start_date, end_date, deadline, KaryawanId});
        res.status(200).json(Tugas);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createTugas"})
    }
}
// console.log(createTugas);
export const getTugasById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const tugas = await Tugas.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!tugas) {
            return res.status(404).json({ message: "proyek tidak ditemukan" });
        }
        res.status(200).json(tugas);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllTugas = async (req, res) => {
    try{
        const tugas = await Tugas.findAll();
        res.status(200).json(tugas)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllTugas"})
    }
};

export const updateTugas = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, position } = req.body;
        const [updated] = await Tugas.update({ name, position }, { where: { id } });
        const updatedTugas = await Tugas.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "tugas tidak ter-update"})
        }else{
            res.status(200).json(updatedTugas);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate tugas"})
    }
}

export const deleteTugas = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Tugas.destroy({where: {id}});
        res.status(200).json(deleted + ` tugas ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus tugas"})
    }
}