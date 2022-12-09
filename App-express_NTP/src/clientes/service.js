import { ObjectId } from "mongodb";
import { Conexion } from "../config/db.js";

const Coleccion = "clientes";

const getCliente = async () => {
    const collection = await Conexion(Coleccion);
    return await collection.find({}).toArray();
};

const getIdCliente = async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.findOne({_id: ObjectId(id)});
    return result;
};

const nuevoCliente = async(data) => {
    const collection = await Conexion(Coleccion);
    const result = await collection.insertOne(data);
    return await result.insertedId
};

const eliminarCliente =async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
};

const actualizarCliente = async(id, data)=>{
    const filter = {
        _id:ObjectId (id)
    }
    const actualizarData = {
        $set:{
            cod_cliente:data.cod_cliente,
            nombre_cliente:data.nombre_cliente,
            direccion:data.direccion,
            telefono:data.telefono,
            correo:data.correo
        }
        
    }
    const collection = await Conexion(Coleccion)
    const result = await collection.updateOne(filter,actualizarData)
    return result
}

export { getCliente, getIdCliente, nuevoCliente, eliminarCliente, actualizarCliente };