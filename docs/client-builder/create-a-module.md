# Create a Module

In addition to already provided modules from *Emeraude Framework*, you can easily create your own modules that will improve 
and optimize your development process. Modules are based on C# and T4 Template Engine. The creation requires just a 
single C# class that implements the abstract class **ScaffoldModule** which is part of assembly **Definux.Emeraude.Admin.ClientBuilder**.
An example module class will look like following:
```cs
public class VueExampleModule : ScaffoldModule
{
    public ExampleModule(string sourceDirectory)
        : base(sourceDirectory)
    {
        Name = "Vue Example";
        Locked = true;
        Type = InstanceType.WebModule;
        Order = 150;
    }

    public override void DefineFiles()
    {
        // Files Definition
    }

    public override void DefineFolders()
    {
        // Folders Definition
    }

    public override bool Generate(out string errorMessage)
    {
        // Generation process
    }
}
```

### Module Constructor
The information that you can provide in the constructor is not required and not so vital for the generation process.
It is recommended to fill this information because with it you can easily navigate in the administration user interface.
The meaning of each property is:
- *Name* - Name of the module. *Emeraude* uses naming convention with the related technology in front of the name ('Vue Example' for Vue module).
- *Locked* - Inform developers that the module is generated each time that is called and therefore locked for custom edit.
- *Type* - The instance type of the module (Undefined/Web/Mobile).
- *Order* - The order of execution in case you use the bulk generation engine for web or mobile modules.

### Files
**DefineFiles** method is created to contain the module logic for module files. You are free to leave the method without
implementation if your module generates folders only. To define your files use **AddFiles** method:
```cs
public override void DefineFiles()
{
    string relativePath = Path.Combine(Options.ClientAppPath, "example");

    AddFiles(
        new ModuleFile
        {
            Name = "index.js",
            RelativePath = relativePath,
            TemplateType = typeof(IndexTemplate)
        });
}
```
*Options* property is an instance of **ClientBuilderOptions** that contains the init options you set up into the startup of the app.
Basically the properties of **ModuleFile** are clear excluding the *TemplateType*. The purpose of that property is to 
provide the layout which will be used for the generation process. It has the type of the T4 template which will be used
for file layout.

### Folders
**DefineFolders** method is built to contain the module logic for folders generation. The definition is not required and it 
is OK to leave the method with no implementation. Though if you need folders for your module you can define them by using 
**AddFolders** method:
```cs
public override void DefineFolders()
{
    AddFolders(
        new ModuleFolder
        {
            Name = "example",
            RelativePath = Options.ClientAppPath,
        });
}
```

### Generate
Into the **Generate** method you have the freedom to build your file/s and folder/s as you wish. The only recommendation is to
return an informative error messages and correct results in case of failure for your generation. That will allow you to catch the 
possible errors during the generation.

#### Helping Properties and Methods
- **ServiceProvider** property - Allows you to get an instance of service, database, etc.
- **TemplateRenderer.RenderTemplate** method - Render to string a given template (by Type) and session dictionary (Dictionary<string, object>).
- **IPageService** - A service that provides all EmPages extracted from the assemblies. Get it by the **ServiceProvider**.
- **IEndpointService** - A service that provides all API endpoints extracted from the assemblies. Get it by the **ServiceProvider**.

::: tip RECOMMENDATION
We recommend to check assemblies **Definux.Emeraude.Admin.ClientBuilder.Modules.Vue** or **Definux.Emeraude.Admin.ClientBuilder.Modules.Xamarin**
from the *Emeraude* repository for different modules implementations.
:::