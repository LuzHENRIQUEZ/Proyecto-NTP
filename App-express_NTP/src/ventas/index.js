import express from "express";
import { controllerVentas } from "./controller";

const router= express.Router();

const apiVentas = (app) => {
    router.get("/", controllerVentas.getVentas);
    router.get("/:id", controllerVentas.getVentasId);
    router.post("/", controllerVentas.crearVentas);
    router.delete("/:id", controllerVentas.eliminarVentas);
    router.put("/:id", controllerVentas.actualizarVentas);


    app.use("/api/ventas", router);
};

export { apiVentas };