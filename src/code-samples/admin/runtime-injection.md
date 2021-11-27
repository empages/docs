---
sidebar: true
sidebarDepth: 3
title: Runtime Injection | Code Samples
---
# Runtime Injection

The target goal of proper runtime injection is the existence of two files in the private root of your application:
- **runtime-injection.bundle.min.js** @ ./privateroot/portal
- **runtime-injection.style.min.css** @ ./privateroot/portal

#### Packages
Loading standard packages for execution gulp building of SCSS files + webpack to bundle a Vue app.

```json
{
  "scripts": {
    "styles": "gulp default",
    "portal": "webpack --config webpack.portal.config.js"
  },
  "devDependencies": {
    "del": "^3.0.0",
    "gulp": "^4.0.2",
    "gulp-concat": "^2.6.1",
    "gulp-cssmin": "^0.2.0",
    "gulp-sass": "^5.0.0",
    "merge-stream": "^2.0.0",
    "node-sass": "^6.0.1",
    "sass": "^1.37.5",
    "vue": "^3.2.20",
    "webpack": "^5.61.0",
    "webpack-cli": "^4.9.1",
    "@emeraude-framework/portal-runtime-injection": "^0.1.5",
    "@vue/compiler-sfc": "^3.2.21",
    "vue-loader": "^16.8.2"
  }
}
```

#### Bundle injection initialization
Actual Vue initializer of runtime injector.

```js
// App/Portal/src/main.js
import { initializeRuntimeInjection } from "@emeraude-framework/portal-runtime-injection"
import mixins from "./plugins/mixins";
import components from './plugins/components'

export default initializeRuntimeInjection((app) => {
    app.use(mixins);
    app.use(components);
});
```

#### Webpack config
Bundle configuration that takes the Vue initializer and makes the bundle that we are going to inject into the portal.

```js
// App/webpack.portal.config.js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { RUNTIME_INJECTION_BUNDLE_FILE_NAME } = require('@emeraude-framework/portal-runtime-injection');

module.exports = {
    entry: './Portal/src/main.js',
    output: {
        filename: RUNTIME_INJECTION_BUNDLE_FILE_NAME,
        path: path.resolve(__dirname, 'privateroot/portal'),
    },
    mode: 'production',
    resolve: {
        alias: {
            vue: "@vue/runtime-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
```

#### Gulp config
Configuration for building SCSS files into a CSS file that we are going to inject into the portal.

```js
const gulp = require("gulp"),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    cssmin = require('gulp-cssmin');

const { RUNTIME_INJECTION_STYLE_FILE_NAME } = require("emeraude-portal-runtime-injection");

gulp.task('portal-styles', () =>
    gulp.src('./Portal/style/**/*.scss')
        .pipe(sass())
        .pipe(cssmin({ keepSpecialComments: 0 }))
        .pipe(concat(RUNTIME_INJECTION_STYLE_FILE_NAME))
        .pipe(gulp.dest('./privateroot/portal/'))
);

gulp.task('default', gulp.series('portal-styles'));
```
