import { Schema, model } from "mongoose";


const proveedoresSchema = Schema({
    
    fechaCompra: {
      type: Date,
      trim: true
    },
    contacto: {
        type: String,
        required: true,
        trim: true,
    }, 
    direccion: {
      type: String,
      required: true,
      trim: true,
    }
  });
  
  const Proveedores = model("Proveedores", proveedoresSchema, "Proveedores");
  
  export default Proveedores;