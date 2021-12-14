---
sidebar: true
sidebarDepth: 3
title: Module | Code Samples
---
# Module

Let's make a simple scaffold module that takes specified static classes and additional configuration
and create a JavaScript file with constants.

```csharp
public class NuxtConstantsModule : ScaffoldModule
{
    public NuxtConstantsModule()
    {
        this.Name = "Nuxt Constants";
        this.IconUrl = "/assets/images/nuxt.svg";
        this.ScaffoldTypeName = "Nuxt";
        this.ClientId = "nuxt.scaffold.module";
        this.Type = InstanceType.Web;
    }

    public override void DefineFiles()
    {
        string relativePath = Path.Combine(this.Options.GetNuxtClientAppPath(), NuxtAppFolders.Shared);

        this.AddFile(new ModuleFile
        {
            Name = "constants.js",
            RelativePath = relativePath,
            TemplateType = typeof(ConstantsTemplate),
            RenderFunction = this.RenderConstants,
        });
    }

    public override void DefineFolders()
    {
        this.AddFolder(new ModuleFolder
        {
            Name = NuxtAppFolders.Shared,
            RelativePath = this.Options.GetNuxtClientAppPath(),
        });
    }

    private string RenderConstants(ModuleFile file)
    {
        var constantDictionaries = this.Options.ConstantsTypes
            .ToDictionary(
                tk => tk.Name,
                tv =>
                    tv.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy)
                        .Where(xx => xx.IsLiteral && !xx.IsInitOnly)
                        .ToDictionary(
                            k => StringUtilities.ConvertToKey(k.Name),
                            v => this.ConvertToJavaScriptValue(v.GetRawConstantValue())));

        if (this.Options.Constants.Count > 0)
        {
            constantDictionaries["ConstantsExposedByTheApplication"] = this.Options.Constants
                .ToDictionary(
                    x => StringUtilities.ConvertToKey(x.Key),
                    x => this.ConvertToJavaScriptValue(x.Value));
        }

        return file.RenderTemplate(new Dictionary<string, object>
        {
            { "Constants", constantDictionaries },
        });
    }

    private string ConvertToJavaScriptValue(object value)
    {
        if (value == null)
        {
            return "null";
        }

        if (value.GetType().IsNumericType() || value is bool)
        {
            return value.ToString();
        }

        return $"'{value}'";
    }
}
```

::: tip
In order to see the used template check the [template subsection](/code-samples/client-builder/template.html).
:::
