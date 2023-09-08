import { Schema, model } from "mongoose";


const comprasSchema = Schema({
    
    fechaCompra: {
      type: Date,
      trim: true
    },
    proveedor: {
        type: Array,
        required: true,
        trim: true,
    }, 
    cantidadmedicamentosComprados: {
      type: Array,
      required: true,
      trim: true,
    }
  });
  
  const Compras = model("Compras", comprasSchema, "Compras");
  
  export default Compras;