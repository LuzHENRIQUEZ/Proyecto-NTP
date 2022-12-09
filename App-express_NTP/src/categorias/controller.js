import { Response } from "../common/response.js";
import { getCategoria, getIdCategoria, nuevaCategoria, eliminarCategoria, actualizarCategoria } from "./service.js";
const controllerCategorias = {
    getCategorias: async (req, res) => {
        try {
            const result = await getCategoria();
            Response.success(res, 200, "Lista Categorias", result)
        } catch (error) {
            Response.error(res);
        }
    },

    getCategoriasId: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await getIdCategoria(id);
            Response.success(res, 200, "Categoría Seleccionada", result);
        } catch (error) {
            Response.error
        }
    },

    crearCategorias: async (req, res) => {
        try {
            const { body } = req;
            const result = await nuevaCategoria(body);
            Response.success(res, 200, "Categoría registrada", result)
        } catch (error) {
            Response.error
        }

    },

    eliminarCategorias: async (req, res) => {
        try {
            const { params: { id } } = req
            const result = await eliminarCategoria(id)
            Response.success(res, 200, "Categoría eliminada", result)
        } catch (error) {
            Response.error(res);

        }

    },

    actualizarCategorias: async (req, res) => {
        try {
            const { body, params: { id } } = req
            const result = await actualizarCategoria(id, body)
            Response.success(res, 200, "Categoría actualizada", result)
        } catch (error) {
            Response.error(res)
        }
    }
};

export { controllerCategorias };