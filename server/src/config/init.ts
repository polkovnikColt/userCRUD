import {Connection,createConnection} from 'typeorm';

export const initDB = async ():Promise<boolean> => {
    const conn:Connection = await createConnection({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "root",
        "database": "user_crud"
    });

   return conn.isConnected;
}