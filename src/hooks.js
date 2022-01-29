import "reflect-metadata";
// import * as Reflect from 'reflect-metadata';
//

import User from '$lib/User'

import {createConnection} from "typeorm";
const db = await createConnection({
    type: "sqlite",
    database: "./dev.sqlite",
    entities: [
        User,
    ],
    synchronize: true,
    logging: false
});

