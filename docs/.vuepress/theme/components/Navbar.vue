<template>
  <div class="navbar-main row">
    <div class="w-100 h-100">
      <div class="d-flex h-100 w-100">
        <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
        <RouterLink
            :to="$localePath"
            class="home-link h-100">
          <img
              v-if="$site.themeConfig.logo"
              class="logo"
              :src="$withBase($site.themeConfig.logo)"
              :alt="$siteTitle">
          <img
              v-if="$site.themeConfig.logoMobile"
              class="logo-mobile"
              :src="$withBase($site.themeConfig.logoMobile)"
              :alt="$siteTitle">
        </RouterLink>

        <div
            class="links position-relative my-auto"
            :style="linksWrapMaxWidth ? { 'max-width': linksWrapMaxWidth + 'px' } : {}">
          <NavLinks class="can-hide" />
        </div>
        <SearchBox class="mr-0 ml-3" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@theme/components/SearchBox.vue'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    SearchBox,
    SidebarButton,
    NavLinks
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {

  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>
