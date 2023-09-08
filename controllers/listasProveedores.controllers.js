import Medicamentos from "../models/Medicamentos.js";

const listarProveedoresMedicamentos = async (req, res) => {
  try {
    const todosLosMedicamentos = await Medicamentos.find();

    if (todosLosMedicamentos.length === 0) {
      return res.status(404).json({ message: "No se encontraron medicamentos en la base de datos." });
    }

    const proveedores = {};

    todosLosMedicamentos.forEach((medicamento) => {
      const proveedor = medicamento.proveedor;

      if (!proveedores[proveedor.nombre]) {
        proveedores[proveedor.nombre] = {
          proveedor: proveedor.nombre,
          contacto: proveedor.contacto,
        };
      }
    });

    const listaProveedores = Object.values(proveedores);

    res.json(listaProveedores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { listarProveedoresMedicamentos };
