module.exports = {
    lang: 'en-US',
    title: 'Emeraude Framework',
    description: 'A lightweight ASP.NET-based framework for creating manageable web applications designed with clean architecture.',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '_assets/favicons/image-x-icon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', href: '_assets/favicons/image-png.png' }],
        ['link', { rel: 'apple-touch-icon', href: '_assets/favicons/apple-touch-icon.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://emeraude.dev/' }],
        ['meta', { property: 'og:image', content: 'https://emeraude.dev/_assets/images/logo-bg.jpg' }],
        ['meta', { property: 'og:image:alt', content: 'Emeraude Framework' }]
    ],
    themeConfig: {
        logo: '/_assets/images/logo_text.svg',
        repo: 'empages',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
            {
                text: 'Documentation',
                link: '/documentation/guide/introduction',
                activeMatch: '^/documentation/'
            },
            {
                text: 'Code Samples',
                link: '/code-samples/general/application-setup',
                activeMatch: '^/code-samples'
            },
            {
                text: 'Packages',
                link: '/packages',
                activeMatch: '^/packages'
            },
            {
                text: 'Emeraude Portal',
                link: 'https://emeraude.io'
            }
        ],
        sidebar: {
            '/documentation/': getDocumentationSidebar(),
            '/code-samples/': getCodeSamplesSidebar()
        },
        algolia: {
            appId: 'SU8Z5GESLI',
            apiKey: '4113e5c121ab379d6deb7a323944d778',
            indexName: 'emeraude'
        }
    },
}

function getDocumentationSidebar() {
    return [
        {
            text: 'Guide',
            children: [
                { text: 'Introduction', link: '/documentation/guide/introduction' },
                { text: 'Architecture', link: '/documentation/guide/architecture' },
                { text: 'Getting Started', link: '/documentation/guide/getting-started' },
                { text: 'Configuration', link: '/documentation/guide/configuration' },
            ]
        },
        {
            text: 'Core',
            children: [
                { text: 'Domain', link: '/documentation/core/domain' },
                { text: 'Application', link: '/documentation/core/application' },
                { text: 'Infrastructure', link: '/documentation/core/infrastructure' },
                { text: 'Presentation', link: '/documentation/core/presentation' },
            ]
        },
        {
            text: 'Portal',
            children: [
                { text: 'Overview', link: '/documentation/portal/overview' },
                { text: 'Accessibility', link: '/documentation/portal/accessibility' },
                { text: 'Upgrading', link: '/documentation/portal/upgrading' }
            ]
        },
        {
            text: 'Admin',
            children: [
                { text: 'Portal', link: '/documentation/admin/portal' },
                { text: 'EmPages', link: '/documentation/admin/em-pages' },
                { text: 'Navigation', link: '/documentation/admin/navigation' },
                { text: 'Customization', link: '/documentation/admin/customization' },
            ]
        },
        {
            text: 'Client Builder',
            children: [
                { text: 'Runtime Generation', link: '/documentation/client-builder/runtime-generation' },
                { text: 'Scaffold Modules', link: '/documentation/client-builder/scaffold-modules' },
                { text: 'Portal', link: '/documentation/client-builder/portal' }
            ]
        }
    ]
}

function getCodeSamplesSidebar() {
    return [
        {
            text: 'General',
            children: [
                { text: 'Application Setup', link: '/code-samples/general/application-setup' },
                { text: 'Mapping', link: '/code-samples/general/mapping' },
                { text: 'Database Initializer', link: '/code-samples/general/database-initializer' },
            ]
        },
        {
            text: 'Identity',
            children: [
                { text: 'Event Handlers', link: '/code-samples/identity/event-handlers' },
                { text: 'Controller', link: '/code-samples/identity/controller' },
                { text: 'Views', link: '/code-samples/identity/views' }
            ]
        },
        {
            text: 'Admin',
            children: [
                { text: 'Admin Menus', link: '/code-samples/admin/admin-menus' },
                { text: 'EmPage Schema', link: '/code-samples/admin/em-page-schema' },
                { text: 'EmPage Data Strategy', link: '/code-samples/admin/em-page-data-strategy' },
                { text: 'Runtime Injection', link: '/code-samples/admin/runtime-injection' },
            ]
        },
        {
            text: 'Client Builder',
            children: [
                { text: 'Module', link: '/code-samples/client-builder/module' },
                { text: 'Template', link: '/code-samples/client-builder/template' }
            ]
        },
        {
            text: 'Deployment',
            children: [
                { text: 'NGINX Configuration', link: '/code-samples/deployment/nginx-config' },
                { text: 'Linux System Service', link: '/code-samples/deployment/linux-system-service' },
            ]
        }
    ]
}
