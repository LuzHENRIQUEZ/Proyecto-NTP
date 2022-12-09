import express from "express";
import morgan from "morgan";
import cors from "cors";
import { apiUsuarios } from "./src/usuarios/index.js"; //se importa la funcion apiUsuarios
import { apiProductos } from "./src/productos/index.js";
import { apiCategorias } from "./src/categorias/index.js";
import { apiClientes } from "./src/clientes/index.js";
import { apiProveedores } from "./src/proveedores/index.js";
import { apiVentas } from "./src/ventas/index.js";
import { Config } from "./src/config/config.js"



const app = express();
//configuración del puerto
const puerto = Config.port? Config.port:4000;


//midware
app.use(morgan());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))

// uso de rutas
apiUsuarios(app);//usar la ruta llamar a funcion pasandole el parametro de la aplicacionación
apiProductos(app);
apiCategorias(app);
apiClientes(app);
apiProveedores(app);
apiVentas(app);

app.listen(puerto, ()=>{
    console.log('Servidor is running')
    });