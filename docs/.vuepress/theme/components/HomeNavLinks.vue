<template>
    <div>
        <b-navbar toggleable="md">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-if="userLinks.length" class="nav-links">
                    <div v-for="item in userLinks" :key="item.link" class="nav-item">
                        <NavLink :item="item"/>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    import DropdownLink from '@theme/components/DropdownLink.vue'
    import { resolveNavLinkItem } from '../util'
    import NavLink from '@theme/components/NavLink.vue'

    export default {
        name: 'HomeNavLinks',

        components: {
            NavLink,
            DropdownLink
        },
        computed: {
            userNav () {
                return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
            },

            nav () {
                const { locales } = this.$site
                if (locales && Object.keys(locales).length > 1) {
                    const currentLink = this.$page.path
                    const routes = this.$router.options.routes
                    return [...this.userNav]
                }

                return this.userNav
            },

            userLinks () {
                return (this.nav || []).map(link => {
                    return Object.assign(resolveNavLinkItem(link), {
                        items: (link.items || []).map(resolveNavLinkItem)
                    })
                })
            },

            repoLink () {
                const { repo } = this.$site.themeConfig

                return `https://github.com/${repo}`
            },

            repoLabel () {
                return 'GitHub'
            }
        }
    }
</script>

<style lang="stylus">
    .nav-links
        display inline-block
        a
            line-height 1.4rem
            color inherit
            &:hover, &.router-link-active
                color $accentColor
        .nav-item
            position relative
            display inline-block
            margin-left 1.5rem
            line-height 2rem
            &:first-child
                margin-left 0
        .repo-link
            margin-left 1.5rem

    @media (max-width: $MQMobile)
        .nav-links
            .nav-item, .repo-link
                margin-left 0

    @media (min-width: $MQMobile)
        .nav-links a
            &:hover, &.router-link-active
                color $textColor
        .nav-item > a:not(.external)
            &:hover, &.router-link-active
                margin-bottom -2px
                border-bottom 2px solid lighten($accentColor, 8%)
</style>
