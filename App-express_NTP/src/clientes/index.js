import express from "express";
import { controllerClientes } from "./controller";

const router= express.Router();

const apiClientes = (app) => {
    router.get("/", controllerClientes.getClientes);
    router.get("/:id", controllerClientes.getClientesId);
    router.post("/", controllerClientes.crearClientes);
    router.delete("/:id", controllerClientes.eliminarClientes);
    router.put("/:id", controllerClientes.actualizarClientes);


    app.use("/api/clientes", router);
};

export { apiClientes };