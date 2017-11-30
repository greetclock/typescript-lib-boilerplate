# TypeScript library boilerplate

A boilerplate for TypeScript libraries. Webpack, tests, Typedoc. Just clone, run `npm i` and start build your TypeScript library 🔥

Change `MyLib` in three files: `.eslintrc`, `examples/developing/main.js`, `webpack/common.config.js`.

Scripts:

* `npm start` and `npm run dev` - run a server with hot reloading available at `localhost:8080`.
* `npm test` and `npm run watch:test` - run tests with [Karma](https://karma-runner.github.io/1.0/index.html). Single run and watch mode.
* `npm run build` - builds and minifies your library. Also generates documentation using Typedoc. Builds in [UMD](https://github.com/umdjs/umd) format, so it can be used both in browser and Node.js.
* `npm run typedoc` - generates documentation.
* `npm run check-updates` - checks dependendency updates.

[Alexey Karpov](https://github.com/cherurg)
