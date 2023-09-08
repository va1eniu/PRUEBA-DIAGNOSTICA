import Pacientes from "../models/Pacientes.js";

const getCreyente = async (req, res)=>{
   const creyentes = await Pacientes.find();
   res.json(creyentes);
}

export {
    getCreyente
};