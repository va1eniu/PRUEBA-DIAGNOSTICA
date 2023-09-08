import { Schema, model } from "mongoose";


const ventasSchema = Schema({
    
    fechaVenta: {
      type: Date,
      trim: true
    },
    paciente: {
        type: Array,
        required: true,
        trim: true,
    }, 
    empleado: {
      type: Array,
      required: true,
      trim: true,
    },
    medicamentosVendidos: {
        type: Array,
        required: true,
        trim: true,
      }
  });
  
  const Ventas = model("Ventas", ventasSchema, "Ventas");
  
  export default Ventas;