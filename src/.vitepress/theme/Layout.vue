<script setup>
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import { useRoute, useData } from 'vitepress'
import {getSideBarConfig, isSideBarEmpty} from "vitepress/dist/client/theme-default/support/sideBar"

import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Page from './components/Page.vue'
import AlgoliaSearchBox from 'vitepress/dist/client/theme-default/components/AlgoliaSearchBox.vue'

const Home = defineAsyncComponent(() => import('./components/Home.vue'))

const NoopComponent = () => null

const route = useRoute()
const { site, page, theme, frontmatter } = useData()

const isCustomLayout = computed(() => !!frontmatter.value.customLayout)

const enableHome = computed(() => !!frontmatter.value.home)

const showNavbar = computed(() => {
  const themeConfig = theme.value
  if (frontmatter.value.navbar === false || themeConfig.navbar === false) {
    return false
  }
  return (
    site.value.title || themeConfig.logo || themeConfig.repo || themeConfig.nav
  )
})

const openSideBar = ref(false)

const showSidebar = computed(() => {
  if (frontmatter.value.home || frontmatter.value.sidebar === false) {
    return false
  }

  return !isSideBarEmpty(
    getSideBarConfig(theme.value.sidebar, route.data.relativePath)
  )
})

const toggleSidebar = (to) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value
}

const hideSidebar = toggleSidebar.bind(null, false)

watch(route, hideSidebar)

const pageClasses = computed(() => {
  return [
    {
      'no-navbar': !showNavbar.value,
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value
    }
  ]
})
</script>

<template>
  <div class="theme" :class="pageClasses">
    <NavBar v-if="showNavbar" @toggle="toggleSidebar">
      <template #search>
        <slot name="navbar-search">
          <div class="ms-auto me-0">
            <AlgoliaSearchBox
                v-if="theme.algolia"
                :options="theme.algolia"
                :multilang="false"
            />
          </div>
        </slot>
      </template>
    </NavBar>

    <SideBar :open="openSideBar">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </SideBar>
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Content v-if="isCustomLayout" />

    <template v-else-if="enableHome">
      <!-- A slot for customizing the entire homepage easily -->
      <slot name="home">
        <Home>

        </Home>
      </slot>
    </template>

    <Page v-else>
    </Page>

    <div class="footer text-center" :class="{ 'with-sidebar': showSidebar }">
      <p class="my-4 px-2">
        Apache License 2.0 • Copyright © {{ new Date().getFullYear() }} <a href="https://definux.io/" target="_blank">Definux</a>
      </p>
    </div>
  </div>

  <Debug />
</template>
