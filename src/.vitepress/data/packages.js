const applicationProjects = {
    presentation: 'Presentation',
    application: 'Application',
    infrastructure: 'Infrastructure',
    domain: 'Domain',
    admin: 'Admin',
    clientBuilder: 'Client Builder'
}

const applicationProjectsArray = [
    applicationProjects.presentation,
    applicationProjects.application,
    applicationProjects.infrastructure,
    applicationProjects.domain,
    applicationProjects.admin,
    applicationProjects.clientBuilder
]

export const packages = [
    {
        name: 'Emeraude',
        description: 'The main package of the framework. Exposes the extensions and setup utilities for application running.',
        possibleReferences: [applicationProjects.presentation]
    },
    {
        name: 'Emeraude.Contracts',
        description: 'Base contracts for domain recognition from Emeraude.',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Configuration',
        description: 'Configuration abstractions of Emeraude used for options definition and accessibility from the framework side.',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Essentials',
        description: 'Base constants, utilities and helpers needs for the proper work of the framework.',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Infrastructure',
        description: 'Emeraude.Infrastructure',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Infrastructure.Persistence',
        description: 'Emeraude.Infrastructure.Persistence',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Identity',
        description: 'Emeraude.Identity',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Localization',
        description: 'Emeraude.Localization',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.FileStorage',
        description: 'Emeraude.FileStorage',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application',
        description: 'Emeraude.Application',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application.Identity',
        description: 'Emeraude.Application.Identity',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application.Admin',
        description: 'Emeraude.Application.Admin',
        possibleReferences: [applicationProjects.admin]
    },
    {
        name: 'Emeraude.Application.Admin.EmPages',
        description: 'Emeraude.Application.Admin.EmPages',
        possibleReferences: [applicationProjects.admin]
    },
    {
        name: 'Emeraude.Application.Consumer',
        description: 'Emeraude.Application.Consumer',
        possibleReferences: [applicationProjects.presentation, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application.ClientBuilder',
        description: 'Emeraude.Application.ClientBuilder',
        possibleReferences: [applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Presentation',
        description: 'Emeraude.Presentation',
        possibleReferences: [applicationProjects.presentation]
    },
    {
        name: 'Emeraude.Presentation.PlatformBase',
        description: 'Emeraude.Presentation.PlatformBase',
        possibleReferences: [applicationProjects.presentation]
    },
    {
        name: 'Emeraude.Presentation.PortalGateway',
        description: 'Emeraude.Presentation.PortalGateway',
        possibleReferences: [applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Defaults',
        description: 'Package that contains default customizable implementations of the framework API.',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Cli',
        description: 'Emeraude.Cli',
        possibleReferences: []
    }
]
