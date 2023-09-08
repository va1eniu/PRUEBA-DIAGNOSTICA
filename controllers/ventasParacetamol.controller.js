//. Total de ventas del medicamento ‘Paracetamol’

import Ventas from "../models/Ventas.js";

const obtenerTotalVentasParacetamol = async (req, res) => {
  try {
    const totalVentasParacetamol = await Ventas.aggregate([
        /*
          Este paso descompone una lista de medicamentos vendidos en pedazos individuales
          para que podamos contarlos uno por uno. Es como separar los caramelos en un paquete
          para contar cuántos hay.
        */
        {
          $unwind: "$medicamentosVendidos"
        },
      
        /*
          Aquí seleccionamos solamente los medicamentos que se llaman "Paracetamol".
          Imagina que tienes una caja de crayones y solo quieres contar cuántos crayones verdes hay.
        */
        {
          $match: {
            "medicamentosVendidos.nombreMedicamento": "Paracetamol"
          }
        },
      
        /*
          Ahora juntamos todos los Paracetamol que encontramos y sumamos cuántos de ellos hay en total.
          Es como contar todos los crayones verdes que encontraste en la caja.
        */
        {
          $group: {
            _id: null,
            total: { $sum: "$medicamentosVendidos.cantidadVendida" }
          }
        }
      ])
      

    if (totalVentasParacetamol.length === 0) {
      return res.status(404).json({ message: "No se encontraron ventas de Paracetamol." });
    }

    res.json({ totalVentasParacetamol: totalVentasParacetamol[0].total });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerTotalVentasParacetamol };
