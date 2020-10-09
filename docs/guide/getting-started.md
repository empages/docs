# Getting Started
On the first sight the integration of **Emeraude** is nothing else than an installation of few
packages. But as you see the architecture of the framework is not just a project with external 
packages. To follow the best structure for your project using **Emeraude** we suggest you to use 
our built command line interfaces for both scaffolding and bundle packaging of your application.
Of course all of the framework helping tool are useless if you do not have the right environment.
So in case you want to start an application by using **Emeraude** we suggest you to set up the 
following development environment:

## Development Environment
The framework is based on ASP.NET Core back-end and Vue.js/Xamarin front-end so to start using
**Emeraude** you must set up the following SDKs and tools:

### {{ $themeConfig.constants.dotNetSdk }}
.NET Core is a cross-platform version of .NET for building websites, services, and console apps.
This is the core for applications built with **Emeraude** so it is a must to be installed the 
latest version of the {{ $themeConfig.constants.dotNetSdk }}. The current version used from current framework is {{ $themeConfig.constants.dotNetVersion }} so 
in case you do not have it on your machine you can download it from [here](https://dotnet.microsoft.com/download).

### Node.js
Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code 
outside a web browser. The scope where it is needed is the pre-rendering and building of the JavaScript
resources (mainly Vue.js) of the framework including. We suggest you to use the latest version of Node.js which
can be downloaded from [their website](https://nodejs.org/en/) or you can use additional third party tools.
The package manager (npm or yarn) you will choose for node packages is depending on you. We prefer yarn but
the choice is yours.

### Database
The Persistence component of the application must be represented from one of the following databases:

#### Microsoft SQL Server
Installation and configuration of Microsoft SQL Server is specific on different operation systems.
We personally recommend development on Windows but the nature of .NET Core allows development on other 
operation systems. 

In case you setup the MS SQL Server on Windows use the following instructions - [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server).

In case you setup the MS SQL Server on MacOS the procedure is a little bit more complicated because 
the installation requires the Docker. Of course it is not a rocket science and you can handle it by 
using the following instructions - [Run SQL Server container images with Docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker).

### Tools
**Emeraude** is a collection of many components and libraries which complexity gives the power of the framework.
Of course the idea **Emeraude** is not to hard to use it. The idea of the framework is to write less code with predefined 
structure and easy for creation and support components. That's why the Definux provides two custom command line interfaces
specially created for the purposes of the **Emeraude**.

#### Emeraude CLI
The main CLI of the framework is the .NET one. Its purpose is to provide simple commands for the creation of 
back-end components like the initial startup project, application requests, pages, etc.
You can find the package on NuGet - [Definux.Emeraude.Cli](https://www.nuget.org/packages/Definux.Emeraude.Cli/) or you can
directly install it on your machine by using .NET CLI:
```
dotnet tool install --global Definux.Emeraude.Cli
```
The trigger command for this tool is ``em``.

#### Emeraude Bundle Builder CLI
This is helping tool created only for the purposes of **Emeraude** - to build the Vue.js application and create
the server and client bundles for running the SSR and SPA functionality of the target application. The CLI is available
on the npm - [@definux/emeraude-cli](https://www.npmjs.com/package/@definux/emeraude-cli)  or you can 
directly install it on your machine by using your package manager:

For npm:
```
npm install -g @definux/emeraude-cli
```

For yarn:
```
yarn global add @definux/emeraude-cli
```
The trigger command for this tool is ``empack``.

#### Entity Framework Core tools
The Entity Framework Core tools help with design-time development tasks. They're primarily used to manage 
Migrations and to scaffold a DbContext and entity types by reverse engineering the schema of a database.
To install this tool you can use the following command:
```
dotnet tool install --global dotnet-ef
```

### Xamarin
Xamarin is a free and open source mobile app platform for building native and high-performance iOS, Android, tvOS, 
watchOS, macOS, and Windows apps. In case you will want to create a mobile application in addition to the 
web application you have to install all required SDKs and tools of the platform including the Android and/or 
iOS components. We suggest to follow the official Microsoft documentation for that purpose - 
[Xamarin Documentation](https://dotnet.microsoft.com/learn/xamarin/hello-world-tutorial/intro).

## Startup project
To start with **Emeraude** you have a few options - to set up new project and create each project file by yourself, 
to clone some repository with ready to use project, or you can use **Emeraude CLI**. By execute the command
```
em create -n MyProjectName
```
the CLI will create for you a new project by clone the [EmDoggo](https://github.com/Definux/EmDoggo) repository and 
rename all files and namespaces with the name of your project. So that's it. Your project is created. 
Your project is going to have the following structure:
- **MyProjectName** - (folder contains the main web project (presentation layer of the application))
- **MyProjectName.Application** - (folder contains the application requests and contracts)
- **MyProjectName.Domain** - (folder contains the domain of the application)
- **MyProjectName.Infrastructure** - (folder contains the implementation of the services required by application and the **Emeraude** framework)

The things you have to do before start configure your project is to install all dependency packages by using
``dotnet restore`` for the .NET dependencies and ``npm install`` or ``yarn`` (based on preferred package manager) for 
the JavaScript dependencies.

## Configuration
The proper setup is very important for the right work of the application and the framework. In **Emeraude**
there are a few configuration files:

### appsettings.json
If you are using ASP.NET Core it will be known for you that this is the main configuration file. It is not 
different in case you use **Emeraude**. There are a few specific configuration keys for your application which 
will be read by the framework.

#### Database connection string
```json
"ConnectionStrings": {
  "DatabaseConnection": "{{ your database connection string }}"
},
```
Based on the type of the database your connection string can be in different format. All different formats
can be found at [www.connectionstrings.com](https://www.connectionstrings.com/).

#### JSON web token
```json
"JsonWebTokenOptions": {
  "Key": "{{ your secret key for bearer authentication via JWT }}",
  "Issuer": "{{ the base path from which is issued the token (https://localhost:44354/ | https://myappdomain.com/) }}"
},
```
This option is required in case you use bearer authentication in your application. 

#### Google reCAPTCHA options
```json
"GoogleRecaptchaKeysOptions": {
  "VisibleRecaptcha": {
    "SiteKey": "{{ your Google reCAPTCHA instance site key }}",
    "SecretKey": "{{ your Google reCAPTCHA instance secret key }}",
    "VerifyInDevelopment": false
  }
},
```
This option is required because in production **Emeraude** admin panel authentication requires a valid reCAPTCHA response.
The flag `VerifyInDevelopment` is used to activate reCAPTCHA in development environment (for testing purposes mainly).
Because these options are instances of **Definux.Utilities.Options.RecaptchaKeys** an option for invisible reCAPTCHA is 
available too but for the purposes of **Emeraude** is not applicable.

#### External OAuth2 providers options
```json
"ExternalOAuth2ProviderOptions": {
  "FacebookSettings": {
    "AppId": "{{ Facebook application id }}",
    "AppSecret": "{{ Facebook application secret }}"
  },
  "GoogleSettings": {
    "ClientId": "{{ Google client id }}",
    "ClientSecret": "{{ Google client secret }}"
  }
},
```
Apply these options in case you want to use external authentication via Facebook and/or Google. These authentication providers 
are built-in and in case you want to use different provider you have to implement your own options.

#### SMTP options
```json
"SmtpOptions": {
  "Host": "{{ mail server host }}",
  "Port": {{ mail server port (integer) }},
  "UseSSL": {{ mail server ssl connection (boolean) }},
  "Name": "{{ sender name }}",
  "Username": "{{ sender username }}",
  "EmailAddress": "{{ sender email }}",
  "Password": "{{ sender password }}"
},
```
This options is required if you want to send emails via integrated email sender from the **Emeraude** infrastructure.

The ASP.NET Core configuration file is nothing special than normally so if you want to use different files for development (appsettings.Development.json) 
and production (appsettings.Production.json) you can.

### emeraude.config.js
This file is the main configuration file for client part of the application. If you are familiar with WebPack this configuration wont be 
a challenge for you.
```js
const emeraudeConfig = require('emeraude-config');

module.exports = () => {
    return emeraudeConfig({
        appEntry: './ClientApp/main.js',
        publicPath: '/dist',
        serverConfig: {
            // Here comes the server bundle configuration
        },
        clientConfig: {
            // Here comes the client bundle configuration
        }
    });
};
```
In general all requirements are setup from the configuration package (emeraude-config) but in case you want to set up your
custom configuration you are free to do it following configuration structure:
- **appEntry** - defines the path to startup file for your Vue.js application
- **publicPath** - defines the path to the folder where will be generated the bundles from your Vue.js application
- **serverConfig** - defines the WebPack configuration for the bundle used form the Node.js on the server side for pre-rendering the current view of the Vue.js application
- **clientConfig** - defines the WebPack configuration for the bundle used form the client's browser for initialize the Vue.js application 

In most cases the `serverConfig` is staying empty because most of the specific configuration are required for runtime operations.

### gulpfile.js
As expected this is the configuration for Gulp. In **Emeraude** we recommend the usage of Gulp for static resources like styles and scripts.
The default configuration which comes from the CLI is set up for styles only (SCSS to CSS compilation). This configuration is independent from
the application and it is your decision to use it or not.