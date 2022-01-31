import "reflect-metadata";
// import * as Reflect from 'reflect-metadata';
//

import User from '$lib/User'

export async function handle({ event, resolve}) {
    // no-op, just here so people will stop getting confused by a "blank" hooks file
    return await resolve(event);
}

// import {createConnection} from "typeorm";
// const db = await createConnection({
//     type: "sqlite",
//     database: "./dev.sqlite",
//     entities: [
//         User,
//     ],
//     synchronize: true,
//     logging: false
// });

