import Compras from "../models/Compras.js";

const obtenerAcciones = async (req, res) => {
    const accion = await Compras.find();
    res.json(accion);
  };
  
/*   const agregarAcciones = async (req, res) => {
    const accion = new Compras(req.body);
  
    try {
      const nuevaAccion = accion.save();
      res.json(nuevaAccion);
    } catch (error) {
      console.log(error);
    }
  };
  
  const borrarAcciones = async (req, res) => {
    try {
      await Compras.deleteOne({ _id: req.params.id });
      res.status(204).send();
    } catch (error) {
      res.status(404);
      res.send({ error: "categoria no existe" });
    }
  };
  
  const actualizarAcciones = async (req, res) => {
    try {
      const accion = await Compras.findOne({ _id: req.params.id });
      if (req.body.nombre) {
        accion.nombre = req.body.nombre;
      }
  
    await accion.save();
      res.send(categoria);
    } catch (error) {
      res.status(404);
      res.send({ error: "categoria no existe" });
    }
  };
  
  
  const oneAccion = async (req, res) => {
    const accion = await Compras.findOne({_id:req.params.id});
    res.json(accion);
  }; */
  
  export {
    obtenerAcciones,
   /*  agregarAcciones,
    borrarAcciones,
    actualizarAcciones,
    oneAccion, */
  };



  