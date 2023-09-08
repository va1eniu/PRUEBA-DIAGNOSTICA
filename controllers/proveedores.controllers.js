import Proveedores from "../models/Proveedores.js";

const getCreyente = async (req, res)=>{
   const creyentes = await Proveedores.find();
   res.json(creyentes);
}

export {
    getCreyente
};