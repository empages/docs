module.exports = {
    title : 'Emeraude Framework',
    description : 'The technological excellence.',
    head: [
        ['link', { rel: "apple-touch-icon", href: "/assets/favicons/icon200.png"}],
        ['link', { rel: "icon", type: "image/x-icon", href: "/assets/favicons/icon32.ico"}],
        ['link', { rel: "icon", type: "image/png", href: "/assets/favicons/icon32.png"}],
        ['link', { rel: "stylesheet", type: "text/css", href: "/assets/fonts/mdi/css/materialdesignicons.min.css"}],
    ],
    plugins: [
        ['@vuepress/back-to-top', true],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-92025616-4'
            }
        ]
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/assets/images/logo_text_white.svg',
        constants: {
            dotNetSdk: '.NET Core',
            dotNetVersion: '3.1'
        },
        repo: 'Definux/Emeraude',
        docsDir: 'docs',
        nav: [
            { text: 'Core', link: '/core/introduction.html' },
            { text: 'Admin', link: '/admin/introduction.html' },
            { text: 'Client', link: '/client/introduction.html' },
            { text: 'Client Builder', link: '/client-builder/introduction.html' },
            { text: 'Mobile SDK', link: '/mobile-sdk/introduction.html' },
        ],
        sidebar: {
            '/core/': [
                {
                    title: 'Guide',  // required
                    collapsable: true, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        'introduction',
                        'architecture',
                        'getting-started'
                    ]
                },
                {
                    title: 'Domain',
                    collapsable: true,
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
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'persistence',
                        'identity',
                        'localization',
                        'files',
                        'emails',
                        'logger'
                    ]
                },
                {
                    title: 'Application',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'interfaces',
                        'queries',
                        'commands'
                    ]
                },
                {
                    title: 'Presentation',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [

                    ]
                },
                {
                    title: 'Misc',
                    collapsable: true,
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
                    title: 'Admin Panel',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'introduction',
                        'features',
                        'authorization'
                    ]
                },
                {
                    title: 'Auto CRUD',
                    collapsable: true,
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
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'admin-menus',
                        'admin-controllers',
                        'breadcrumbs',
                        'customization'
                    ]
                }
            ],
            '/client/': [
                {
                    title: 'Client Side',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'introduction',
                        'account'
                    ]
                },
                {
                    title: 'EmPages',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'em-pages',
                        'ssr-initial-state'
                    ]
                },
                {
                    title: 'Localization',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'localization'
                    ]
                },
                {
                    title: 'Web API',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'api-controllers'
                    ]
                },
                {
                    title: 'SEO',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'seo'
                    ]
                }
            ],
            '/client-builder/': [
                {
                    title: 'Client Builder',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'introduction',
                        'descriptions',
                        'building-entities',
                        'localization'
                    ]
                },
                {
                    title: 'Modules',
                    collapsable: true,
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
                    collapsable: true,
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