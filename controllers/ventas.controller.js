import Ventas from "../models/Ventas.js";

const getCreyente = async (req, res)=>{
   const creyentes = await Ventas.find();
   res.json(creyentes);
}

export {
    getCreyente
};