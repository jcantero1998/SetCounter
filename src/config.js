import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "eu-central.connect.psdb.cloud";
export const DB_USER = process.env.DB_USER || "qrdm30ho2v7or8uatjeb";
export const DB_PASSWORD = process.env.DB_PASSWORD || "pscale_pw_9tT5FD1T0dKP7eIm0GALJ6L9BzYsTqWZ9kLgdL1G9Lt";
export const DB_DATABASE = process.env.DB_DATABASE || "setcounterdb";
export const DB_PORT = process.env.DB_DATABASE || 3306;

