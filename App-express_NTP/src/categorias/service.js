import { ObjectId } from "mongodb";
import { Conexion } from "../config/db.js";

const Coleccion = "categorias";

const getCategoria = async () => {
    const collection = await Conexion(Coleccion);
    return await collection.find({}).toArray();
};

const getIdCategoria = async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.findOne({_id: ObjectId(id)});
    return result;
};

const nuevaCategoria = async(data) => {
    const collection = await Conexion(Coleccion);
    const result = await collection.insertOne(data);
    return await result.insertedId
};

const eliminarCategoria =async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
};

const actualizarCategoria = async(id, data)=>{
    const filter = {
        _id:ObjectId (id)
    }
    const actualizarData = {
        $set:{
            categoria:data.categoria
        }
        
    }
    const collection = await Conexion(Coleccion)
    const result = await collection.updateOne(filter,actualizarData)
    return result
}

export { getCategoria, getIdCategoria, nuevaCategoria, eliminarCategoria, actualizarCategoria };