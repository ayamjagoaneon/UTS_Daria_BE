import Karyawan from "../models/KaryawanModels.js";

export const createKaryawan = async (req, res) => {
    try{
        const { name, position } = req.body;
        const karyawan = await Karyawan.create({name, position});
        res.status(200).json(karyawan);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createKaryawan"})
    }
}
// console.log(createKaryawan);
export const getKaryawanById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const karyawan = await Karyawan.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!karyawan) {
            return res.status(404).json({ message: "karyawan tidak ditemukan" });
        }
        res.status(200).json(karyawan);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllKaryawan = async (req, res) => {
    try{
        const karyawan = await Karyawan.findAll();
        res.status(200).json(karyawan)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllKaryawan"})
    }
};

export const updateKaryawan = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, position } = req.body;
        const [updated] = await Karyawan.update({ name, position }, { where: { id } });
        const updatedKaryawan = await Karyawan.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "karyawan tidak ter-update"})
        }else{
            res.status(200).json(updatedKaryawan);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate karyawan"})
    }
}

export const deleteKaryawan = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Karyawan.destroy({where: {id}});
        res.status(200).json(deleted + ` karyawan ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus karyawan"})
    }
}