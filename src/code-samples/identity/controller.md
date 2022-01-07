---
sidebar: true
sidebarDepth: 3
title: Identity Controller | Code Samples
---
# Identity Controller

In order to use the built-in authentication feature of the framework you just need to 
inherit **UserAuthenticationController**:

```csharp
public class ApplicationUserAuthenticationController : UserAuthenticationController
{
    public ApplicationUserAuthenticationController(
        IUserClaimsService userClaimsService,
        UrlEncoder urlEncoder,
        SignInManager<User> signInManager,
        IExternalProviderAuthenticatorFactory externalProviderAuthenticatorFactory,
        ILogger<ApplicationUserAuthenticationController> logger)
        : base(userClaimsService, urlEncoder, signInManager, externalProviderAuthenticatorFactory, logger)
    {
    }
}
```

::: info INFO
Consider that everything in that base controller is virtual, so it can easily be overridden if needed.
:::