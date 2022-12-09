import { ObjectId } from "mongodb";
import { Conexion } from "../config/db.js";

const Coleccion = "proveedores";

const getProveedor = async () => {
    const collection = await Conexion(Coleccion);
    return await collection.find({}).toArray();
};

const getIdProveedor = async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.findOne({_id: ObjectId(id)});
    return result;
};

const nuevoProveedor = async(data) => {
    const collection = await Conexion(Coleccion);
    const result = await collection.insertOne(data);
    return await result.insertedId
};

const eliminarProveedor =async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
};

const actualizarProveedor = async(id, data)=>{
    const filter = {
        _id:ObjectId (id)
    }
    const actualizarData = {
        $set:{
            cod_proveedor:data.cod_proveedor,
            nombre_proveedor:data.nombre_proveedor,
            direccion:data.direccion,
            telefono:data.telefono,
            correo:data.correo
        }
        
    }
    const collection = await Conexion(Coleccion)
    const result = await collection.updateOne(filter,actualizarData)
    return result
}

export { getProveedor, getIdProveedor, nuevoProveedor, eliminarProveedor, actualizarProveedor };