import express from "express";
import { controllerProveedores } from "./controller";

const router= express.Router();

const apiProveedores = (app) => {
    router.get("/", controllerProveedores.getProveedores);
    router.get("/:id", controllerProveedores.getProveedoresId);
    router.post("/", controllerProveedores.crearProveedores);
    router.delete("/:id", controllerProveedores.eliminarProveedores);
    router.put("/:id", controllerProveedores.actualizarProveedores);


    app.use("/api/proveedores", router);
};

export { apiProveedores };