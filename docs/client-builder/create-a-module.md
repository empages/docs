# Create a Module

In addition to already provided modules from *Emeraude Framework*, you can easily create your own modules that will improve 
and optimize your development process. Modules are based on C# and T4 Template Engine. The creation requires just a 
single C# class that implements the abstract class **ScaffoldModule** which is part of assembly **Definux.Emeraude.Admin.ClientBuilder**.
An example module class will look like following:
```cs
public class VueExampleModule : ScaffoldModule
{
    public VueExampleModule()
        : base("Vue Example", InstanceType.WebModule, true)
    {
        Order = 5; // Optional
    }

    public override void DefineFiles()
    {
        // Files Definition
    }

    public override void DefineFolders()
    {
        // Folders Definition
    }
}
```

## Module Constructor
The information that you can provide in the constructor is vital for the generation process.
The meaning of each property is:
- *Name* - Name of the module. *Emeraude* uses naming convention with the related technology in front of the name ('Vue Example' for Vue module).
- *Locked* - Inform developers that the module is generated each time that is called and therefore locked for custom edit. 
It is maybe the most important property because if it is set incorrectly the *ClientBuilder* can destroy your custom code.
- *Type* - The instance type of the module (Undefined/Web/Mobile).
- *Order* - [Optional] The order of execution in case you use the bulk generation engine for web or mobile modules.

## Module Workflow
Each module is defined by specified workflow which starts from data extraction from databases of the application, 
project assemblies and/or custom data sources.
The second step of the workflow is the resources definition folders/files where must be defined the name, path and content 
of the desired files and/or folders. On the following scheme is visualized the module workflow:

![Module Workflow](/assets/images/client_builder_module.png)


## Folders
**DefineFolders** method is built to contain the module logic for folders generation. The definition is not required and it 
is ok to leave the method with no implementation. Though if you need folders for your module you can define them by using 
**AddFolder** method:
```cs
public override void DefineFolders()
{
    AddFolder(new ModuleFolder
    {
        Name = "folder",
        RelativePath = Options.ClientAppPath,
    });

    AddFolder(new ModuleFolder
    {
        Name = "subfolder",
        RelativePath = Path.Combine(Options.ClientAppPath, "folder"),
    });
}
```


## Files
**DefineFiles** method is created to contain the module logic for module files. You are free to leave the method without
implementation if your module generates folders only. To define your files use **AddFile** method:
```cs
public override void DefineFiles()
{
    string relativePath = Path.Combine(Options.ClientAppPath, "folder", "subfolder");

    AddFile(new ModuleFile
    {
        Name = "file1.js",
        RelativePath = relativePath,
        TemplateType = typeof(File1Template),
        RenderFunction = RenderFile1
    });

    AddFile(new ModuleFile
    {
        Name = "file2.json",
        RelativePath = relativePath,
        TemplateType = typeof(File2Template),
        RenderFunction = RenderFile2
    });
}

private string RenderFile1(ModuleFile file)
{
    // file 1 render logic
}

private string RenderFile2(ModuleFile file)
{
    // file 2 render logic
}
```
*Options* property is an instance of **ClientBuilderOptions** that contains the init options you set up into the startup of the app.
In case you want to transfer identification information **ModuleFile** has *ReferenceId* property which is design to be used 
to transfer Id of element or something for element selection.

::: tip RENDER FUNCTION
**RenderFunction** property accepts **Func<ModuleFile, string>** type which is executing automatically when the module generation 
action is triggered by the *Client Builder*. The function might be used with absolutely custom implementation with manually 
generation of the string result. The already provided option is to use file method *RenderTemplate* which use the defined
T4 template of the file (TemplateType property).
:::

#### Helping Properties and Methods
- **ServiceProvider** property - Allows you to get an instance of service, database, etc. Each module has **GetService** method which use 
**ServiceProvider** to get desired service.
- **TemplateRenderer.RenderTemplate** method - Render to string a given template (by Type) and session dictionary (Dictionary<string, object>).
- **IPageService** - A service that provides all EmPages extracted from the assemblies. It could be get by execute **GetService\<IPageService>()**.
- **IEndpointService** - A service that provides all API endpoints extracted from the assemblies. It could be get by execute **GetService\<IEndpointService>()**.

::: tip RECOMMENDATION
We recommend to check assemblies **Definux.Emeraude.Admin.ClientBuilder.Modules.Vue** or **Definux.Emeraude.Admin.ClientBuilder.Modules.Xamarin**
from the *Emeraude* repository for different modules implementations.
:::

#### T4 Template Notes
T4 templates must be defined for runtime rendering with custom tool option value - **TextTemplatingFilePreprocessor**.
```xml
<ItemGroup>
  <None Update="VueExample\Templates\File1Template.tt">
    <LastGenOutput>File1Template.cs</LastGenOutput>
    <Generator>TextTemplatingFilePreprocessor</Generator>
  </None>
  <None Update="VueExample\Templates\File2Template.tt">
    <LastGenOutput>File2Template.cs</LastGenOutput>
    <Generator>TextTemplatingFilePreprocessor</Generator>
  </None>
</ItemGroup>
```
Indicator for the properly template working is the existing of related class for the template file.