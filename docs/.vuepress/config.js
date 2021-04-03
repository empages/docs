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
        logoMobile: '/assets/images/logo_white.svg',
        constants: {
            dotNetSdk: '.NET Core',
            dotNetVersion: '3.1'
        },
        searchPlaceholder: 'Search',
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
                        'value-objects'
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
                        'services',
                        'requests',
                        'models',
                        'mapping'
                    ]
                },
                {
                    title: 'Presentation',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'abstractions',
                        'decoration',
                        'styles'
                    ]
                },
                {
                    title: 'Misc',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'scaffolding',
                        'constants',
                        'external-resources'
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
                        'authentication',
                        'authorization'
                    ]
                },
                {
                    title: 'Customization',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'entity-controllers',
                        'view-models',
                        'ui-elements',
                        'admin-menus',
                        'dashboard',
                        'layout'
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
                        'workflow',
                        'creating-an-empage',
                        'front-end-usage',
                        'localization'
                    ]
                },
                {
                    title: 'Web API',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'provided-endpoints',
                        'creating-an-endpoint'
                    ]
                },
                {
                    title: 'SEO',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        'sitemap',
                        'meta-tags'
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
