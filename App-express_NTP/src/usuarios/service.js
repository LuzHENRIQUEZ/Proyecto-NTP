import { ObjectId } from "mongodb";
import { Conexion } from "../config/db.js";

const Coleccion = "usuarios";

const getUsuario = async (body) => {
    const collection = await Conexion(Coleccion);
    return await collection.find(body).toArray();
}; 

const getIdUsuarios = async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.findOne({_id: ObjectId(id)});
    return result;
};

const nuevoUsuario = async(data) => {
    const collection = await Conexion(Coleccion);
    const result = await collection.insertOne(data);
    return await result.insertedId
};

const eliminarUsuario =async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
};

const actualizarUsuario = async(id, data)=>{
    const filter = {
        _id:ObjectId (id)
    }
    const actualizarData = {
        $set:{
            usuario:data.usuario,
            password:data.password,
            email:data.email,
            tipo_usuario:data.email,
            estado:data.estado
        }
        
    }
    const collection = await Conexion(Coleccion)
    const result = await collection.updateOne(filter,actualizarData)
    return result
}

export { getUsuario, getIdUsuarios, nuevoUsuario, eliminarUsuario, actualizarUsuario };