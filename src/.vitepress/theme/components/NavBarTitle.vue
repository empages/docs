<script setup>
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()
</script>

<template>
  <a
      class="nav-bar-title"
      :href="localePath"
      :title="site.title"
      :aria-label="site.title"
  >
    <img
        v-if="theme.logo"
        class="logo"
        :title="site.title"
        :src="withBase(theme.logo)"
        alt="Logo"
    />
  </a>
</template>

<style scoped>
.nav-bar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-text);
}
.nav-bar-title:hover {
  text-decoration: none;
}
.logo {
  height: 2rem;
  vertical-align: bottom;
}
</style>
