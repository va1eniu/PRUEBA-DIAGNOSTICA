//Obtener recetas médicas emitidas después del 1 de enero de 2023

import Ventas from "../models/Ventas.js";

const obtenerVentasDespuesDeEnero2023 = async (req, res) => {
  try {
    const fechaLimite = new Date("2023-01-01T00:00:00.000Z");

    const ventas = await Ventas.find({ fechaVenta: { $gt: fechaLimite } });

    if (ventas.length === 0) {
      return res.status(404).json({ message: "No se encontraron ventas realizadas después del 1 de enero de 2023." });
    }

    res.json(ventas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { obtenerVentasDespuesDeEnero2023 };
