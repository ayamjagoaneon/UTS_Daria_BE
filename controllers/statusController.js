import Status from "../models/Status.Models.js"

export const createStatus = async (req, res) => {
    try{
        const { status } = req.body;
        const statu = await Status.create({status});
        res.status(200).json(statu);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createStatus"})
    }
}

export const getStatusById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const status = await Status.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!status) {
            return res.status(404).json({ message: "status tidak ditemukan" });
        }
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllStatus = async (req, res) => {
    try{
        const status = await Status.findAll();
        res.status(200).json(status)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllStatus"})
    }
};

export const updateStatus = async (req, res) => {
    try{
        const { id } = req.params;
        const { status } = req.body;
        const [updated] = await Status.update({ status }, { where: { id } });
        const updatedStatus = await Status.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "status tidak ter-update"})
        }else{
            res.status(200).json(updatedStatus);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate status"})
    }
}

export const deleteStatus = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Status.destroy({where: {id}});
        res.status(200).json(deleted + ` status ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus status"})
    }
}