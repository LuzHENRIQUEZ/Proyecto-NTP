import express from "express";
import { controllerUsuarios } from "./controller.js";

const router= express.Router();

const apiUsuarios = (app) => {
    router.get("/", controllerUsuarios.getUsuarios);
    router.get("/:id", controllerUsuarios.getUsuariosId);
    router.post("/", controllerUsuarios.crearUsuarios);
    router.delete("/:id", controllerUsuarios.eliminarUsuarios);
    router.put("/:id", controllerUsuarios.actualizarUsuarios);


    app.use("/api/usuarios", router);
};

export { apiUsuarios };