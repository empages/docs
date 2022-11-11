export default {
    title: 'Emerald Pages',
    description: 'Next level application management',
    lang: 'en-US',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicons/image-x-icon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/image-png.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://empages.net/' }],
        // ['meta', { property: 'og:image', content: 'https://empages.net/images/logo-bg.jpg' }],
        ['meta', { property: 'og:image:alt', content: 'Emerald Pages' }]
    ],
    themeConfig: {
        siteTitle: 'Emerald Pages',
        logo: '/images/logo.svg',
        nav: [
            {
                text: 'Documentation',
                link: '/docs/guide/introduction',
                activeMatch: '^/docs/'
            },
            {
                text: 'Examples',
                link: '/examples/pages/simple-page',
                activeMatch: '^/examples'
            },
            {
                text: 'Portal',
                link: 'https://portal.empages.net'
            }
        ],
        sidebar: {
            '/docs/': getDocumentationSidebar(),
            '/examples/': getCodeSamplesSidebar()
        },
    }
}

function getDocumentationSidebar() {
    return [
        {
            text: 'Guide',
            items: [
                { text: 'Introduction', link: '/docs/guide/introduction' },
                { text: 'Getting Started', link: '/docs/guide/getting-started' },
                { text: 'Configuration', link: '/docs/guide/configuration' },
            ]
        },
        {
            text: 'Essentials',
            items: [
                { text: 'Pages', link: '/docs/essentials/pages' },
                { text: 'Commands', link: '/docs/essentials/commands' },
                { text: 'Layout', link: '/docs/essentials/layout' },
                { text: 'Permissions', link: '/docs/essentials/permissions' },
            ]
        },
        {
            text: 'View Contexts',
            items: [
                { text: 'View Items', link: '/docs/view-contexts/view-items' },
                { text: 'Tables', link: '/docs/view-contexts/tables' },
                { text: 'Details', link: '/docs/view-contexts/details' },
                { text: 'Forms', link: '/docs/view-contexts/forms' },
            ]
        },
        {
            text: 'Portal',
            items: [
                { text: 'Gateway', link: '/docs/portal/gateway' },
                { text: 'Settings', link: '/docs/portal/settings' },
                { text: 'Identity', link: '/docs/portal/identity' },
                { text: 'Pages', link: '/docs/portal/pages' },
                { text: 'Components', link: '/docs/portal/components' },
            ]
        },
    ]
}

function getCodeSamplesSidebar() {
    return [
        {
            text: 'Pages',
            items: [
                { text: 'Simple Page', link: '/examples/pages/simple-page' }
            ]
        },
    ]
}
