---
sidebar: true
sidebarDepth: 3
title: Scaffold Modules | Client Builder | Documentation
---
# Scaffold Modules

In order to provide full control and a wide range of possibilities, the runtime generator of Emeraude Framework is 
designed to consume manually created scaffold modules. A scaffold module is an implementation of a generation module 
that contains all required definitions and references in order to provide a complete solution of code generation. To 
clarify the concept of scaffold modules please check the schema below:

<div class="text-center">
    <img class="w-auto" src="/_assets/images/scaffold-module-workflow.svg" alt="Scaffold Module Workflow"/>
</div>

Each module is an implementation of **ScaffoldModule** abstract class that contains:

- **Order** - generation order
- **Name** - name of the module used for identification as well
- **IconUrl** - icon of the module
- **ScaffoldTypeName** - type name of the module(the main use of this property is to give the name of the grouped modules)
- **Type** - instance type of the module - target application type of the generation (web, mobile, etc.)
- **ClientId** - identification of the module by client type that allows easy modules grouping
- **Files** - list of files for generation
- **Folders** - list of folders for generation
- **Locked** - flag that indicates that the module generated files is locked for changes or not

Each module implementation have to implement two core methods:

```csharp
    public override void DefineFiles()
    {
        // here you need to define the files of the module
    }

    public override void DefineFolders()
    {
        // here you need to define the folders of the module
    }
```

A sample scaffold module can be found on [here](/code-samples/client-builder/module).