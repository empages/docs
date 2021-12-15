---
sidebar: true
sidebarDepth: 3
title: Infrastructure | Core | Documentation
---
# Infrastructure
In the context of the Clean Architecture - infrastructure is the logical part that contains all implementation details of the
application. In the context of Emeraude Framework - infrastructure is the bottom layer that contains all definitions and 
implementations of framework units - persistence, identity, localization and file storage. Its structure allows usage of
each infrastructure module separately without the need of referencing the rest part of the application.

## Identity
Identity infrastructure is responsible for the users related operations and its storage. It has a well-tested and DX friendly API for
proper work with users, roles, permissions and everything related to the identity concept.

### Persistence
In the context of the framework - the identity is stored in the application database by following the existing well-known
ASP.NET Entity Framework Identity so the entity models are as follows:
- **User** - inherits **IdentityUser\<Guid>** and implements **IUser**
- **UserRole** - inherits **IdentityUserRole\<Guid>**
- **UserClaim** - inherits **IdentityUserClaim\<Guid>**
- **UserLogin** - inherits **IdentityUserLogin\<Guid>**
- **UserToken** - inherits **IdentityUserToken\<Guid>**
- **Role** - inherits **IdentityRole\<Guid>** and implements **IEntity**
- **RoleClaim** - inherits **IdentityRoleClaim\<Guid>**

::: tip
More information about the ASP.NET identity model can be found in the [ASP.NET official documentation](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model)
:::

Emeraude exposes a contract called **IIdentityContext** that provides direct access to the DbSets of each entity related to identity.
In addition to that interface - an abstract class **IdentityContext** and implementation class **IdentityContextInstance** are available
with the following references: **IdentityContextInstance** inherits **IdentityContext** that implements **IIdentityContext**.

::: warning IMPORTANT
Registration of IIdentityContext and IdentityContextInstance is delegated to the **Persistence** infrastructure layer.
If you are going to use the identity infrastructure separately you must register the contexts by yourself.
:::

### Services

// ToDo

### External Providers

// ToDo

### Identity Event Handlers

In case you have decided to use the already built-in identity features of Emeraude you probably will need to
include some custom logic to your identity process (notifications, entity creation, logging, etc.) so for that purpose there are a few
identity events. They allow you to trigger your custom logic after specified event is invoked. The identity events that
you are able to work with are as follows:

- Login event - [Check a sample event handler](/code-samples/identity/event-handlers.html#login)
- External login event - [Check a sample event handler](/code-samples/identity/event-handlers.html#external-login)
- Register event - [Check a sample event handler](/code-samples/identity/event-handlers.html#register)
- External register event - [Check a sample event handler](/code-samples/identity/event-handlers.html#external-register)
- Forgot password event - [Check a sample event handler](/code-samples/identity/event-handlers.html#forgot-password)
- Reset password event - [Check a sample event handler](/code-samples/identity/event-handlers.html#reset-password)
- Confirmed email event - [Check a sample event handler](/code-samples/identity/event-handlers.html#confirmed-email)
- Request change email event - [Check a sample event handler](/code-samples/identity/event-handlers.html#request-change-email)

::: info 
Take into account that the identity events are triggered by the requests placed in the application layer!
:::

It is important to know that every event handler must have only one implementation because the service that 
invokes your code use a single implementation of the specified identity handler contract. Lack of implementation won't
cause an error but will be logged.

::: warning IMPORTANT
In case you are using the Emeraude Portal or the integrated authentication you need to implement event handlers 
in order to notify yourself for some changes (email change, reset password). We suggest you to temporarily apply
notification via the console - `Console.WriteLine('Result from the identity event');`.
:::

In order to trigger manually the identity events you can use the service **IIdentityEventManager** from the assembly
*Emeraude.Infrastructure.Identity*.

### Options

// ToDo

## Persistence

// ToDo

### Context

// ToDo

### Seed

// ToDo

### Common

// ToDo

### Options

// ToDo

## Localization

// ToDo

### Persistence

// ToDo

### Services

// ToDo

### Options

// ToDo

## File Storage

// ToDo

### Roots

// ToDo

### Services

// ToDo

### Validation

// ToDo

### Options

// ToDo
