import { Response } from "../common/response.js";
import { getProveedor, getIdProveedor, nuevoProveedor, eliminarProveedor, actualizarProveedor } from "./service.js";
const controllerProveedores = {
    getProveedores: async (req, res) => {
        try {
            const result = await getProveedor();
            Response.success(res, 200, "Lista Proveedores", result)
        } catch (error) {
            Response.error(res);
        }
    },

    getProveedoresId: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await getIdProveedor(id);
            Response.success(res, 200, "Proveedor Seleccionado", result);
        } catch (error) {
            Response.error
        }
    },

    crearProveedores: async (req, res) => {
        try {
            const { body } = req;
            const result = await nuevoProveedor(body);
            Response.success(res, 200, "Proveedor registrado", result)
        } catch (error) {
            Response.error
        }

    },

    eliminarProveedores: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await eliminarProveedor(id)
            Response.success(res, 200, "Proveedor eliminado", result)
        } catch (error) {
            Response.error(res);

        }

    },

    actualizarProveedores: async (req, res) => {
        try {
            const { body, params: { id } } = req
            const result = await actualizarProveedor(id, body)
            Response.success(res, 200, "Proveedor actualizado", result)
        } catch (error) {
            Response.error(res)
        }
    }
};

export { controllerProveedores };