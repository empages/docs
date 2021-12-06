---
sidebar: true
sidebarDepth: 3
title: Application | Core | Documentation
---
# Application

The next logical separation of the Clean Architecture is the application that depends only on the domain.
By using the Emeraude Framework the application core is inverting the dependency flow and referencing the application and
the infrastructure of the framework. Basically the reference to the framework application might not be so useful because
that layer is designed to be consumed directly by the presentation of your application.

## Main

::: info ASSEMBLY
**Emeraude.Application**
:::

To understand the structure of Emeraude Framework and its application layer first you must know what it uses and respectively exposes.

### Requests
Most of the source code in the application layer is CQRS requests (queries and commands) that are designed and registered to be
used directly without any additional setup. All requests are having an intermediate behaviours that improve the quality
of the execution:

- Logging behavior - logs any query or command
- Validation behavior - catch and execute all implemented query or command validators (based on [FluentValidation](https://fluentvalidation.net/))

### Mapping
The application layer provides a simple generic contract called **IMapFrom\<TEntity>**
(inspired by [jasontaylordev/CleanArchitecture](https://github.com/jasontaylordev/CleanArchitecture)) that allows easily
mapping by implementation of single interface that has default *Mapping* implementation.

### Models
Emeraude introduces a special data transfer object struct called **DateModel**. The idea of that struct is to wrap and simplify 
the usage of date without time. **DateModel** is providing the date in ``yyyy-MM-dd`` string format but allows direct transformation
to the well known **DateTime**. By using Emeraude Framework a JSON serializer and model binder are provided in order to use 
**DateModel** instead of **DateTime** without the need of any additional setup. That means for example if you are passing the string
'2009-10-07' in query string, JSON or form collection - the ASP.NET will parse it to DateModel which will be equivalent to 
``new DateTime(2009, 10, 7)``.

### Options (ApplicationsOptions)

The application layer allows possibility to be configured with the following options:

- **MappingAssemblies** - collection that allows adding of additional assemblies for reading already created mapping profiles.
- **MappingProfiles** - collection that allows adding of additional mapping profile types
- **AddMappingProfile** - generic method with constraint that adds a mapping profile to the **MappingProfiles** collection

Example usage of these options:
```csharp
builder
    .ConfigureEmeraude(setup =>
    {
        // ...
        setup.ApplicationsOptions.AddMappingProfile<MyAppAssemblyMappingProfile>();
        setup.ApplicationsOptions.AddMappingProfile<MyAppCustomizedMappingProfile>();
        setup.ApplicationsOptions.AddMappingProfile<MyAppAdminAssemblyMappingProfile>();
        // ...
    }
```

::: info
The whole mapping in the framework is implemented by using the [AutoMapper](https://automapper.org/)
:::

In order to boost your development work the Emeraude Framework provides a built-in application layer separated on a few parts
based on their contexts:

## Identity
::: info ASSEMBLY
**Emeraude.Application.Identity**
:::

Provides built-in requests for identity operations:
- **ActivateTwoFactorAuthenticationCommand**
- **ChangeEmailCommand**
- **ChangePasswordCommand**
- **ChangeUserNameCommand**
- **ConfirmEmailCommand**
- **ExternalAuthenticationCommand**
- **ForgotPasswordCommand**
- **LoginCommand**
- **LoginWithTwoFactorAuthenticationCommand**
- **RefreshAccessTokenCommand**
- **RegisterCommand**
- **RemoveExternalLoginProviderCommand**
- **RequestChangeEmailCommand**
- **ResetPasswordCommand**
- **ResetTwoFactorAuthenticationCommand**
- **GetUserExternalLoginProvidersQuery**

## Consumer
::: info ASSEMBLY
**Emeraude.Application.Consumer**
:::

Provides built-in requests for consumer side of the application:

- **GetSitemapQuery** (requires the adapter implementation of ISitemapComposition)

### Options (ConsumerOptions)

The consumer application layer allows possibility to be configured with the following options:

- **SetSitemapComposition** - set sitemap composition adapter implementation for ISitemapComposition.

Example implementation of ISitemapComposition is
```csharp
public class SitemapComposition : ISitemapComposition
{
    public async Task<IEnumerable<PageSitemapPattern>> SetupAsync()
    {
        var patterns = new List<PageSitemapPattern>();

        patterns.Add(new PageSitemapPattern("/entities/{0}")
        {
            SinglePage = false,
            ChangeFrequency = SeoChangeFrequencyTypes.Yearly,
            Priority = 1f,
            DataAccessor = async () =>
                await this.context
                    .Entities
                    .Select(x => new[]
                    {
                        x.Id.ToString(),
                    })
                    .ToListAsync(),
        });

        return patterns;
    }
}
```

Example registration of SitemapComposition:
```csharp
builder
    .ConfigureEmeraude(setup =>
    {
        // ...
        setup.ConsumerOptions.SetSitemapComposition<SitemapComposition>();
        // ...
    }
```

## Admin
::: info ASSEMBLIES
**Emeraude.Application.Admin** | **Emeraude.Application.Admin.EmPages**
:::

Admin sub assemblies of the application layer of Emeraude are the parts of the framework that contains most of the complexity.
In that layer is placed logic mostly developed for internal purposes of the framework related to the administration context of the application,
and we personally suggest not to use the exposed classes directly. Our recommendation is to use only the API references that are
explained in the **Admin** section of the documentation. In case you are trying to extend or understand deeply the implementation
of that application layer please check the source code directly.

## Client Builder
::: info ASSEMBLY
**Emeraude.Application.ClientBuilder**
:::

Client Builder application layer has similar use case like the Admin application layer. Client Builder as a concept will be explained
in details in the **Client Builder** section of the documentation.

However, there are resources that can be used in isolation. That are localization requests that are well managed by the
Portal Gateway but can be used separately if the application needs them:

- **CreateContentKeyWithContentCommand**
- **DeleteContentKeyCommand**
- **EditContentKeyWithContentCommand**
- **MakeLanguageDefaultCommand**
- **CreateKeyWithValuesCommand**
- **DeleteKeyCommand**
- **EditLanguageCommand**
- **CreateLanguageCommand**
- **DeleteLanguageCommand**
- **EditTranslationKeyWithValuesCommand**
- **GetLanguagesQuery**
- **GetStaticContentKeyQuery**
- **GetStaticContentKeysQuery**
- **GetTranslationsGridDataQuery**
