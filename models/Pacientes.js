import { Schema, model } from "mongoose";

const pacientesSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El campo de nombre es requerido"],
    trim: true,
  },

  direccion: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
  },
});

const Pacientes = model("Pacientes", pacientesSchema, "Pacientes");

export default Pacientes;
