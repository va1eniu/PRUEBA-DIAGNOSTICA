//Cantidad total de dinero recaudado por las ventas de medicamentos

import Ventas from "../models/Ventas.js";

const obtenerTotalDineroRecaudado = async (req, res) => {
  try {
    const totalDineroRecaudado = await Ventas.aggregate([
      {
        $unwind: "$medicamentosVendidos"
      },
      {
        $group: {
          _id: null,
          total: { $sum: { $multiply: ["$medicamentosVendidos.cantidadVendida", "$medicamentosVendidos.precio"] } }
        }
      }
    ]);

    if (totalDineroRecaudado.length === 0) {
      return res.status(404).json({ message: "No se encontraron ventas de medicamentos." });
    }

    res.json(totalDineroRecaudado[0].total);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerTotalDineroRecaudado };
