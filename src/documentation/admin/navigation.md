---
sidebar: true
sidebarDepth: 3
title: Navigation | Admin | Documentation
---
# Navigation

Administration side of the Emeraude Portal is designed to fit the needs of the application stakeholders by providing
functionalities with simple setup. In order to allow access to these functionalities Emeraude is providing a specialized
adapter called ``IAdminMenusBuilder``. The implementation of that interface and its proper registration in the 
options will provide a service adapter (builder) that will return to the portal the structure of the sidebar menus that 
has to be rendered to the authenticated user.

Implementation of that adapter will require the implementation of asynchronous method called **BuildAsync** that expects as
a result a Task of ``SidebarSchema``. That schema contains two collections - Sections and ShortcutsLinks. 

Sections is a collection of ``SidebarMenuSection`` that contains definition for each menu section as follows:

- Title - title of the section
- Icon - CSS classes that defines the icon that you might place in the sidebar. The default loaded icon package is 
[MaterialDesignIcons](https://pictogrammers.github.io/@mdi/font/5.9.55/).
- IsDropdown - flag that indicates whether the section has behavior of dropdown or not
- Children - a collection of ``SidebarMenuLink`` where each link has *Title* and *Routes* (Collection of strings that
represents a routes for the current link. If you want to specify wildcard route - you can use **{\*}** (Example: "/dogs", "/dogs/{*}"))

::: warning IMPORTANT
Consider that the wildcard routes are important for the portal and its pattern recognition for defining the active menu section
:::

ShortcutsLinks is a collection of ``SidebarShortcutLink`` that contains definition for help links that can be part of the sidebar.

- Title - title of the link
- Route - route of the link

For an example implementation of the admin menu builder you can check the following [sample](/code-samples/admin/admin-menus).