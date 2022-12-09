import express from "express";
import { controllerProductos } from "./controller";

const router= express.Router();

const apiProductos = (app) => {
    router.get("/", controllerProductos.getProductos);
    router.get("/:id", controllerProductos.getProductosId);
    router.post("/", controllerProductos.crearProductos);
    router.delete("/:id", controllerProductos.eliminarProductos);
    router.put("/:id", controllerProductos.actualizarProductos);


    app.use("/api/productos", router);
};

export { apiProductos };