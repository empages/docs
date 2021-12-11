---
sidebar: true
sidebarDepth: 3
title: Admin Menus | Code Samples
---
# Admin Menus

In case we want to implement simple menu that allows to us to create direct access to the dashboard and
one another page (FAQ). In addition, we want additional link that opens the main domain of our application.

```csharp
public class AdminMenusBuilder : IAdminMenusBuilder
{
    public async Task<SidebarSchema> BuildAsync() =>
        await Task.FromResult(new SidebarSchema
        {
            ShortcutsLinks = new List<SidebarShortcutLink>
            {
                new ()
                {
                    Title = "Our Awesome App",
                    Route = "https://www.our-awesome-app.com/",
                },
            },
            Sections = new List<SidebarMenuSection>
            {
                new ()
                {
                    Title = "Dashboard",
                    Icon = "mdi mdi-television",
                    Children = new List<SidebarMenuLink>
                    {
                        new ("Index", "/admin"),
                    },
                },
                new ()
                {
                    Title = "FAQ",
                    Icon = "mdi mdi-frequently-asked-questions",
                    Children = new List<SidebarMenuLink>
                    {
                        new ("Index", "/admin/faq", "/admin/faq/{*}"),
                    },
                },
            },
        });
}
```

::: tip
Consider that awaited **Task.FromResult(...)** is optional. In case you will call some asynchronous service method inside 
the implementation of the menu builder, you won't need it.
:::
