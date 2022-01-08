---
sidebar: true
sidebarDepth: 3
title: Configuration | Documentation
---
# Configuration

The configuration aspect of Emeraude Framework is something that we are continuously improving and there we are trying to
provide optimal developer experience. The setup of the framework is based on the .NET 6 setup of ASP.NET so if you are
familiar with that concept it won't be something new to you.

The starting point of the application is the file Program.cs and its method Main:

```csharp
public class Program
{
    public static async Task Main(string[] args)
    {
        await EmeraudeApplication.RunAsync(
            args,
            builder =>
            {
                // Here we configure our ASP.NET web application builder

                builder
                    .ConfigureEmeraude(setup =>
                    {
                        // Here comes the Emeraude Framework setup
                    })
                    .EmeraudePostConfigure(settingsBuilder =>
                    {
                        // Here comes the post-configuration of the framework
                    });
            },
            app =>
            {
                // Here we configure the ASP.NET web application
            });
    }
}
```

As you can probably notice - the configuration is almost like the original with one main difference - the setup of 
**WebApplicationBuilder** and **WebApplication** is happening into predefined actions. The reason for that is we want 
to provide you an experience with minimum configuration from your side. That's why we wrap the setup and expose to you 
a way to customize them in a very simple way.

## Configure Emeraude

The main configuration of the framework is part of the **ConfigureEmeraude** extension method. As a parameter of that
method you have to provide an **Action\<EmOptionsSetup>** that provides the configuration capabilities of the framework.

### MainOptions

Main options are vital for the work of the application because there is placed the references to the assemblies and 
configuration of the names. That's why we suggest you to invest more time to check them and specify them carefully.

- **ProjectName** - name of the project - mainly used for internal purposes
- **BaseUri** - base URl of the project
- **TestMode** - flag that disable some checks in case you use the setup for an integration test
- **DomainAssembly** - assembly of the domain layer from architectural point of view
- **InfrastructureAssembly** - assembly of the infrastructure layer from architectural point of view
- **ApplicationAssembly** - assembly of the application layer from architectural point of view
- **AdminAssembly** - assembly of the admin layer from architectural point of view
- **Assemblies** - list of all assemblies that will be used for all postprocessing and registrations in the framework
- **ExecuteMigrations** - flat that indicates whether the database migration be executed automatically when the application start

::: info INFO
Please consider that the separated assemblies have to point to main assemblies if your implementations includes more than 6 projects
in the solution.
:::

### ApplicationsOptions

In order to configure the application layer of the framework please check the
[Application Section](/documentation/core/application.html#options-applicationsoptions) for more details.

### PresentationOptions

In order to configure the presentation layer of the framework please check the 
[Presentation Section](/documentation/core/presentation.html#abstractions) for more details.

### AdminOptions

Currently, the administration options via the startup setup are not many because the implementation of the customization
is based on the adapter pattern. By using the startup you can only specify the type of the admin menus adapter used for
definition of the admin menus. For more information please check [Admin Navigation Section](/documentation/admin/navigation).

### ConsumerOptions

Simple options that provide currently only access to the API for specifying the **ISitemapComposition** used by the
**SitemapController** (read more at [Platform Base Section](/documentation/core/presentation.html#platform-base)).

### PersistenceOptions

Configuration of the persistence is required in order to setup properly the database that will be used by the framework
(at least for the identity). Please check the [Persistence Section](/documentation/core/infrastructure.html#persistence-1)
for more details.

### IdentityOptions

Configuration of the identity is required in order to setup the authentication and authorization of your application
correctly. Please check the [Identity Section](/documentation/core/infrastructure.html#identity) for more details.

### LocalizationOptions

In order to configure the localization feature of the framework please check the 
[Localization Section](/documentation/core/infrastructure.html#localization) for more details.

### FilesOptions

In order to configure the file system feature of the framework please check the
[File System Section](/documentation/core/infrastructure.html#file-storage) for more details.

### ClientBuilderOptions

In order to configure the client builder of the framework please check the 
[Client Builder Section](/documentation/client-builder/scaffold-modules) for more details.

### PortalGatewayOptions

Configuration of the Portal Gateway is important part for the proper intercommunication with Emeraude Portal. For more
details please check the [portal accessibility section](/documentation/portal/accessibility).

### Post Configuration 

Post configuration is a simple extension method of the main configuration that provides access to the all 
builders references that the framework use during the setup execution.

::: warning IMPORTANT
Action provided to the EmeraudePostConfigure will always be invoked after the completion of Emeraude Setup!
:::

## Configure builder

Web Application Builder configuration is the main setup of the ASP.NET infrastructure. All resources and services have
to be registered there. There is no specific requirements for the builder configuration because all required services
and resources are registered by the **ConfigureEmeraude** extension method.

## Configure application

Web Application configuration is main setup of the ASP.NET infrastructure. All middlewares comes there, so it is from
key importance for you not to miss that. A simple application configuration might look like this:

```csharp
app =>
{
    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseMigrationsEndPoint();
    }
    else
    {
        app.UseExceptionHandler("/error/400");
        app.UseHsts();
    }

    app.UseStatusCodePagesWithReExecute("/error/{0}");

    app.UseHttpsRedirection();

    app.UseRouting();

    app.UseCors();

    app.UseAuthentication();

    app.UseAuthorization();
}
```
