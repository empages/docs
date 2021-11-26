---
sidebar: true
sidebarDepth: 3
title: Identity Event Handlers | Code Samples
---
# Identity Event Handlers

All event handlers examples are provided in a pair - **implementation**/**registration**  as follows:
* **implementation** - requires from you to make a class that must implement corresponding contract
* **registration** - requires from you to register the handler into the DI container in your application startup

## Login

```csharp
public class LoginEventHandler : ILoginEventHandler
{
    public async Task HandleAsync(LoginEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
    }
}
```

```csharp
services.SubscribeToLoginEvent<LoginEventHandler>();
```

## External login

```csharp
public class ExternalLoginEventHandler : IExternalLoginEventHandler
{
    public async Task HandleAsync(ExternalLoginEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
    }
}
```

```csharp
services.SubscribeToExternalLoginEvent<ExternalLoginEventHandler>();
```

## Register

```csharp
public class RegisterEventHandler : IRegisterEventHandler
{
    public async Task HandleAsync(RegisterEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
        // args.EmailConfirmationLink
    }
}
```

```csharp
services.SubscribeToRegisterEvent<RegisterEventHandler>();
```

## External register

```csharp
public class ExternalRegisterEventHandler : IExternalRegisterEventHandler
{
    public async Task HandleAsync(ExternalRegisterEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
    }
}
```

```csharp
services.SubscribeToExternalRegisterEvent<ExternalRegisterEventHandler>();
```

## Forgot password

```csharp
public class ForgotPasswordEventHandler : IForgotPasswordEventHandler
{
    public async Task HandleAsync(ForgotPasswordEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
        // args.ResetPasswordLink
    }
}
```

```csharp
services.SubscribeToForgotPasswordEvent<ForgotPasswordEventtHandler>();
```

## Reset password

```csharp
public class ResetPasswordEventHandler : IResetPasswordEventHandler
{
    public async Task HandleAsync(ResetPasswordEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
    }
}
```

```csharp
services.SubscribeToResetPasswordEvent<ResetPasswordEventHandler>();
```

## Confirmed email

```csharp
public class ConfirmedEmailEventHandler : IConfirmedEmailEventHandler
{
    public async Task HandleAsync(ConfirmedEmailEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
    }
}
```

```csharp
services.SubscribeToConfirmedEmailEvent<ConfirmedEmailEventHandler>();
```

## Request change email

```csharp
public class RequestChangeEmailEventHandler : IRequestChangeEmailEventHandler
{
    public async Task HandleAsync(RequestChangeEmailEventArgs args)
    {
        // Your code comes here
        // Event arguments are as follows:
        // args.UserId
        // args.HttpContext
        // args.EmailConfirmationLink
        // args.NewEmail
    }
}
```

```csharp
services.SubscribeToRequestChangeEmailEvent<RequestChangeEmailEventHandler>();
```
