import { Response } from "../common/response.js";
import { getUsuario, getIdUsuarios, nuevoUsuario, eliminarUsuario, actualizarUsuario } from "./service.js";

const controllerUsuarios = {
    getUsuarios: async (req, res) => {
        try {
            const user = {...req.query.user}
            console.log(req.query);
            const result = await getUsuario(user);
            Response.success(res, 200, "Lista Usuarios", result)
        } catch (error) {
            Response.error(res);
        }
    },

    getUsuariosId: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await getIdUsuarios(id);
            Response.success(res, 200, "Usuario Seleccionado", result);
        } catch (error) {
            Response.error
        }
    },

    crearUsuarios: async (req, res) => {
        try {
            const { body } = req;
            const result = await nuevoUsuario(body);
            Response.success(res, 200, "Usuario registrado", result)
        } catch (error) {
            Response.error
        }

    },

    eliminarUsuarios: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await eliminarUsuario(id)
            Response.success(res, 200, "usuario eliminado", result)
        } catch (error) {
            Response.error(res);

        }

    },

    actualizarUsuarios: async (req, res) => {
        try {
            const { body, params: { id } } = req
            const result = await actualizarUsuario(id, body)
            Response.success(res, 200, "Usuario actualizado", result)
        } catch (error) {
            Response.error(res)
        }
    }
};

export { controllerUsuarios };