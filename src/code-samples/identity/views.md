---
sidebar: true
sidebarDepth: 3
title: Identity Views | Code Samples
---
# Identity View

By using the Razor engine you can easily make identity views for your application in case you need them as a presentation
part of the identity controllers. A sample login view is:

```cshtml
@using Emeraude.Presentation.PlatformBase.Extensions
@model LoginViewModel
@{
    Layout = $"_AuthLayout";
    ViewData.SetTitle(Localizer.TranslateKey("LOGIN"));
}

<partial name="_ExternalLoginForm" />
<t element="h5" class="mt-3 mb-2 text-center w-100 font-weight-bold">LOG_INTO_YOUR_PROFILE</t>
@if (Html.HasNonModelError())
{
    <div class="alert alert-danger mb-2">
        <i class="fas fa-exclamation-triangle"></i> <t convert="true">@Html.NonModelError()</t>
    </div>
}
<form asp-controller="ApplicationUserAuthentication" asp-action="Login" method="post">
    @Html.AntiForgeryToken()
    <div class="form-group mb-1">
        <t element="label" class="mb-0">EMAIL</t>
        <input type="email" class="form-control" asp-for="Email" placeholder="@Localizer.TranslateKey("EMAIL")" />
        <t class="text-danger text-small" strip-html="true" convert="true">@Html.ValidationMessage(nameof(Model.Email))</t>
    </div>
    <div class="form-group mb-1">
        <t element="label" class="mb-0">PASSWORD</t>
        <input class="form-control" type="password" asp-for="Password" placeholder="@Localizer.TranslateKey("PASSWORD")" />
        <t class="text-danger text-small" strip-html="true" convert="true">@Html.ValidationMessage(nameof(Model.Password))</t>
    </div>
    <a class="link" href="@Url.LanguageAction("ForgotPassword", "ApplicationUserAuthentication")"><t>FORGOT_PASSWORD</t>?</a>
    <div class="d-block w-100 mt-3">
        <button class="btn btn-primary btn-lg btn-shadow w-100" type="submit"><t>LOGIN</t></button>
    </div>
    <div class="d-block w-100 text-center">
        <a class="link" href="@Url.LanguageAction("Register", "ApplicationUserAuthentication")"><t>DONT_HAVE_A_PROFILE</t>?</a>
    </div>
</form>
```

::: info INFO
The framework has no limitation in the view itself because the controller that invokes that view is a part of your application.
Emeraude provides only the abstract authentication controller in case you need it. Everything else is 100% under your control.
:::