---
sidebar: true
sidebarDepth: 3
title: Presentation | Core | Documentation
---
# Presentation

The side of the application is the presentation layer. It controls and manages the accessibility of
external world to the application core. As a lightweight framework Emeraude provides few minor presentation feature:

- **Abstraction** - provides main abstractions for creating presentation instance (controllers, model binders, etc.) 
- **Platform Base** - provides base implementations in order for quick development in addition to overriding capabilities
(for example an abstract authentication controller that exposes ready to use actions)
- **Portal Gateway** - main presentation instance for exposing the endpoints used by the Emeraude Portal

## Abstractions
Provided abstractions are part of the **Emeraude.Presentation** assembly.
The core purpose of the Presentation Abstractions is to support your development

In case you need to support the development of the controllers you can use the following abstraction classes:
- **EmController** - base Emeraude controller that provides all required services and base functionalities
- **EmApiController** base controller (inheritor of the **EmController**) for creating API controllers
- **EmPublicController** - base controller (inheritor of the **EmController**) for creating classic MVC controllers

::: info INFO
Please consider that the **Emeraude.Presentation** assembly is mainly a supporter and do not expose many features. In
case you need more feature check the **Emeraude.Presentation.PlatformBase**.
:::

For detailed information what is available from the assembly you can check the source directly on
[GitHub](https://github.com/emeraudeframework/emeraude/tree/master/src/Emeraude.Presentation).

## Platform Base
The classes and interfaces of platform base are part of the **Emeraude.Presentation.PlatformBase** assembly.
The core idea behind platform base is followed by the idea to develop a platform solution with Emeraude Framework.
In order to take the advantages of all platform features you can use:

- Controllers:
  - **UserAuthenticationController** - provides MVC-based authentication actions 
  - **SitemapController** - provides endpoint that consume **ISitemapComposition** in order to provide sitemap endpoint
  - **ExecutionResultController** - provides a feature for showing generic result page

- TagHelpers:
  - **TranslationTagHelper** - provides a simple tag helper ``<t>INNER_CONTENT</t>`` where **INNER_CONTENT** is a translation 
key that will be translated based on the current language and the registered translations in the Localization database
  - **StaticContentTagHelper** - provides a simple tag helper ``<sc>INNER_CONTENT</sc>``where **INNER_CONTENT** is a static 
content key that will be extracted from the Localization database based on the current language

- Attributes:
  - **LanguageRouteAttribute** - provides same behavior like Microsoft.AspNetCore.Mvc.Routing.RouteAttribute but includes 
the constraint for language codes so in case you use the [LanguageRoute("/about")] that is same like to use
[Route("/{languageCode:lang}/about")]

::: tip
In case you want to have SEO friendly localized URLs you have to have in your action both attributes **RouteAttribute**
and **LanguageRouteAttribute**.
:::

For detailed information what is available from the assembly you can check the source directly on
[GitHub](https://github.com/emeraudeframework/emeraude/tree/master/src/Emeraude.Presentation.PlatformBase).

## Portal Gateway
The classes and interfaces of portal gateway are part of the **Emeraude.Presentation.PortalGateway** assembly.
By default, portal gateway is ready to use and can be consumed directly. Of course in case you need to extend the built-in
functionalities you can by using the provided abstractions:

- In case you need to implement custom behavior for the admin authentication you can use the **IAuthenticationActionsStrategy**
- In case you need to implement custom behavior for the admin management you can use the **IManageActionsStrategy**
- In case you need to implement custom gateway API controller you have to inherit **EmPortalGatewayApiController**

For detailed information what is available from the assembly you can check the source directly on 
[GitHub](https://github.com/emeraudeframework/emeraude/tree/master/src/Emeraude.Presentation.PortalGateway).
