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

In order to provide wide range of possibilities the framework provides integrated localization feature that provide
ready to use solution for work with languages, translations and localized content. The feature itself is applicable 
mainly to the customer side. The management of the content is delegated to the [Client Builder](/documentation/client-builder/portal) 
that is a part of the Emeraude Portal.

### Persistence

In order to provide stable and easy for transportation localization storage the Emeraude Framework save any localization
information in predefined SQLite database placed in the **privateroot** of the application. To work with the data placed
in that database you can use the already defined Entity Framework context named **LocalizationContext**.

The structure of the stored entities in the localization context is as follows:
- **Language** - entities that represent the languages
- **TranslationKey** - entities that represent the identification keys of translations
- **TranslationValue** - entities that represent the translation values behind specified key
- **ContentKey** - entities that represent the identification keys of static content
- **StaticContent** - entities that represent the static content (same as translations but with manner of large text/HTML) behind specified key

### Services

In order to provide flexibility and control about the whole localization assets the framework exposes a few services that
can be used to control and use the stored localization data:

- **ILocalizationContext** - an interface that provides access to the implementation of the **LocalizationContext**
- **ILanguageStore** - a service that wraps work with languages, translations and static content items
- **ICurrentLanguageProvider** - an accessor for the currently selected language based on the current route
- **ILanguagesResourceManager** - a helper service that converts the stored localized data into the **resx** resources
- **IEmLocalizer** - a service that provides API for translating keys from translations and static content items

### Options

::: warning NOT APPLICABLE
For the current version of the Emeraude Framework there is no options for that infrastructure instance!
:::

## File Storage

Nowadays, the work with files is mostly transferred to the cloud storages but still in some cases application needs
interactions with local-based files. That's why the framework provides friendly SDK for work with local files in order 
to provide simplicity and quickness to the development process.

### Roots

In the context of file storage of application based on Emeraude Framework there is clear separation of the places where
the files can be stored:

- Public Root (**wwwroot**) - default static content files of ASP.NET applications
- Privet Root (**privateroot**) - internal folder managed by the Emeraude Framework in order to store local files that are 
not accessible by the outside world

::: warning IMPORTANT
Please consider that the files that are in the **privateroot** needs to be specified if they need to be used as embedded resources,
content, etc.
:::

### Services

In order to provide flexibility and control about local file system the framework exposes a few services that
can be used as a management tools for all local files:

- **IRootsService** - a service that provides API for works with the roots of the infrastructure
- **ISystemFilesService** - a service that provides direct access to all local files and folders
- **ITemporaryFilesService** - a service that store in the memory cache temporary files references in order to optimize the uploading process 
- **IUploadService** - a service that uploads files into the local file system

### Validation

In order to provide built-in functionality for proper work with files the framework provides special service called
**IFilesValidationProvider** that allows developers to validate files before their uploading. The built-in validation
is using the chain of responsibility pattern where each chain is predefined validation. In order to figure out more about
that validation process we suggest you to check out the 
[source code](https://github.com/emeraudeframework/emeraude/tree/master/src/Emeraude.Infrastructure.FileStorage/Validation) 
of the validators.

### Options

In order to configure behavior of the file system infrastructure you can use the following options:

- **MaxAllowedFileSize** - get/set the maximum allowed size used by default by the file validator (_20971520 bytes (~20MB)_)
- **MaxAllowedImageFileSize** - get/set the maximum allowed size used by default by the image validator (_10485760 bytes (~10MB)_)
- **InitFolders** - a list of all folders that must be initialized on the application start
