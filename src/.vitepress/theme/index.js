import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import './styles/fonts.css'
import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'
import './styles/misc.css'

import { createGtm } from '@gtm-support/vue-gtm';

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import FrameworkPackages from "./components/FrameworkPackages.vue";
import {watch} from "vue";

const theme = {
    Layout,
    NotFound,
    enhanceApp({ app, router, siteData }) {
        app.component('FrameworkPackages', FrameworkPackages)

        app.use(createGtm({
            id: 'GTM-MW8Q2FW',
            defer: false,
            compatibility: false,
            nonce: '2726c7f26c',
            enabled: true,
            loadScript: true,
        }));

        watch(router.route, (value) => {
            app.config.globalProperties.$gtm.trackView(value.path, value.path)
        })
    }
}

export default theme
