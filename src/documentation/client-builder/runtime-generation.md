---
sidebar: true
sidebarDepth: 3
title: Runtime Generation | Client Builder | Documentation
---
# Runtime Generation

Code generation is part of today's daily basis of every developer. Almost every framework and platform provides built-in 
functionalities to generation and scaffolding. Nowadays we can recognize a few types of generators - external (CLI 
tools, IDE, other applications) and internal (source generators, runtime generators). The main difference between both 
is the fact the external generators are made to fit the generic need of code generation while the internal is mostly 
custom and fits the requirements of our application itself.
Emeraude is designed with the idea to provide developers the ability to boost their performance so that's why when you 
use Emeraude Framework - you have integrated runtime generator out of the box. The idea of this generator is to provide 
a simple way to generate client code in order to skip the repeatable parts of the system.

The generation concept in the Emeraude is called Client Builder. This is an integrated feature designed specially to 
help you to generate any kind of pattern-based source code.
The main purpose of Client Builder is to use application data, source code, and custom data to generate ready-to-use 
code for application purposes. Each data item that can provide useful information for automation is called Building 
Entity.

::: warning IMPORTANT
Client Builder is a feature of Emeraude Framework that works only in **development** environment!
:::

The accessibility of available data could be reached in many ways, and it mainly depends on the skills and 
strengths of the developers. We could provide you with a few ways to extract data for the purposes of Emeraude Client 
Builder.

## Databases
The clearest data providers of any system are the databases. For the purposes of lots of generations, the database could 
be not the right source of truth but consider that any application might need different things and sometimes the 
database could be the right choice.

## Assembly Scanning
This is the most useful way to extract data for generation and eventually the most applicable for most of the cases. 
The assembly scanning of classes/methods can be applied in many ways but the most useful in our opinion are:

- Attributes - We decorate a class/property/method with a specific annotation.
- Interfaces / Abstract classes - The target classes inherit a predefined interface or an abstract class.
- Naming convention - A class has specific name (DogPage, CatPage, MousePage).
- Directory/Namespace-based - We place the target classes into the specified directory.

## Custom Data
This is the most direct way to get data for the generation. In this way, we use custom file/s written manually or 
generated from third-party software. Most of the cases we could use a .json, .xml, .yml, .csv or any other file type 
which is proper for configuration storage.