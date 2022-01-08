---
sidebar: true
sidebarDepth: 3
title: Emeraude Portal | Admin | Documentation
---
# Emeraude Portal

The main purpose of the Emeraude Portal is the existence of the administration panel that is coming out of the box. 
Its idea is to provide complete management experience to its users. The admin panel is designed to fit the needs of 
the Portal Gateway of the application, but it is not limited to be used by any other application that can expose the 
same endpoints.

The administration can be divided on a few parts based on their purpose:

## Authentication
The authentication of the portal is based on the settings that are specified at the local storage of your browser.
In order a user be authenticated he/she must provide his/her email and password. The credentials have to match a stored
identity user in the application database. In case identity user is activated his/her two-factor authentication a form
for the authenticator code will appear on the screen.

<div class="text-center">
    <img class="w-auto" src="/_assets/images/admin-auth.png" alt="Admin Authentication"/>
</div>

## Admin management

The admin user management is a feature that is built by few parts that are mainly related to the changing user data.
The management feature provides access to change password form, change email form and, activate 2FA form. The idea is
easily to be changed the credentials of the user that is logged in.

## Layout

The administration layout itself is very simple as a structure. You can identify a few main elements that are important 
and can be customized in order to be provided more fluent experience:

- **User Dropdown** - this is the dropdown placed in the top-right that provide access to the admin management features
- **Sidebar** - an admin menu container that is placed on the left side of the screen, and it is designed to be set up by you
- **Main** - the main container that renders [EmPages](/documentation/admin/em-pages)
- **Breadcrumbs** - micro navigation links that are placed on the top of the main container and provides easy navigation between the pages
- **Page Actions** - action buttons that are placed at the top of the screen and provides slots for custom-made actions