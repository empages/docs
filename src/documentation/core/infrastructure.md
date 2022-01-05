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

- **ICurrentUser** - current user ID accessor
- **ICurrentUserProvider** - accessor that provides the identity user for the current request
- **IRoleManager** - role manager service
- **ITwoFactorAuthenticationService** - two-factor authentication service that provides specific methods for managing that functionality into the system
- **IUserAvatarService** - service specified for user avatar processing
- **IUserClaimsService** - service for accessing and mutation of user claims
- **IUserManager** - wrapper of ASP.NET Core User Manager with additional functionalities
- **IUserTokensService** - service that provides methods for generation of access and refresh tokens

### External Providers

In case you need to use external provider as authentication provider you can take the advantages of Emeraude infrastructure.
**IExternalProviderAuthenticator** is a contract that is designed to extend your application authentication.

The steps are quite easy:
- Implement **IExternalProviderAuthenticator** and all required methods
```csharp
public class MyCustomAuthenticator : IExternalProviderAuthenticator
{
    public string ClientId { get; set; }

    public string ClientSecret { get; set; }

    public string Name => "MyCustomAuthProvider";

    public async Task<IExternalUser> GetExternalUserAsync(ClaimsPrincipal principal)
    {
        // extraction of external user by using the ClaimsPrincipal principal
    }

    public async Task<IExternalUser> GetExternalUserAsync(string provider, string accessToken)
    {
        // extraction of external user by using the auth provider and its access token
    }

    public void RegisterAuthenticator(AuthenticationBuilder builder)
    {
        // your authenticator registration
    }
} 
```
- Register the new external provider in the **IdentityOptions** of the startup setup via ``ExternalProvidersAuthenticators`` property
```cshapr
setup.IdentityOptions.ExternalProvidersAuthenticators.Add(new MyCustomAuthenticator
{
    ClientId = "my-custom-auth-provider-client-id",
    ClientSecret = "my-custom-auth-provider-client-secret",
});
```

::: tip DEFAULTS
Please consider that **Emeraude.Defaults** already contains predefined external providers for authentication with Facebook and/or Google.
:::

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

- **AdditionalRoles** - dictionary that contains all additional roles and their claims
- **SourceIdentityOptions** - internal options for identity management of ASP.NET
- **AccessTokenOptions** - access token options for the API authentication
- **RefreshTokenOptions** - refresh token options for configure the access token refreshing
- **ExternalProvidersAuthenticators** - collection of all external provider authenticators implementations used in the framework

## Persistence

Persistence instance of the infrastructure is representing the database work of the framework. By following the concept
of Clean Architecture, Emeraude Framework is considering the database as a detail so that's why the persistence is 
considered as an important part of the framework but not the core one. That means you can use the framework with 
minimal database impact.

### Context

Context is the implementation wrapper of the database. It follows the Entity Framework, so it is not different from the
standard implementation of DbContext. Emeraude provides few ready to use contracts and abstract implementations which
can be used in order to take the benefits from the framework:

- **IDatabaseContext** - contract for base access of the registered DbContext
- **IEmContext** - extended contract of IDatabaseContext which takes the entities from the identity infrastructure
- **EmContext** - implementation of the IEmContext which is considered as an IdentityContext that implements the IEmContext as well

### Seed

In order to boost the productivity during development sometimes developers and the application needs data population 
at the beginning. For that purpose Emeraude exposes an interface that defines a module that must be considered as
database service that will be triggered at the beginning of the execution - **IDatabaseInitializer**.
The purpose of that database initializer is if you need to define startup data for your application - to create/build it.
A proper example for database initializer can be found in the sample section [here](/code-samples/general/database-initializer).

### Common

Work with the data can be considered as unique but some fields sometimes are standard because of their nature. 
Emeraude provides a constants lengths that can be used for database columns lengths in order to optimize the usage of 
database. To use them you can use the following static class - **DefaultDataTypesLengths**:

- **SingleName** - 30 symbols
- **FullName** - 100 symbols
- **Email** - 256 symbols
- **Phone** - 20 symbols
- **Fax** - 20 symbols
- **Country** - 30 symbols
- **City** - 30 symbols
- **Address** - 160 symbols
- **CompanyName** - 50 symbols
- **ReferenceNumber** - 40 symbols
- **Website** - 300 symbols
- **GroupName** - 80 symbols
- **AddressNumber** - 10 symbols

### Options

In order to configure the persistence behavior you have to use the Persistence Options of the startup setup of the framework:

- **ContextProvider** - an enumeration that specify predefined ContextOptionsBuilder based on its value (InMemoryDatabase, MicrosoftSqlServer, PostgreSql)
- **ContextOptionsBuilder** - specify configuration builder for Entity Framework in order to specify database provider
- **ConnectionString** - specify the connection string for the database provider (use **SetContext** in order to use the type validation)
- **ContextInterfaceType** - specify the service interface of the database context (use **SetContext** in order to use the type validation)
- **ContextImplementationType** - specify the service implementation of the database context
- **ContextRegistrationAction** - context registration action used for proper registration of the database context (ignore it if you use **SetContext** of the options)
- **DatabaseInitializers** - list of the database initializers that will be triggered on the application startup (use **AddDatabaseInitializer** in order to use the type validation)

## Localization

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Persistence

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Services

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Options

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

## File Storage

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Roots

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Services

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Validation

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### Options

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::
