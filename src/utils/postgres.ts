import { Pool } from 'pg';

let conn!: Pool;

if (!conn) {
        conn = new Pool({
            user: 'postgres',
            password: '123',
            host: '127.0.0.1',
            port: 5432,
            database: 'tasksdb'
        })
}

export { conn };
