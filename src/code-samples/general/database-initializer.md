---
sidebar: true
sidebarDepth: 3
title: Database Initializer | Code Samples
---
# Database Initializer

Database initializer is useful feature provided by the Emeraude Framework. It can be used to populate your database on
application start. It can be quite useful when you need specific data from the beginning.

**Emeraude.Defaults** provides a simple database initializer that populate default user and roles in order to start from
non-empty database. The source of the initializer is as follows:

```csharp
public class ApplicationDatabaseInitializer : IDatabaseInitializer
{
    private readonly IEmContext context;
    private readonly IUserManager userManager;
    private readonly IRoleManager roleManager;
    private readonly EmIdentityOptions identityOptions;

    public ApplicationDatabaseInitializer(
        IEmContext context,
        IUserManager userManager,
        IRoleManager roleManager,
        IEmOptionsProvider optionsProvider)
    {
        this.context = context;
        this.userManager = userManager;
        this.roleManager = roleManager;
        this.identityOptions = optionsProvider.GetIdentityOptions();
    }

    public async Task SeedAsync()
    {
        if (!await this.context.Set<Role>().AnyAsync())
        {
            await this.EnsureRoleAsync(EmRoles.Admin, EmPermissions.GetAllPermissionValues());
            await this.EnsureRoleAsync(EmRoles.User, new string[] { });
            if (this.identityOptions.AdditionalRoles != null && this.identityOptions.AdditionalRoles.Count > 0)
            {
                foreach (var role in this.identityOptions.AdditionalRoles)
                {
                    await this.EnsureRoleAsync(role.Key, role.Value);
                }
            }
        }

        if (!await this.context.Set<User>().AnyAsync())
        {
            await this.CreateUserAsync(
                DefaultUsers.DefaultEmeraudeAdminEmail,
                DefaultUsers.DefaultEmeraudeAdminPassword,
                DefaultUsers.DefaultEmeraudeAdminName,
                new[] { EmRoles.Admin });

            await this.CreateUserAsync(
                DefaultUsers.DefaultEmeraudeUserEmail,
                DefaultUsers.DefaultEmeraudeUserPassword,
                DefaultUsers.DefaultEmeraudeUserName,
                new[] { EmRoles.User });
        }
    }

    private async Task EnsureRoleAsync(string roleName, string[] claims)
    {
        if (!await this.context.Set<Role>().Where(x => x.Name == roleName).AnyAsync())
        {
            await this.roleManager.CreateRoleAsync(roleName, claims);
        }
    }

    private async Task CreateUserAsync(string email, string password, string name, string[] roles)
    {
        User user = new User
        {
            UserName = email,
            Email = email,
            Name = name,
            EmailConfirmed = true,
            RegistrationDate = DateTime.Now,
            LockoutEnabled = true,
        };

        var result = await this.userManager.CreateAsync(user, password);
        if (result.Succeeded)
        {
            await this.userManager.AddToRolesAsync(user, roles);
        }
    }
}
```