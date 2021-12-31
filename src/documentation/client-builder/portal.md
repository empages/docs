---
sidebar: true
sidebarDepth: 3
title: Emeraude Portal | Client Builder | Documentation
---
# Emeraude Portal

Client Builder is designed to provide a list of generation and manage functionalities. In order to provide the best 
user experience for working with Emeraude the feature's API is consumed by the Emeraude Portal.

<div class="text-center">
    <img class="w-auto" src="/_assets/images/client-builder.png" alt="Client Builder"/>
</div>

The UI side of the Client Builder is designed as extension functionality of the Portal. The accessibility of it has no
difference than the standard usage of Emeraude Portal.

Client Builder with the combination with the interactive UI provide following functionalities and views:

- **Scaffold** - a view that exposes a renderers and triggers for custom defined scaffold modules and its generation triggering
- **Endpoints** - а view that shows a list of all endpoints defined by controllers decorated with **ApiEndpointsController** 
attribute and actions decorated with **Endpoint(typeof(ResponseModel))** attribute
- **Languages** - a view that shows a list of all languages stored into the localization context in addition to the form
for create and edit languages
- **Translations** - a view that shows a list of all translations defined by key and translations stored into the 
localization context in addition to the form for create and edit translations
- **Static Content** - a view that shows a list of all static content items defined by key and translation context 
stored into the localization content in addition to the form for create and edit static content