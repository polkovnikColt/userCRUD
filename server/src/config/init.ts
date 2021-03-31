import {Connection,createConnection} from 'typeorm';
import {User} from '../user/entity/user.entity';
import {Profile} from '../profile/entity/profile.entity'

type DBConnection = {
    error: Error
}

export const initDB = async ():Promise<DBConnection> => {
    try {
        const conn:Connection = await createConnection({
            type: "postgres",
            host: "db",
            port: 5432,
            username: "postgres",
            password: "root",
            database: "user_crud",
            entities: [User,Profile],
            synchronize: true,
        });

    } catch (e) {
        return {error: e};
    }
   return {error: null};
}