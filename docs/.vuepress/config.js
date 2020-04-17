module.exports = {
    title : 'Emeraude',
    description : 'The Sparkling B2C Application Framework',
    head: [
        ['link', { rel: "apple-touch-icon", href: "/assets/favicons/icon200.png"}],
        ['link', { rel: "icon", type: "image/x-icon", href: "/assets/favicons/icon32.ico"}],
        ['link', { rel: "icon", type: "image/png", href: "/assets/favicons/icon32.png"}],
        ['link', { rel: "stylesheet", type: "text/css", href: "/assets/fonts/mdi/css/materialdesignicons.min.css"}],
    ],
    plugins: [
        ['@vuepress/google-analytics', {
            ga: 'UA-92025616-3'
        }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'Definux/Emeraude',
        docsDir: 'docs',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/introduction.html' },
            { text: 'Admin', link: '/admin/introduction.html' },
            { text: 'Client Builder', link: '/client-builder/introduction.html' },
            { text: 'Mobile SDK', link: '/mobile-sdk/introduction.html' },
            {
                text: 'Samples',
                ariaLabel: 'Samples Menu',
                items: [
                    { text: 'Web', link: 'https://github.com/Definux/DogApp.Web' },
                    { text: 'Mobile', link: 'https://github.com/Definux/DogApp.Mobile' }
                ]
}
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',  // required
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        'introduction',
                        'architecture',
                        'getting-started',
                        'configuration'
                    ]
                },
                {
                    title: 'Domain',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'system-entities',
                        'entity-inheritance',
                        'value-objects',
                        'domain-services'
                    ]
                },
                {
                    title: 'Infrastructure',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'create-a-service',
                        'emails-manager',
                        'validators',
                        'logger',
                    ]
                },
                {
                    title: 'Application',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'interfaces',
                        'queries',
                        'commands'
                    ]
                },
                {
                    title: 'Client',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'account',
                        'em-pages',
                        'ssr-initial-state',
                        'localization',
                        'api-controllers',
                        'seo'
                    ]
                },
                {
                    title: 'Misc',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'help-apis',
                        'data-seed',
                        'constants'
                    ]
                },
            ],

            '/admin/': [
                {
                    title: 'Administration',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'introduction',
                        'features',
                        'authorization'
                    ]
                },
                {
                    title: 'Auto CRUD',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'table-view',
                        'details-view',
                        'create-form',
                        'edit-form',
                        'selectable-gallery',
                        'admin-crud-controllers',
                        'admin-child-crud-controllers'
                    ]
                },
                {
                    title: 'Layout',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'admin-menus',
                        'admin-controllers',
                        'breadcrumbs',
                        'customization'
                    ]
                }
            ],

            '/client-builder/': [
                {
                    title: 'Client Builder',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'introduction',
                        'type-definition',
                        'building-entities',
                        'localization'
                    ]
                },
                {
                    title: 'Modules',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'web-modules',
                        'mobile-modules',
                        'create-a-module'
                    ]
                },
            ],

            '/mobile-sdk/': [
                {
                    title: 'Mobile SDK',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'introduction',
                        'configuration',
                        'view-models',
                        'stores',
                        'service-agents'
                    ]
                }
            ],
        },
        displayAllHeaders: true,
    },
}