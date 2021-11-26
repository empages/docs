---
sidebar: true
sidebarDepth: 3
title: Domain | Core | Documentation
---
# Domain

Emeraude Framework is designed with Clean Architecture (and all onion-based architectures) in mind. Of course, it fits not 
only that architecture but all others. In the current documentation we are not going to explain how to fit Emeraude with 
every specific architecture because the list is huge. So the focus will be only in the Clean Architecture, but maybe it 
will be enough for you to fit the framework with different architecture.

As you know the Clean Architecture is onion-based with core defined by the **domain** of the application. The domain is 
responsible to contain the whole business definition without direct dependencies to any frameworks.
As you read in the architecture section - Emeraude is designed to inverse the dependency flow of your application architecture 
in order to allow access of your application source to the framework.

In the domain Emeraude needs to identify what are the entities of your business logic so that's why you need to implement 
the framework contracts or inherit the framework abstractions in order to inform Emeraude what are the units of your application.

::: info ASSEMBLY
**Emeraude.Contracts**
:::

The list of predefined contracts is small because we are trying to make your domain from our side clean as possible:
- **IEntity** - contract that represent a domain entity. It contains *Id* which is the identifier of the entity.
- **IAuditableEntity** - contract, that implements **IEntity** and contains auditable information about the entity: CreatedOn (string), UpdatedOn (string), CreatedBy (DateTimeOffset) UpdatedBy (DateTimeOffset)
- **IUser** - contract, that implements **IEntity** and represent a user with the following properties: Name (string), PhoneNumber (string), Email (string), AvatarUrl (string), RegistrationDate (DateTimeOffset)

As you see the contracts are simple as possible and their target goal is to make initial definition for your domain.
The framework provides an abstraction set of two of these contracts in order to speed up your development work:
- **Entity** - an implementation abstract class of **IEntity**
- **AuditableEntity** - an implementation abstract class of **IAuditableEntity**

::: info
Identifier of the entity is in GUID format in order to provide uniqueness, stability and security.
:::
