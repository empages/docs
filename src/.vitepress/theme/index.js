import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import './styles/fonts.css'
import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'
import './styles/misc.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import FrameworkPackages from "./components/FrameworkPackages.vue";

const theme = {
    Layout,
    NotFound,
    enhanceApp({ app, router, siteData }) {
        app.component('FrameworkPackages', FrameworkPackages)
    }
}

export default theme
