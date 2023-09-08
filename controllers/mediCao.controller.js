//Obtener el medicamento más caro

import Medicamentos from "../models/Medicamentos.js";

const obtenerMedicamentoMasCaro = async (req, res) => {
  try {
    const medicamentoMasCaro = await Medicamentos.findOne().sort({ precio: -1 });

    if (!medicamentoMasCaro) {
      return res.status(404).json({ message: "No se encontraron medicamentos en la base de datos." });
    }

    res.json(medicamentoMasCaro);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerMedicamentoMasCaro };
