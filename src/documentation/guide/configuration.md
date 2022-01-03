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

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### ApplicationsOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### PresentationOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### AdminOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### ConsumerOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### PersistenceOptions

Configuration of the persistence is required in order to setup properly the database that will be used by the framework
(at least for the identity). Please check the [Persistence Section](/documentation/core/infrastructure.html#persistence-1)
for more details.

### IdentityOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### LocalizationOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### FilesOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

### ClientBuilderOptions

::: tip COMING SOON
We are actively working on this section! It will be available as soon as possible!
:::

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
