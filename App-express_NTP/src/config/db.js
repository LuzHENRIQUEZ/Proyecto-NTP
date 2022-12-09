import { Config } from "./config.js";
import { MongoClient } from "mongodb";

var conection = null;
const Conexion = (collecion)=>
    new Promise(async (resolve, reject) =>{
        try {
            if (!conection) {
            const client = new MongoClient(Config.mongoUri);
            conection = await client.connect();
            console.log("conexión exitosa");
            }
            const db = conection.db(Config.mongoDBName);
            resolve (db.collection(collecion));
            resolve();
        } catch (error) {
            reject(error);
        }
    });

export { Conexion };


