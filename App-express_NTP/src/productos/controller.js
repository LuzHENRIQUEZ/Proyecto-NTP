import { Response } from "../common/response.js";
import { getProducto, getIdProducto, nuevoProducto, eliminarProducto, actualizarProducto } from "./service.js";
const controllerProductos = {
    getProductos: async (req, res) => {
        try {
            const result = await getProducto();
            Response.success(res, 200, "Lista Productos", result)
        } catch (error) {
            Response.error(res);
        }
    },

    getProductosId: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await getIdProducto(id);
            Response.success(res, 200, "Producto Seleccionado", result);
        } catch (error) {
            Response.error
        }
    },

    crearProductos: async (req, res) => {
        try {
            const { body } = req;
            const result = await nuevoProducto(body);
            Response.success(res, 200, "Producto registrado", result)
        } catch (error) {
            Response.error
        }

    },

    eliminarProductos: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await eliminarProducto(id)
            Response.success(res, 200, "Producto eliminado", result)
        } catch (error) {
            Response.error(res);

        }

    },

    actualizarProductos: async (req, res) => {
        try {
            const { body, params: { id } } = req
            const result = await actualizarProducto(id, body)
            Response.success(res, 200, "Producto actualizado", result)
        } catch (error) {
            Response.error(res)
        }
    }
};

export { controllerProductos };