This repo demonstrates how to get SvelteKit and TypeORM working together.

As of this commit, `npm run dev` now works correctly thanks to @benmccann's [awesome suggestion] to use SSR: external in Vite's settings. You can see how that works in `svelte.config.js`.

However, there's still an issue with `npm run build`:

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
