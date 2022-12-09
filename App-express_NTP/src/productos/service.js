import { ObjectId } from "mongodb";
import { Conexion } from "../config/db.js";

const Coleccion = "productos";

const getProducto = async () => {
    const collection = await Conexion(Coleccion);
    return await collection.find({}).toArray();
};

const getIdProducto = async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.findOne({_id: ObjectId(id)});
    return result;
};

const nuevoProducto = async(data) => {
    const collection = await Conexion(Coleccion);
    const result = await collection.insertOne(data);
    return await result.insertedId
};

const eliminarProducto =async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
};

const actualizarProducto = async(id, data)=>{
    const filter = {
        _id:ObjectId (id)
    }
    const actualizarData = {
        $set:{
            cod_producto:data.cod_producto,
            producto:data.producto,
            categoria:data.categoria,
            proveedor:data.proveedor,
            precio_venta:data.precio_venta,
            fecha_ingreso:data.fecha_ingreso,
            stock:data.stock
        }
        
    }
    const collection = await Conexion(Coleccion)
    const result = await collection.updateOne(filter,actualizarData)
    return result
}

export { getProducto, getIdProducto, nuevoProducto, eliminarProducto, actualizarProducto };