//Obtener todos los medicamentos con menos de 50 unidades en stock

import Medicamentos from "../models/Medicamentos.js";

const obtenerMedicamentosBajoStock = async (req, res) => {
  try {
    const medicamentosBajoStock = await Medicamentos.find({ stock: { $lt: 50 } });

    if (medicamentosBajoStock.length === 0) {
      return res.status(404).json({ message: "No se encontraron medicamentos con menos de 50 unidades en stock." });
    }

    res.json(medicamentosBajoStock);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerMedicamentosBajoStock };
