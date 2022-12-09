import { ObjectId } from "mongodb";
import { Conexion } from "../config/db.js";
import {actualizarProducto,getIdProducto} from '../productos/service.js'

const Coleccion = "ventas";

const getVenta = async () => {
    const collection = await Conexion(Coleccion);
    return await collection
        .aggregate([
            {'$lookup':{
                'from':'clientes',
                'localField':'cod_cliente',
                'foreignField':'_id',
                'as':'clientes'},
            },
            //{'$unwind':'$clientes'},
    
            {'$lookup':{
                'from':'productos',
                'localField':'cod_producto',
                'foreignField':'_id',
                'as':'productos'},
            },
            // {'$unwind':'$productos'},
        ])
        .toArray();
};

const getIdVenta = async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.findOne({_id: ObjectId(id)});
    return result;
};

const nuevaVenta = async(data) => {
    const { cod_producto, cod_cliente, cantidad, precio_unitario, total, fecha} = data;
    const producto = await getIdProducto(cod_producto)
    const restaPro = producto.stock - cantidad
   
    const actuaPro = {
        cod_producto:producto.cod_producto,
        producto:producto.producto,
            categoria:producto.categoria,
            proveedor:producto.proveedor,
            precio_venta:producto.precio_venta,
            stock:restaPro,
            fecha_ingreso:producto.fecha_ingreso
    } 
    await actualizarProducto(cod_producto,actuaPro)
    
    const objeto={
        cod_producto: ObjectId(cod_producto),
        cod_cliente: ObjectId(cod_cliente),
        cantidad,
        precio_unitario,
        total,
        fecha,
    };
    const collection = await Conexion(Coleccion);
    const result = await collection.insertOne(objeto);
    return result.insertedId;
};

const eliminarVenta =async(id)=>{
    const collection = await Conexion(Coleccion);
    const result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
};

const actualizarVenta = async(id, data)=>{
    const { cod_producto, cod_cliente, cantidad, precio_unitario, total, fecha} = data;
    const producto = await getIdProducto(cod_producto);
    const obtengolaventa = await getIdVenta(id);
    const collection = await Conexion(Coleccion);

    let totalres = 0

    if(cantidad < obtengolaventa.cantidad){
        totalres = obtengolaventa.cantidad - cantidad;
        const sumaPRO = totalres + producto.stock
        const actuaPro = {
            cod_producto:cod_producto,
            stock:sumaPRO
        } 
        await actualizarProducto(cod_producto, actuaPro)
        const filter = {
            _id:ObjectId (id)
        }
        const actualizarData = {
            $set:{
                cod_producto:cod_producto,
                cod_cliente:cod_cliente,
                cantidad:cantidad,
                precio_unitario:precio_unitario,
                total:total,
                fecha:fecha
            }            
        }
        const result = await collection.updateOne(filter,actualizarData)
        return result;
    } else {
        totalres = obtengolaventa.cantidad + cantidad;
        const restaPro = producto.stock - totalres;
        const actuaPro = {
            cod_producto: cod_producto,
            stock: restaPro
        }
        await actualizarProducto(cod_producto, actuaPro);
        const filter = {
            _id:ObjectId (id)
        }
        const actualizarData = {
            $set:{
                cod_producto:cod_producto,
                cod_cliente:cod_cliente,
                cantidad:cantidad,
                precio_unitario:precio_unitario,
                total:total,
                fecha:fecha
            }
        }
        const result = await collection.updateOne(filter,actualizarData)
        return result;
    }
}

export { getVenta, getIdVenta, nuevaVenta, eliminarVenta, actualizarVenta };