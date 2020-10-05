# Architecture
Emeraude is built on onion-based software architecture following the trends in the 
business. More specific - the framework is created by Clean Architecture. Each application 
developed on the top of Emeraude is recommended to be built by clean architecture either.
Emeraude has specific separation on 3 main parts:
- Core - define the main engine of the framework
- Admin - define core inheritance for the purposes of administration panel
- Client - define core inheritance for the purposes of public (client) part of the system 

On the following graphic you can see the structure of the architecture: 

![Architecture](/assets/images/architecture-clean-1.jpg)

Like the most popular clean architecture implementation Emeraude is nothing different than the
main 4 elements - domain, application, infrastructure and presentation. This separation allows
easy construction of domain driven design (DDD) based application with focus on the business 
logic.

## Core
The core of Emeraude framework is the container of all independent components and abstractions
of the system. They are separated and structured in specific sections with single responsibility:

### Domain
Domain is the main core of the software application. It contains all entities related to the business logic 
of application. In Emeraude domains contains just a few entities which are related to the ready to 
use features - entity abstractions, localization, logging. On the other hand the the application 
which will be developed on the top of Emeraude would be with a different domain and not related 
directly to the business logic of framework (in the general case).

### Application

Application is the main interface of the system. It contains access to all independent features -
interfaces for access and management of identity, files, localization, emails, logging and persistence.
In addition to these features - application section contains the main CQRS (Command Query Responsibility 
Segregation) requests.

### Infrastructure

Emeraude infrastructure are the features' implementations. In this section are available the most
used features for each application. There are implementations for access and management of identity, 
files, localization, logging and persistence. Each of these modules is packaged in separated 
NuGet library and it allows easy integration in other application infrastructure.

## Admin

Admin is the most developed module of the Emeraude because its purpose is to provide ready to use
features without effort from development perspectives. Administration part of the framework is 
an extension of the core and contains own specific application and presentation part. It provides 
ready to use authentication and authorization, user management, entities management abstractions, logging, code 
generation and usage analytics.

## Client

On the other hand client module is a lightweight part of Emeraude. By using the framework you will 
receive authentication out of the box. You have the availability to use framework client
with Razor if you are fan of C# view renderer engine. In case you are a fan of SPA technologies you can use
any technology you like but the built-in one in the Emeraude is SSR Vue.js ([EmPages](/guide/em-pages.html)).

## SDK

Emeraude SDK is separated on two main parts - for web applications and for mobile applications.
The purpose of the web SDK is to connect existing ASP.NET Core application with Emeraude framework.
Of course web SDK library [Definux.Emeraude](https://www.nuget.org/packages/Definux.Emeraude) is not
the only way to connect your application with Emeraude features. You can easily reference the framework
infrastructure by using the other Emeraude packages.
Mobile SDK  [Definux.Emeraude.MobileSdk](https://www.nuget.org/packages/Definux.Emeraude.MobileSdk) is another part of the framework. Emeraude has ready to use view-models, services, stores and
utilities to connect your application (created with Emeraude) with your Xamarin forms application.