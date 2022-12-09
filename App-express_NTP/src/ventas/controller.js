import { Response } from "../common/response.js";
import { getVenta, getIdVenta, nuevaVenta, eliminarVenta, actualizarVenta } from "./service.js";
const controllerVentas = {
    getVentas: async (req, res) => {
        try {
            const result = await getVenta();
            Response.success(res, 200, "Lista Ventas", result)
        } catch (error) {
            Response.error(res);
        }
    },

    getVentasId: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await getIdVenta(id);
            Response.success(res, 200, "Venta Seleccionada", result);
        } catch (error) {
            Response.error
        }
    },

    crearVentas: async (req, res) => {
        try {
            const { body } = req;
            const result = await nuevaVenta(body);
            Response.success(res, 200, "Venta registrada", result)
        } catch (error) {
            Response.error
        }

    },

    eliminarVentas: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await eliminarVenta(id)
            Response.success(res, 200, "Venta eliminada", result)
        } catch (error) {
            Response.error(res);

        }

    },

    actualizarVentas: async (req, res) => {
        try {
            const { body, params: { id } } = req
            const result = await actualizarVenta(id, body)
            Response.success(res, 200, "Venta actualizada", result)
        } catch (error) {
            Response.error(res)
        }
    }
};

export { controllerVentas };