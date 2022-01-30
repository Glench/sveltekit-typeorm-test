This repo was made to demonstrate how SvelteKit doesn't seem to work with TypeORM. Try running `npm run dev --` and loading http://localhost:3000 to see the errors that are created.

The required reflect-metadata library and "emitDecoratorMetadata" and "experimentalDecorators" in tsconfig are all there so it should work. Except it doesn't:

```
reflect-metadata doesn't appear to be written in CJS, but also doesn't appear to be a valid ES module (i.e. it doesn't have "type": "module" or an .mjs extension for the entry point). Please contact the package author to fix.
```

```
ColumnTypeUndefinedError: Column type for User#id is not defined and cannot be guessed. Make sure you have turned on an "emitDecoratorMetadata": true option in tsconfig.json. Also make sure you have imported "reflect-metadata" on top of the main entry file in your application (before any entity imported).If you are using JavaScript instead of TypeScript you must explicitly provide a column type.
    at ColumnTypeUndefinedError.TypeORMError [as constructor] (/Users/glen/tmp/sveltekit-typeorm-test/node_modules/typeorm/error/TypeORMError.js:9:28)
    at new ColumnTypeUndefinedError (/Users/glen/tmp/sveltekit-typeorm-test/node_modules/typeorm/error/ColumnTypeUndefinedError.js:13:23)
    at /Users/glen/tmp/sveltekit-typeorm-test/node_modules/typeorm/decorator/columns/PrimaryColumn.js:33:19
    at __decorateClass (/src/lib/User.ts:9:24)
    at eval (/src/lib/User.ts:18:1)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async instantiateModule (/Users/glen/tmp/sveltekit-typeorm-test/node_modules/vite/dist/node/chunks/dep-f5552faa.js:60105:9)```
