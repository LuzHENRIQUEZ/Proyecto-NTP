import express from "express";
import { controllerCategorias } from "./controller";

const router= express.Router();

const apiCategorias = (app) => {
    router.get("/", controllerCategorias.getCategorias);
    router.get("/:id", controllerCategorias.getCategoriasId);
    router.post("/", controllerCategorias.crearCategorias);
    router.delete("/:id", controllerCategorias.eliminarCategorias);
    router.put("/:id", controllerCategorias.actualizarCategorias);


    app.use("/api/categorias", router);
};

export { apiCategorias };