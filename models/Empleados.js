import { Schema, model } from "mongoose";


const empleadosSchema = Schema({
    nombre: {
      type: String,
      required: [true, "El campo de nombre es requerido"],
      trim: true
    },
    cargo: {
      type: String,
      required: true,
      trim: true,
    },
    fechaContratacion: {
      type: Date,
      required: true,
      trim: true,
    }
  });
  
  const Empleados = model("Empleados", empleadosSchema, "Empleados");
  
  export default Empleados;