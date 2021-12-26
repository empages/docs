---
sidebar: true
sidebarDepth: 3
title: Upgrading | Emeraude Portal | Documentation
---
# Upgrading

Emeraude is a distributed solution that provides two totally different products in order to boost the management capabilities 
of your application. By following that we see a significant issue in the synchronization between both products in some cases.
The reason is if the framework changes one or many of the endpoints that work with the portal, the Emeraude Portal will throw an error
so the communication between the application and the portal won't be possible. Additional issues might be backward compatibility
especially when the portal expects some feature that is not implemented in some old version of the framework.

The best solution that we can provide to you is the existence of stable versions of both - framework and portal. In case both
products provide compatible and reliable versions that have no conflicts between each others we can assure you that you
can use the Emeraude with no issues.

::: warning BACKWARD COMPATIBILITY
Emeraude is an open source solution that is developed and maintained by small community with limited resources. It means
we are not able to support more than 1 active version per each of the products. So in order to grab the best of the 
Emeraude please use the latest version of the framework. The portal will be automatically upgraded when a new version is 
available.
:::

In case there are issues based on versions please consider upgrading the framework to the latest available version.
In case this is not an option and the Emeraude Portal is not working properly - you need to branch the portal and make your
own instance of the Emeraude Portal deployed on your server.