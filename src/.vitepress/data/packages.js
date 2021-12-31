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
        possibleReferences: [applicationProjects.presentation]
    },
    {
        name: 'Emeraude.Contracts',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Configuration',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Essentials',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Infrastructure',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Infrastructure.Persistence',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Identity',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Localization',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.FileStorage',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application.Identity',
        possibleReferences: [applicationProjects.presentation, applicationProjects.infrastructure, applicationProjects.application, applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application.Admin',
        possibleReferences: [applicationProjects.admin]
    },
    {
        name: 'Emeraude.Application.Admin.EmPages',
        possibleReferences: [applicationProjects.admin]
    },
    {
        name: 'Emeraude.Application.Consumer',
        possibleReferences: [applicationProjects.presentation, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Application.ClientBuilder',
        possibleReferences: [applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Presentation',
        possibleReferences: [applicationProjects.presentation]
    },
    {
        name: 'Emeraude.Presentation.PlatformBase',
        possibleReferences: [applicationProjects.presentation]
    },
    {
        name: 'Emeraude.Presentation.PortalGateway',
        possibleReferences: [applicationProjects.admin, applicationProjects.clientBuilder]
    },
    {
        name: 'Emeraude.Defaults',
        possibleReferences: [...applicationProjectsArray]
    },
    {
        name: 'Emeraude.Cli',
        possibleReferences: []
    }
]
