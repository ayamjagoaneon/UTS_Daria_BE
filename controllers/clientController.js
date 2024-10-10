import Client from "../models/ClientModels.js"

export const createClient = async (req, res) => {
    try{
        const { name, id, contact, email, ProyekId } = req.body;
        const client = await Client.create({name, id, contact, email, ProyekId});
        res.status(200).json(client);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createClient"})
    }
}

export const getClientById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const client = await Client.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!client) {
            return res.status(404).json({ message: "client tidak ditemukan" });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllClient = async (req, res) => {
    try{
        const client = await Client.findAll();
        res.status(200).json(client)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllClient"})
    }
};

export const updateClient = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, contact, email,ProyekId } = req.body;
        const [updated] = await Client.update({ name, contact, email, ProyekId  }, { where: { id } });
        const updatedClient = await Client.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "client tidak ter-update"})
        }else{
            res.status(200).json(updatedClient);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate client"})
    }
}

export const deleteClient = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Client.destroy({where: {id}});
        res.status(200).json(deleted + ` client ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus client"})
    }
}