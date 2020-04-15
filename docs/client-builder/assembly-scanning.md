# Assembly Scanning
The development process could be sometimes quite exhausting work especially when a repeatable code appears which follows 
a pattern but this pattern is out of the scopes of the CLI tools and application generators. Then the reflection appeared. 
During the coding each developer use reflection in his/her code because it provides many benefits especially from time 
aspects. **Emeraude Client Builder** provides to developers the ability to simplify their reflection code and with ready to
use abstractions and as a result a new code can be created (generated).

With the help of static service called DtoConverter each C# class with reasonable complexity can be transformed into
simple and easy to read use class. The available abstractions are as follows:

### DtoType
**DtoType** is one of the main classes which describe a type from C# object/primitive. The provided properties of 
this type are:

| Property           | Type                    | Description                                                          |
|--------------------|-------------------------|----------------------------------------------------------------------|
| Name               | string                  | Short name of the type.                                              |
| FullName           | string                  | Full name of the type containing the namespace.                      |
| JavaScriptTypeName | string                  | Translated type for JavaScript programming language.                 |
| IsCollection       | bool                    | Indicates that the type is a collection (list, array, etc.)          |
| IsNullable         | bool                    | Indicates that the type is nullable.                                 |
| IsEnum             | bool                    | Indicates that the type is enumeration.                              |
| IsComplexType      | bool                    | Indicates that the type is not primitive type.                       |
| EnumValues         | Dictionary\<string, int> | Provides the enumeration keys and values if **IsEnum** is true.      |
| ComplexType        | DtoClass                | Provides the complex type of the class if **IsComplexType** is true. |

### DtoClass
**DtoClass** describes a C# class and is quite similar like the **DtoType**. The usage of this class is mainly to
describe a data transfer object (Example: ViewModel class).

| Property                                  | Type              | Description                                                                                                |
|-------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------|
| Name                                      | string            | Short name of the class.                                                                                   |
| FullName                                  | string            | Full name of the class containing the namespace.                                                           |
| JavaScriptTypeName                        | string            | Translated type for JavaScript programming language.                                                       |
| Properties                                | List\<DtoProperty> | A list that contains definitions for each property of the class.                                           |
| IsComplex                                 | bool              | Indicates that the type of the class is not assignable from primitive type.                                |
| ConstructorArgumentsListString            | string            | Returns a string that visualize the properties as a function arguments, separated with comma.              |
| ConstructorStrongTypedArgumentsListString | string            | Returns a string that visualize the properties as a function strong typed arguments, separated with comma. |

### DtoProperty
**DtoProperty** is direct related with **DtoClass** and its main purpose is to describe a property from a class.

| Property     | Type    | Description                                                    |
|--------------|---------|----------------------------------------------------------------|
| Name         | string  | Short name of the property.                                    |
| ReadOnly     | bool    | Indicates that the property has setter or not.                 |
| Type         | DtoType | Provides the type of the property in **DtoType** format.       |
| DefaultValue | string  | Returns the default value of the property (Example: int => 0). |


### DtoResponse
**DtoResponse** is a helper class that provides description for a method result, mainly used for extraction the result types of 
controller actions.

| Property     | Type     | Description                                     |
|--------------|----------|-------------------------------------------------|
| Void         | bool     | Indicates that the result have a result or not. |
| Class        | DtoClass | Provides the class of the response.             |
| IsCollection | bool     | Indicates that the result is a collection.      |

### DtoArgument
**DtoArgument** is a helper class that provides description for a method argument, mainly used for extraction the result types of 
controller actions.

| Property     | Type     | Description                                  |
|--------------|----------|----------------------------------------------|
| Name         | string   | Returns the name of the argument.            |
| Class        | DtoClass | Provides the class of the argument.          |
| IsCollection | bool     | Indicates that the argument is a collection. |