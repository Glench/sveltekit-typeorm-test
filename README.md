This repo demonstrates how to get SvelteKit and TypeORM working together. Currently it's broken in both dev and production. [Here's some discussion on the SvelteKit repo](https://github.com/sveltejs/kit/discussions/3334).

`npm run dev` error:
```
3:42:06 PM [vite] Error when evaluating SSR module /src/lib/User.ts:
ColumnTypeUndefinedError: Column type for User#email is not defined and cannot be guessed. Make sure you have turned on an "emitDecoratorMetadata": true option in tsconfig.json. Also make sure you have imported "reflect-metadata" on top of the main entry file in your application (before any entity imported).If you are using JavaScript instead of TypeScript you must explicitly provide a column type.
    at ColumnTypeUndefinedError.TypeORMError [as constructor] (/Users/glen/tmp/sveltekit-typeorm-test/node_modules/typeorm/error/TypeORMError.js:9:28)
    at new ColumnTypeUndefinedError (/Users/glen/tmp/sveltekit-typeorm-test/node_modules/typeorm/error/ColumnTypeUndefinedError.js:13:23)
    at /Users/glen/tmp/sveltekit-typeorm-test/node_modules/typeorm/decorator/columns/Column.js:45:23
    at __decorateClass (/src/lib/User.ts:9:24)
    at eval (/src/lib/User.ts:21:1)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async instantiateModule (/Users/glen/tmp/sveltekit-typeorm-test/node_modules/vite/dist/node/chunks/dep-f5552faa.js:60105:9)
```


`npm run build` error:

```
import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from "typeorm";
                                                 ^^^^^^^^^^
SyntaxError: Named export 'BaseEntity' not found. The requested module 'typeorm' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'typeorm';
const { PrimaryGeneratedColumn, Column, Entity, BaseEntity } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:181:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
    at async prerender (file:///Users/glen/tmp/sveltekit-typeorm-test/node_modules/@sveltejs/kit/dist/chunks/index5.js:352:28)
    at async Object.prerender (file:///Users/glen/tmp/sveltekit-typeorm-test/node_modules/@sveltejs/kit/dist/chunks/index5.js:728:24)
    at async adapt (file:///Users/glen/tmp/sveltekit-typeorm-test/node_modules/@sveltejs/adapter-node/index.js:39:4)
    at async adapt (file:///Users/glen/tmp/sveltekit-typeorm-test/node_modules/@sveltejs/kit/dist/chunks/index5.js:760:2)
    at async file:///Users/glen/tmp/sveltekit-typeorm-test/node_modules/@sveltejs/kit/dist/cli.js:1053:5

Node.js v17.0.1
```

[BaseEntity is obviously part of the TypeORM library](https://github.com/typeorm/typeorm/blob/master/src/repository/BaseEntity.ts) so it's not clear to me what's going on.

Even commenting out BaseEntity, `npm run build` chokes with the same error except with `Column`.
