import { Schema, model } from "mongoose";

const medicamentosSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El campo de nombre es requerido"],
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    trim: true,
  },
  fechaExpiracion: {
    type: Date,
    required: true,
  },
  proveedor: {
    type: Array,
    required: true,
  },
});

const Medicamentos = model("Medicamentos", medicamentosSchema, "Medicamentos");

export default Medicamentos;
