# Introduction
**Emeraude Client Builder** is a scaffold tool integrated into web application (administration part). 
This feature provides to developers the ability to generate additional repeatable code by using specified 
by **Emeraude** or by them pattern.

![Client Builder](/assets/images/client_builder_index.png)

The main purpose of Client Builder modules is to provide the communication between ASP.NET Core Web API and web/mobile application. 
In addition to these modules a custom modules can be created which could provide a lot of improvements into the 
development process.

::: warning DEVELOPMENT ONLY
**Emeraude Client Builder** is available only for administrators and each of its components (back-end and front-end)
will be disabled when the application goes out of development mode.
:::

## Module Definition
Each module is defined by few elements:
- **Name** - Name of the module.
- **Locked** - Indicates that the module result files are locked for custom manipulation. (Regeneration will 
override the existing file if module is marked as *Locked*)
- **Type** - The instance type of the module (Undefined/Web/Mobile).

The dark gray button on the right trigger module generation.

::: tip BULK GENERATION
By using the predefined modules generation buttons placed above of modules table 
you will trigger generation for all modules from the specified type.
:::