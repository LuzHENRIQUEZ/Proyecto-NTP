import dotenv from "dotenv";

dotenv.config();

const Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDBName: process.env.MONGO_DB_NAME
};

export {Config};