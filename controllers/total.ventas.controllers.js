//Total de medicamentos vendidos por cada proveedor

import Ventas from "../models/Ventas.js";

const obtenerTotalMedicamentosPorProveedor = async (req, res) => {
  try {
    const totalMedicamentosPorProveedor = await Ventas.aggregate([
      {
        $unwind: "$medicamentosVendidos"
      },
      {
        $group: {
          _id: "$medicamentosVendidos.proveedor.nombre",
          total: { $sum: "$medicamentosVendidos.cantidadVendida" }
        }
      }
    ]);

    if (totalMedicamentosPorProveedor.length === 0) {
      return res.status(404).json({ message: "No se encontraron ventas de medicamentos por proveedor." });
    }

    res.json(totalMedicamentosPorProveedor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerTotalMedicamentosPorProveedor };
