---
sidebar: true
sidebarDepth: 3
title: Introduction | Documentation
---
# Introduction

Before deep-diving into the tech stuff let's provide you a little of context of all. **Emeraude** 
(which comes from Middle English, nowadays more popular as emerald) is one of the most popular 
gemstones. It symbolizes love, beauty, **growth**, creativity, focus, and intensity.

Our main intention and desire are to provide you the reality that your product represents the same as the 
emerald and many more. We want to rise your application to a new level in a simple manner, exactly like 
jewels make the difference with the people - just a single and minor piece but at the same time - a huge 
difference.

## What is Emeraude?

Emeraude is a web application framework based on ASP.NET which is delivered in the form of NuGet packages 
that anyone can import into the project that working on. The framework can be considered as separated and 
relatively independent because its main goal is to provide additional features by minor impact over the 
application.
For a more clear view of the framework let's describe what Emeraude is/does and what Emeraude is/does not:

- Emeraude is based on ASP.NET
- Emeraude is written on .NET 6 and C# 10
- Emeraude is a framework - not a library
- Emeraude is a wrapper for an ASP.NET-based web application
- Emeraude can be used for all type web projects - MVC, Web API, RazorPages, Blazor, etc.
- Emeraude provides abstractions, services and utilities out of the box
- Emeraude is configurable
- Emeraude is free and open-source
- Emeraude does not require any licenses and keys to work
- Emeraude does not have any requirements for your application code
- Emeraude does not wrap any UI-related elements (HTML, CSS, JS) into its NuGet packages
- Emeraude is not a CMS, CRM, etc.
- Emeraude is not SaaS, PaaS, etc.

## Features

Emeraude Framework is following the principle 'Less is More' so the list of the features is significantly small:

#### EmPages

EmPage (Emeraude Page) is the core feature of the framework. Its purpose is to provide to the Emeraude users ability to 
create complete feature of any kind with minimal effort. EmPage can be considered as sub feature of the administration 
part of the framework because from management point of view the framework is design to provide powerful, private and 
secure solution for control of internal and external data flows. More about the EmPages can be found on
[EmPage Section](/documentation/admin/em-pages).

#### Runtime Generation

In order to provide maximum productivity to the developers Emeraude has built-in tool called **Client Builder**.
The tool is constructed by 2 main elements - back-end element represented by Scaffold Modules and front-end element
represented by the Emeraude Portal. More for the runtime generation you can read in the
[Client Builder Section](/documentation/client-builder/runtime-generation).

#### Authentication

Authentication is split on two - integrated authentication which is a part of the Portal Gateway or pluggable authentication
which is a part of the Platform Base. Both are consuming the Identity instance of the Application layer. More about direct
consuming the exposed feature can be found in the about [Presentation Layer Section](/documentation/core/presentation) while the separated commands are explained 
in the [Application Layer Section](/documentation/core/application).

#### Localization

Localization is a main feature of the framework that is useful if you're considering to use Emeraude as a core base of
your application. The feature itself is split on few parts - one core that is placed in the infrastructure and another 
consumable in the presentation. Everything related to the localization is stored in separated SQLite database and managed
by the LocalizationContext. By using the Client Builder module of Emeraude Portal you have management capabilities for the
LocalizationContext.

#### System Files Management

In order to simplify the usage with files of the application folder Emeraude Framework provides separate instance of the 
infrastructure designed to fit the requirements of the system file management. More about the functionalities that are provided
by the infrastructure instance can be found in the [Infrastructure Section](/documentation/core/infrastructure).

#### SEO

Search Engine Optimization cannot be provided as a feature because it is a result of hard work during the development of
any application. But to help you during the development of your application Emeraude provides you sitemap generator and
easy way to generate friendly localized URLs.

#### Utilities

We know that during development of any application sometimes developers needs utilities for boosting the performance and
making the code cleaner. Emeraude Framework in addition to the context based features provides static utility classes and
methods by referencing the **Emeraude.Essentials**. That assembly is mainly used by the framework itself, but you can use
it if you see it useful.

## Emeraude Portal

Emeraude Portal is separated product maintained by the Emeraude team. Its idea is to provide ready to use client that
is deployed separately of your application and consume the Portal Gateway of your application. Our main purpose is instead to 
provide you integrated client transported with the packages or separated desktop application that you need to install on 
your machine, just to link your application with the portal that is accessible on [emeraude.io](https://emeraude.io).
More about the Emeraude Portal can be found on the [emeraude.io](https://emeraude.io) or on the [Portal Section](/documentation/portal/overview).

## Business Applications

The proper usage of the Emeraude is very important for the stability of your application and respectively product. 
The framework is designed to provide management capabilities and supporting abstractions, services, and utilities 
for your application.

Consider the fact Emeraude Portal is made to support you, your team members, and the stakeholders  - not the users of 
the application.

The usage of the Emeraude is not limited to a specific domain. A few possible examples are:

- Website
- Web application
- Web API
- CMS, CRM, ERP
- Mobile/desktop application data/users manager
- Microservices data manager
- Unified third-parties manager
- Source code analysis platform
