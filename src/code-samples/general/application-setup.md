---
sidebar: true
sidebarDepth: 3
title: Application Setup | Code Samples
---
# Application Setup

Application setup might be a tricky part in case you need more complex structure. The following example is a sample.
Please consider that your application might need similar but at the same time different setup in case to work as you
expect.

```csharp
public class Program
{
    public static async Task Main(string[] args)
    {
        await EmeraudeApplication.RunAsync(
            args,
            builder =>
            {
                builder
                    .ConfigureEmeraude(setup =>
                    {
                        setup.MainOptions.ApplicationAssembly = "MyApp.Application";
                        setup.MainOptions.InfrastructureAssembly = "MyApp.Infrastructure";
                        setup.MainOptions.DomainAssembly = "MyApp.Domain";
                        setup.MainOptions.AdminAssembly = "MyApp.Admin";
                        setup.MainOptions.ProjectName = builder.Configuration["MainSetup:Name"];
                        setup.MainOptions.BaseUri = builder.Configuration["MainSetup:BaseUri"];
                        setup.MainOptions.ExecuteMigrations = true;
                        setup.MainOptions.IncludeEmeraudeDefaultsAssembly();

                        setup.IdentityOptions.AccessTokenOptions.Key = builder.Configuration["AccessTokenOptions:Key"];
                        setup.IdentityOptions.AccessTokenOptions.Issuer = builder.Configuration["AccessTokenOptions:Issuer"];
                        setup.IdentityOptions.ExternalProvidersAuthenticators.Add(new GoogleAuthenticator
                        {
                            ClientId = builder.Configuration["ExternalAuthProviders:Google:ClientId"],
                            ClientSecret = builder.Configuration["ExternalAuthProviders:Google:ClientSecret"],
                        });

                        setup.PersistenceOptions.SetContext<IEntityContext, EntityContext>();
                        setup.PersistenceOptions.ContextProvider = DatabaseContextProvider.PostgreSql;
                        setup.PersistenceOptions.ConnectionString = builder.Configuration.GetConnectionString("EntityContext");
                        setup.PersistenceOptions.AddDatabaseInitializer<ApplicationDatabaseInitializer>();

                        setup.ApplicationsOptions.AddMappingProfile<MyAppAssemblyMappingProfile>();
                        setup.ApplicationsOptions.AddMappingProfile<MyAppCustomizedMappingProfile>();
                        setup.ApplicationsOptions.AddMappingProfile<MyAppAdminAssemblyMappingProfile>();

                        setup.FilesOptions.AllowImageUpload = true;
                        setup.FilesOptions.AddInitFolders("wwwroot", "uploads", "images");
                        setup.FilesOptions.AddInitFolders("privateroot", "uploads", "temp");

                        setup.ConsumerOptions.SetSitemapComposition<SitemapComposition>();

                        setup.AdminOptions.SetAdminMenusBuilder<AdminMenusBuilder>();

                        setup.ClientBuilderOptions.SetClientApplicationPath("NuxtClientApp", "..", "MyApp.Web");
                        setup.ClientBuilderOptions.AddAssembly("MyApp");
                        setup.ClientBuilderOptions.AddModule<NuxtConstantsModule>();
                        setup.ClientBuilderOptions.AddModule<NuxtStaticContentModule>();
                        setup.ClientBuilderOptions.AddModule<NuxtTranslationsModule>();
                        setup.ClientBuilderOptions.AddModule<NuxtPlatformApiModule>();
                        setup.ClientBuilderOptions.AddModule<NuxtBaseStylesModule>();
                        setup.ClientBuilderOptions.Constants.Add(
                            "GoogleRecaptchaSiteKey",
                            builder.Configuration["GoogleRecaptchaKeysOptions:SiteKey"]);
                        setup.ClientBuilderOptions.ConstantsTypes.AddRange(new[]
                        {
                            typeof(DomainConstants),
                            typeof(DefaultValues),
                            typeof(SearchConstants),
                            typeof(SocialAndContacts),
                        });

                        setup.PortalGatewayOptions.GatewayId = builder.Configuration["PortalGateway:GatewayId"];
                    })
                    .EmeraudePostConfigure(settingsBuilder =>
                    {

                    });

                builder.Services.RegisterInfrastructureServices();
            },
            app =>
            {
                if (app.Environment.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                    app.UseMigrationsEndPoint();
                }
                else
                {
                    app.UseExceptionHandler("/error/400");
                    app.UseHsts();
                }

                app.UseStatusCodePagesWithReExecute("/error/{0}");

                app.UseHttpsRedirection();

                app.UseStaticFiles();

                app.UseRouting();

                app.UseCors();

                app.UseAuthentication();

                app.UseAuthorization();
            });
    }
}
```

::: warning IMPORTANT
Please consider that some methods might be part of the original project (from which is the sample) and are not 
part of the Emeraude Framework SDK.
:::