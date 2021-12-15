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

// ToDo

### ApplicationsOptions

// ToDo

### PresentationOptions

// ToDo

### AdminOptions

// ToDo

### ConsumerOptions

// ToDo

### PersistenceOptions

// ToDo

### IdentityOptions

// ToDo

### LocalizationOptions

// ToDo

### FilesOptions

// ToDo

### ClientBuilderOptions

// ToDo

### PortalGatewayOptions

// ToDo

### Post Configuration 

// ToDo

## Configure builder

Web Application Builder configuration is the main setup of the ASP.NET infrastructure. All resources and services have
to be registered there. There is no specific requirements for the builder configuration because all required services
and resources are registered by the **ConfigureEmeraude** extension method.

## Configure application

// ToDo
