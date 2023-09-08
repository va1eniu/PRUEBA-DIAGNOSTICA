import express from "express";
import cors from "cors";
import conectarDB from "../database/config.js";
import RouterMedi from "../routes/medicamentos.routes.js";
import RouterPacien from "../routes/pacientes.routes.js";
import RouterEmple from "../routes/empleados.routes.js";
import RouterProvee from "../routes/proveedores.routes.js";
import RouterVentas from "../routes/ventas.routes.js";
import RouterListasPro from "../routes/listarProveedores.routes.js";
import RouterRMedi from "../routes/recetasMedi.routes.js";
import RouterVentasP from "../routes/ventasPara.croutes.js";
import RouterExpiracion from "../routes/expiracion.routes.js";
import RoutertotalV from "../routes/totalventas.routes.js";
import RouterRecau from "../routes/recaudado.routes.js";
import RouterMediCaro from "../routes/mediCaro.routes.js";


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.connect();
    this.paths = {
      mediPath : "/medicamentos",
      pacienPath : "/pacientes",
      emplePath : "/empleados",
      proveePath : "/proveedores",
      ventasPath : "/ventas",
      listarProPath : "/listarPro",
      rmediPath : "/recetasmedi",
      vParaPath : "/ventasParacentamol",
      expiPath : "/expiracion",
      totalVPath : "/totalVentas",
      recauPath : "/totalRecaudado",
      mediCaroPath : "/medicamentoCaro",


  }

   
    this.routes();

 
  }
  async connect() {
    await conectarDB();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.use(this.paths.mediPath, RouterMedi)
    this.app.use(this.paths.pacienPath, RouterPacien)
    this.app.use(this.paths.emplePath, RouterEmple)
    this.app.use(this.paths.proveePath, RouterProvee)
    this.app.use(this.paths.ventasPath, RouterVentas)
    this.app.use(this.paths.listarProPath, RouterListasPro)
    this.app.use(this.paths.rmediPath, RouterRMedi)
    this.app.use(this.paths.vParaPath, RouterVentasP)
    this.app.use(this.paths.expiPath, RouterExpiracion)
    this.app.use(this.paths.totalVPath, RoutertotalV)
    this.app.use(this.paths.recauPath, RouterRecau)
    this.app.use(this.paths.mediCaroPath, RouterMediCaro)

  }
 
  listen() {
    this.app.listen(this.port, () => {
      console.log(`hi from port ${this.port}`);
    });
  }
}
export default Server;
