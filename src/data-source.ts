import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localdb",
    port: 5432,
    username: "taqlitedb",
    password: "taqlite",
    database: "taqlite_localdb",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
