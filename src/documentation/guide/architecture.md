---
sidebar: true
sidebarDepth: 3
title: Architecture | Documentation
---
# Architecture

Emeraude Framework is designed to fit the goals of applications built on top of Clean Architecture. Of course the 
nature of that architecture is onion-based so the framework could fit it as well.

On the figure below you can see the schema of application built on top of Emeraude Framework:

<div class="text-center">
    <img class="w-auto" src="/_assets/images/em_architecture.svg" alt="Architecture"/>
</div>

There is a clear separation between the Emeraude and your application. As you probably already know the Clean Architecture 
is following dependency direction from side sections to the core. In the current documentation, we will use 
'**Clean Architecture Reference Flow**' as a term for that reference direction. On the other side is the Emeraude Framework. 
The architecture of the framework is based on three layers in an N-tier manner. By referencing the Emeraude from our 
application we need to inverse the dependency direction. That inversion we will call '**Emeraude Inversion Reference Flow**'. 
Both flows define our application so as a result, we are having an application that has its own domain, application, 
infrastructure, and presentation in addition to provided framework's infrastructure, application, and presentation. 
The linking points that are responsible for the proper work and customization are the contracts and configurations.

::: tip
Consider that **Clean Architecture** is recommended but not required. Dependency flow can be parallel in order to fit
the needs of the classic N-tier architectures. 
:::

## Framework
The framework itself is designed on top of N-tier architecture with the following structure:

### Infrastructure
That layer contains contextual separated modules that can be used with variety of application. Currently, we are providing
a set of few modules:
- **Persistence** - responsible for the storage of the data into the predefined database
- **Identity** - responsible for the identity of the application
- **File Storage** - responsible for the work with files and folders
- **Localization** - responsible for the languages and translations of the application

### Application
That layer reference the infrastructure and then exposes a configurable, simplified and validated API references implemented
via CQRS requests:
- **Identity** - exposes operations like user login
- **Consumer** - exposes operations like sitemap builder
- **Client Builder** - exposes generation operations
- **Admin** - exposes admin related operations

### Presentation
That layer is responsible for the accessibility of the Emeraude API via Web API or MVC:
- **Platform Base** - provides a set of abstract implementations of controllers that any application can inherit in order to take the advantages of the framework
- **Portal Gateway** - provides a Web API specially designed for the purposes of [Emeraude Portal](https://emeraude.io/)

### Contracts and Configuration
Side layer that is responsible for intercommunication between your application and framework. By using the contracts 
and the configurations the framework easily can identify the building blocks of your applications.

## Application
Our recommendation is your application be designed on top of Clean Architecture which puts the business logic and 
application model at the center of your application.

### Domain
Contains the business entities of your application, their definitions and services. The purpose of the domain is to 
define the business goals without any specific implementation of database, HTTP requests, etc. [Check](/documentation/core/domain.html) how to
design your domain layer for the standards of Emeraude Framework.

### Application
Contains the software implementation for work with the business model that is already defined in the **Domain**.
Any service that provide data access, file storage, identity, third-party service, etc. must be defined by using interfaces 
without any specific implementation. That layer depends on directly to the **Domain**. [Check](/documentation/core/application.html) how to design your application 
layer for the standards of Emeraude Framework.

### Infrastructure
Contains the implementations of the services that are contracted by the application. There is placed implementation and 
definition for the database, third-party services, etc. Everything in the infrastructure layer might be considered as an
implementation detail. That layer depends on directly to the **Domain** and **Application**. [Check](/documentation/core/infrastructure.html) how to design your 
infrastructure layer for the standards of Emeraude Framework.

### Presentation
Contains the ASP.NET implementation and configuration of Web API or MVC that consumes the **Application**. **Presentation**
is responsible for the authentication and authorization of your application as well. That layer depends on **Domain**, 
**Application** and **Infrastructure** (possibly). [Check](/documentation/core/presentation.html) how to design your presentation layer for the standards of Emeraude Framework.
