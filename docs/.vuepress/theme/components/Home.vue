<template>
    <div>
        <div id="homepage">
            <header class="header mb-4">
                <div class="branding">
                    <div class="container-fluid position-relative py-2 px-3 d-flex">
                        <div class="logo-wrapper mr-auto ml-0 d-flex">
                            <div class="site-logo d-flex">
                                <a class="d-flex" href="/" title="Emeraude">
                                    <img alt="Emeraude" class="logo-icon m-auto" src="/assets/images/logo_text.svg">
                                </a>
                            </div>
                        </div>
                        <div class="mr-0 ml-auto">
                            <nav-links class="can-hide"></nav-links>
                        </div>
                    </div>
                </div>
            </header>
            <main-section/>
            <div>
              <features-section/>
            </div>

            <div id="support">
                <div class="hp-header">
                    <h2 class="hp-title">Support Us</h2>
                    <h3 class="hp-subtitle">any help would be highly appreciated</h3>
                </div>
                <div class="donate-section">
                    <a :href="data.paypalDonate" class="btn btn-large" target="_blank">Donate via PayPal</a>
                    <a :href="data.patreonDonate" class="btn btn-large" target="_blank">Become a backer or sponsor
                        via Patreon</a>
                </div>
            </div>
        </div>
        <div class="footer">
            <p class="my-4">
              {{ data.license }} • Copyright © {{ new Date().getFullYear() }} <a href="https://definux.io/" target="_blank">Definux</a>
            </p>
        </div>
    </div>
</template>

<script>
    import NavLink from '@theme/components/NavLink.vue';
    import NavLinks from "@theme/components/HomeNavLinks";
    import MainSection from "@theme/components/Sections/MainSection";
    import FeaturesSection from "@theme/components/Sections/FeaturesSection";
    export default {
        name: 'Home',
        components: {
            NavLink,
            NavLinks,
            MainSection,
            FeaturesSection
        },

        computed: {
            data() {
                return this.$page.frontmatter
            },

            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                }
            },
        }
    }
</script>