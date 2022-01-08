---
sidebar: true
sidebarDepth: 3
title: Customization | Admin | Documentation
---
# Customization

In order to fit your needs as much as possible the framework provides special way to customize the user experience of the
Emeraude Portal - **Runtime Injection**. This feature provides simple way to be injected custom CSS and JavaScript into 
the portal initialization in order to extend current functionality of the distributed client.

The target goal of proper runtime injection is the existence of two files in the private root of your application:
- **runtime-injection.bundle.min.js** @ ./privateroot/portal
- **runtime-injection.style.min.css** @ ./privateroot/portal

When these files are available on the file system of your application Emeraude Portal will make a request for them and
will initialize them.

::: warning IMPORTANT
You have to know that the runtime injection files are protected and require the gateway ID in order 
to be provided by the application!
:::

For more detailed view how the runtime injection has to be initialized you can check the 
[following sample](/code-samples/admin/runtime-injection).

::: info INFO
In case for some reason the runtime injection files are invalid or do not exist - the Emeraude Portal will 
initialize the application without them and possibly will throw an error in the console of your browser.
In case everything is fine with your files - in the console of your browser you have to see this message: 
**Emeraude Runtime Injection has been executed**.
:::