import { Response } from "../common/response.js";
import { getCliente, getIdCliente, nuevoCliente, eliminarCliente, actualizarCliente } from "./service.js";
const controllerClientes = {
    getClientes: async (req, res) => {
        try {
            const result = await getCliente();
            Response.success(res, 200, "Lista Clientes", result)
        } catch (error) {
            Response.error(res);
        }
    },

    getClientesId: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await getIdCliente(id);
            Response.success(res, 200, "Cliente Seleccionado", result);
        } catch (error) {
            Response.error
        }
    },

    crearClientes: async (req, res) => {
        try {
            const { body } = req;
            const result = await nuevoCliente(body);
            Response.success(res, 200, "Cliente registrado", result)
        } catch (error) {
            Response.error
        }

    },

    eliminarClientes: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await eliminarCliente(id)
            Response.success(res, 200, "Cliente eliminado", result)
        } catch (error) {
            Response.error(res);

        }

    },

    actualizarClientes: async (req, res) => {
        try {
            const { body, params: { id } } = req
            const result = await actualizarCliente(id, body)
            Response.success(res, 200, "Cliente actualizado", result)
        } catch (error) {
            Response.error(res)
        }
    }
};

export { controllerClientes };