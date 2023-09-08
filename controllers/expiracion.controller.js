//Medicamentos que caducan antes del 1 de enero de 2024

import Medicamentos from "../models/Medicamentos.js";

const obtenerMedicamentosCaducados = async (req, res) => {
  try {
    const fechaLimite = new Date("2024-01-01");

    const medicamentosCaducados = await Medicamentos.find({
      fechaExpiracion: { $lt: fechaLimite }
    });

    if (medicamentosCaducados.length === 0) {
      return res.status(404).json({ message: "No se encontraron medicamentos que caduquen antes del 1 de enero de 2024." });
    }

    res.json(medicamentosCaducados);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerMedicamentosCaducados };
