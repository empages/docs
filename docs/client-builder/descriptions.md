# Descriptions
The development process could be sometimes quite exhausting work especially when a repeatable code appears which follows 
a pattern but this pattern is out of the scopes of the CLI tools and application generators. Then the reflection appeared. 
During the coding each developer use reflection in his/her code because it provides many benefits especially from time 
aspects. **Emeraude Client Builder** provides to developers the ability to simplify their reflection code and with ready to
use abstractions and as a result a new code can be created (generated).

With the help of static service called **DescriptionExtractor** each C# class with reasonable complexity can be transformed into
simple and easy to read use class. 

::: warning IMPORTANT
**DescriptionExtractor** is using recursion to define and transform the different description types. Take into account
that using it for types which have circular references might cause an infinite recursion.
:::

The available abstractions used by the facade extractor are as follows:

## Type Descriptions
**TypeDescriptions** are simplified assembly descriptions and one of the main classes which describe a type from C# object/primitive. They provide:

###### ConstructorArgumentsListString `property`
Constructor arguments names of the class, separated with comma and join into a string.

###### ConstructorStrongTypedArgumentsListString `property`
Constructor arguments names of the endpoint, separated with comma and join into a string with their types.

###### EnumValues `property`
Enumeration values in case when type is enum.

###### FullName `property`
Full name of the class.

###### IsCollection `property`
Indicates that the type is collection or not.

###### IsComplex `property`
Indicates that the type is primitive type (false) or not (true).

###### IsEnum `property`

Indicates that the type is enumeration or not.

###### IsGenericType `property`
Indicates that the type is generic type or not.

###### IsNullable `property`
Indicates that the type is nullable or not.

###### JavaScriptTypeName `property`
JavaScript name of the class.

###### Name `property`
Name of the class.

###### Properties `property`
List of all properties of the class.

## Property Descriptions
**Properties** are directly related with **TypeDescription** and its main purpose is to describe a property from a class.
They provide:

###### DefaultValue `property`
Default value for the current type.

###### Name `property`
Name of the property.

###### ReadOnly `property`
Indicates whether the property is read-only or not.

###### Type `property`
Type description of the property.

## Response Descriptions
**ResponseDescription** is a helper class that provides description for a method result, mainly used for extraction the result types of 
controller actions. They provide:

###### Type `property`
Type description of the response.

###### Void `property`
Indicates whether the response is void.

## Argument Descriptions
**ArgumentDescription** is a helper class that provides description for a method argument, mainly used for extraction the result types of 
controller actions.

###### Name `property`
Name of the argument.

###### Type `property`
Type description of the argument.
