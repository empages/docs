---
sidebar: true
sidebarDepth: 3
title: Accessibility | Emeraude Portal | Documentation
---
# Accessibility

To understand the relation between the Emeraude-based application and Emeraude Portal you have to know what are the 
connection points between them.
To consume your application's built-in API you have to allow the API to be consumed by the portal. The exact endpoints 
are integrated into the portal itself, and you do not have to do anything else. But in that point - what you need to do
in order to grab the benefits of the Emeraude Portal.

In the framework there is are few steps that must be followed.

## Portal Gateway

Portal Gateway is a presentation branch of the framework structure that takes the responsibility to work with the 
Emeraude Portal. The whole functionality of the Portal Gateway is fit in a few minor components:

- **Web client allowed endpoints** - a list with domains that is injected into the CORS origins of the API (configurable by the gateway options)
- **Gateway ID** - A unique string that checks whether the web client can use the API of the portal gateway (configurable by the gateway options)
- **EmPortalGatewayApiController** - a special API controller (an inheritor of the EmApiController) that includes 
protections in the form of CORS and gateway ID validation (consider that if you won't extend the functionality of the 
portal gateway - you might not need to use that base controller at all)

### Options

In order to configure the Portal Gateway you have to use the configuration of the application:

```csharp
builder
    .ConfigureEmeraude(setup =>
    {
        // ...
        setup.PortalGatewayOptions.GatewayId = "my-random-gateway-id"; // We suggest you place here unique and random string in order to be impossible to be guessed
        setup.PortalGatewayOptions.PortalUrls.Add("https://my-custom-portal-domain.com"); // Add that if you need to redirect to a new instance of the portal
        // ...
    }
```

::: info INFO
Please consider that the collection **PortalUrls** already has the *https://emeraude.io* in there
:::

Parallel to the builder configuration - in order everything with the Portal Gateway is configured well - you have to
enable the CORS in the application builder section:

```csharp
app.UseCors();
```

## Runtime Injection

In order to provide full capabilities for customization - Emeraude Portal exposes a way to be customized with predefined
JavaScript and StyleSheet files. The idea is when a connection with the application is initialized - Emeraude Portal will 
request 2 files (**runtime-injection.bundle.min.js**, **runtime-injection.style.min.css**) that will be injected during 
client initialization in order to include additional functionalities and styles.
For more detailed example what runtime injection is please check the following [sample](/code-samples/admin/runtime-injection).

## Security

One of the most important point of Emeraude Portal is its security. Emeraude Portal can be considered as static HTML 
website that communicate with specified applications APIs. Portal does not communicate with no internal or third-party 
providers in order to log, trace and store any information. The whole communication is between your application and the
Emeraude Portal. It means if you keep your portal gateway secured - everything will be fine.