<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLanguageLinks } from 'vitepress/dist/client/theme-default/composables/nav'
import { useRepo } from 'vitepress/dist/client/theme-default/composables/repo'
import NavLink from './NavLink.vue'
import NavDropdownLink from 'vitepress/dist/client/theme-default/components/NavDropdownLink.vue'

const { theme } = useData()
const localeLinks = useLanguageLinks()
const show = computed(() => theme.value.nav || repo.value || localeLinks.value)
</script>

<template>
  <nav v-if="show" class="nav-links">
    <template v-if="theme.nav">
      <div v-for="item in theme.nav" :key="item.text" class="item">
        <NavDropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" />
      </div>
    </template>

    <div v-if="localeLinks" class="item">
      <NavDropdownLink :item="localeLinks" />
    </div>
  </nav>
</template>

<style scoped>
.nav-links {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--c-divider);
}

@media (min-width: 720px) {
  .nav-links {
    display: flex;
    align-items: center;
    border-bottom: 0;
  }
}

@media screen and (max-width: 720px) {
  .nav-links {
    padding-left: 15px;
  }
}
</style>
