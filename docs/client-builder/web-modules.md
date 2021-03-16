# Web Modules

Web modules are predefined modules for Vue app generation. Each module use mainly the EmPages and 
API endpoints defined by the developers. Basic information about each web module is provided here:

## Vue EmPages
The main purpose of the module is to generate the folders and related components for each EmPage. This module is simple and is 
mainly useful at the beginning of the development cycle. Pages module generates once a Vue file that contains base 
Vue lifecycle hooks and base template.

## Vue Routes
This module generates the Vue router (**index.js** and **routes.js**). This module is locked and quite important for
the proper work of your web vue-based application. More about the routes and how they are related to **EmPages** 
can be found on [EmPages section](/client/em-pages.html).

## Vue Web API
This module is related to the API communication between back-end and Vue app. Again this module is locked for custom 
corrections. The result files of module are **endpoints.js**, **types.js** and **enums.js**. 
The **endpoints.js** contains instances of classes with a suffix ServiceAgent which contain promise return functions that 
provide communication with the back-end API.
The **types.js** includes all data transfer object types extracted from the endpoints and bundled into a classes and comments.
The comments might be very useful if you use JavaScript friendly IDE.
The **enums.js** provides a list of dictionaries that contains the definition of used enumerations from the API endpoints.
In addition, for each enumeration is created a help object that contains the enumeration translation keys and their relative values.

## Vue Translations Resources
This module is related with locales data of the system. The module uses the languages and translations 
defined into locales database to generate **n** json files (where **n** is the amount of defined languages) that contains the translations for each 
translation key in a format to be used easily from **i18n** package. For example if you are defined two languages 
English and Bulgarian - the result files will be **en.json** and **bg.json**. In addition to these JSON files an i18n configuration file
will be generated.

## Vue Static Content
This module generates a component for each static content key with option for the language of the current request.
The result file of the module is locked for modify, so it is not recommended being changed outside the client builder interface.
A sample component file is shown on the code below:
````vue
<template>
    <div id="static-content-login-agreement">
        <div v-if="languageId === 1">
            <p>By submit the form you are agree with our <a target="_blank" href="/terms-of-use">Terms of Use</a> and <a target="_blank" href="/privacy">Privacy Policy</a>.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginAgreementStaticContent",
        props: {
            languageId: {
                type: Number,
                default: 1
            }
        }
    }
</script>
````

## Vue Constants
This module generates **constants.js** from specified classes types which contains public constants. The module is configurable
which means you have to specify which types will be scanned for data extraction.
```cs
services.AddEmeraudeClientBuilder(options =>
{
    // ...
    options.ConstantsTypes.Add(typeof(SomeConstants));
    // ...
});
```
