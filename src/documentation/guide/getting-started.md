---
sidebar: true
sidebarDepth: 3
title: Getting Started | Documentation
---
# Getting Started

At the first sight, the integration of Emeraude is nothing else than an installation of a few packages. But as you 
see the architecture of the framework is not just a project with external packages. To follow the best structure 
for your project using Emeraude we suggest you use our built-in command-line interface. You have to know that, 
the whole application depends on the proper setup of the environment. So in case you want to start your application 
with Emeraude, we suggest you follow the steps described below:

## Development Environment
The framework is based on ASP.NET back-end to start using Emeraude you must set up the following SDKs and tools:

### .NET 6
.NET 6 is a cross-platform version of .NET SDK for building websites, services, and console apps. This is the core 
for applications built with Emeraude, so its existence is a must. In case you do not have it on your machine you can 
download it from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).

### Database
The Persistence component of the application must be represented from one of the following databases:

#### Microsoft SQL Server
Installation and configuration of Microsoft SQL Server is specific on different operating systems.
We personally recommend development on Windows but the nature of .NET allows development on other
operating systems.

In case you set up the MS SQL Server on Windows use the following instructions - 
[SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server).

In case you set up the MS SQL Server on macOS the procedure is a little more complicated because
the installation requires the Docker. Of course, it is not a rocket science, and you can handle it by
using the following instructions - 
[Run SQL Server container images with Docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker).

#### Postgres
Installation and configuration of Postgres is not a huge challenge. You can follow the instructions from the 
[Postgres official website](https://www.postgresql.org/).
In addition, if you are a macOS user you can use brew:
```
$ brew install postgresql
```

In case you prefer to use the Postgres container - Docker is another option for you.

#### Other database

If you decide to use another database, different from the officially supported by the Emeraude - the framework 
provide an API to configure it manually.

### Emeraude CLI

The CLI purpose is to provide simple commands for the creation of
back-end components like the initial startup project, application requests, pages, etc.
You can find the package on NuGet - [Emeraude.Cli](https://www.nuget.org/packages/Emeraude.Cli/) or you can
directly install it on your machine by using .NET CLI:
```
dotnet tool install --global Emeraude.Cli
```
The trigger command for this tool is ``em``.

### Entity Framework Core tools
The Entity Framework Core tools help with design-time development tasks. They're primarily used to manage
Migrations and to scaffold a DbContext and entity types by reverse engineering the schema of a database.
To install this tool you can use the following command:
```
dotnet tool install --global dotnet-ef
```

## Startup project
To start with **Emeraude** you have a few options - to set up new project and create each project file by yourself,
to clone some repository with ready to use project, or you can use **Emeraude CLI**. By execute the command
```
em create -n MyProjectName
```
the CLI will create for you a new project by cloning the [Template](https://github.com/emeraudeframework/template) repository and
rename all files and namespaces with the name of your project.
Your project is going to have the following structure:
- **MyProjectName** - contains the main web project (presentation layer of the application)
- **MyProjectName.Application** - contains the application requests and contracts
- **MyProjectName.Domain** - contains the domain of the application
- **MyProjectName.Infrastructure** - contains the implementation of the services required by application and the Emeraude Framework
- **MyProjectName.Admin** - contains all EmPages schemas and all required services of the context of Emeraude administration
- **MyProjectName.ClientBuilder** - contains all defined scaffold modules used for runtime generation

::: tip
Consider that you have to install all dependency packages by using
``dotnet restore`` for the .NET dependencies and ``npm install`` or ``yarn`` (based on preferred package manager) for
the JavaScript dependencies.
:::
