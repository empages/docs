# Web Modules

Web modules are predefined modules for Vue app generation. Each module use mainly the EmPages and 
API endpoints defined by the developers. A little information about each web module is provided here:

## Pages Folders
Pages folders are containers for Vue pages components related to specified EmPages. For each EmPage will be 
generated a folder with components name in kebab-case. This module is simple and is mainly useful at the beginning of 
the development cycle.

## Pages Vue Components
Pages components module generates once a Vue file that contains base Vue lifecycle hooks and base
template and style:
````vue
<template>
    <h1>PageName</h1>
</template>

<script>
    export default {
        name: "PageName",
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
````

## Pages Initial States
Pages Initial States module is Vue abstractions provided from the initial state for the page in a form of 
Vuex store for the specified page. More about initial state for the EmPage and following Vue page component 
can be found on [SSR Initial State section](/guide/ssr-initial-state.html). In addition to this information is 
important to be clear that this module is locked for corrections - custom corrections to generated files are 
not recommended.

## Vue Router
This module generate the Vue router (**index.js** and **routes.js**). This module is locked and quite important for
the proper work of your web vue-based application. More about the routes and how they are related to **EmPages** 
can be found on [EmPages section](/guide/em-pages.html).

## Service Agents
This module is related to the API communication between back-end and Vue app. Again this module is locked for custom 
corrections. The result files of module are **endpoints.js** and **enums.js**. The first file contains 
instances of classes with suffix ServiceAgent which contain promise return functions that provide communication 
with the back-end API. At the beginning of the **endpoints.js** are generated all data transfer objects in comments 
which provide information for types used in generated functions. These comments are quite useful if you use
JavaScript friendly IDE. On the other hand **enums.js** provides a list of dictionaries that contains the deffinition of
used enumerations from the API endpoints.

## Translations Resources
This module is related with locales data of the system. The module use the languages and translations 
defined into locales database to generate **n** json files (where **n** is the amount of defined languages) that contains the translations for each 
translation key in format to be used easily from **i18n** package. For example if you are defined two languages 
English and Bulgarian - the result files will be **en.json** and **bg.json**.