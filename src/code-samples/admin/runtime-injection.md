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
Loading standard packages for execution gulp building of SCSS files + vite to bundling a Vue app.

```json
{
  "scripts": {
    "styles": "gulp default",
    "portal": "vite build --config portal.config.js"
  },
  "devDependencies": {
    "@emeraude-framework/portal-runtime-injection": "^0.1.5",
    "@vue/compiler-sfc": "^3.2.21",
    "@vitejs/plugin-vue": "^1.10.2",
    "del": "^3.0.0",
    "gulp": "^4.0.2",
    "gulp-concat": "^2.6.1",
    "gulp-cssmin": "^0.2.0",
    "gulp-sass": "^5.0.0",
    "merge-stream": "^2.0.0",
    "node-sass": "^6.0.1",
    "sass": "^1.37.5",
    "vue": "^3.2.20",
    "vue-loader": "^16.8.2",
    "vite": "^2.7.1",
    "rollup-plugin-vue": "^6.0.0"
  }
}
```

#### Bundle injection initialization
Vue injector main initialization file:

```js
// App/Portal/src/main.js
import { initializeRuntimeInjection } from "@emeraude-framework/portal-runtime-injection"
import createInsightsCustomViewComponent from "./components/insights-custom-view-component";

initializeRuntimeInjection((app, vueBundler) => {
    app.component('InsightsCustomView', createInsightsCustomViewComponent(vueBundler));
})

// App/Portal/src/components/insights-custom-view-component.js
export default function ({compile}) {
    const render = compile(`
<div>
    <div class="alert alert-warning">{{ message }}</div>
</div>
`);

    return {
        render,
        data() {
            return {
                message: 'ToDo: to create a custom view for the insights..'
            }
        },
        props: {

        },
        inject: ['$httpClient'], // injects the Portal HTTP client that has all base setup configured
        mounted() {
        }
    }
}
```

#### Vite config
Bundle configuration that takes the Vue initializer and makes the bundle that we are going to inject into the portal.

```js
// App/portal.config.js
import vue from 'rollup-plugin-vue'
import {RUNTIME_INJECTION_BUNDLE_FILE_NAME} from '@emeraude-framework/portal-runtime-injection'
import path from 'path'
import { defineConfig } from 'vite'

module.exports = defineConfig({
    plugins: [vue()],
    build: {
        outDir: path.resolve(__dirname, 'privateroot/portal'),
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, 'Portal/src/main.js'),
            formats: ['iife'],
            name: RUNTIME_INJECTION_BUNDLE_FILE_NAME,
            fileName: () => RUNTIME_INJECTION_BUNDLE_FILE_NAME
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
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
