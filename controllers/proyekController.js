import Proyek from "../models/ProyekModels.js";

export const createProyek = async (req, res) => {
    try{
        const { name, description, start_date, end_date, StatusId,KaryawanId, TugasId  } = req.body;
        const proyek = await Proyek.create({name, description, start_date, end_date, StatusId, KaryawanId, TugasId });
        res.status(200).json(proyek);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createProyek"})
    }
}
// console.log(createProyek);
export const getProyekById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const proyek = await Proyek.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!proyek) {
            return res.status(404).json({ message: "proyek tidak ditemukan" });
        }
        res.status(200).json(proyek);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllProyek = async (req, res) => {
    try{
        const proyek = await Proyek.findAll();
        res.status(200).json(proyek)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllProyek"})
    }
};

export const updateProyek = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, description, start_date, end_date, StatusId,KaryawanId, TugasId } = req.body;
        const [updated] = await Proyek.update({ name, description, start_date, end_date, StatusId,KaryawanId, TugasId }, { where: { id } });
        const updatedProyek = await Proyek.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "proyek tidak ter-update"})
        }else{
            res.status(200).json(updatedProyek);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate proyek"})
    }
}

export const deleteProyek = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Proyek.destroy({where: {id}});
        res.status(200).json(deleted + ` proyek ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus proyek"})
    }
}