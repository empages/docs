<script setup>
import { withBase } from "vitepress";
import NavBarTitle from './NavBarTitle.vue'
import NavLinks from './NavLinks.vue'
import ToggleSideBarButton from 'vitepress/dist/client/theme-default/components/ToggleSideBarButton.vue'
import {useRepo} from "vitepress/dist/client/theme-default/composables/repo";
defineEmits(['toggle'])

const repo = useRepo();

const twitterLink = 'https://twitter.com/emeraude_dev';

</script>

<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />

    <div class="nav">
      <NavLinks />
    </div>

    <slot name="search" />

    <div v-if="repo" class="item repo-item">
      <a title="Twitter" :href="twitterLink" target="_blank">
        <img :src="withBase('/_assets/images/twitter-icon.svg')" alt="Twitter"/>
      </a>
    </div>

    <div v-if="repo" class="item repo-item">
      <a title="GitHub" :href="repo.link" target="_blank">
        <img :src="withBase('/_assets/images/github-icon.svg')" alt="GitHub"/>
      </a>
    </div>

  </header>

</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--z-index-navbar);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--c-divider);
  padding: 0.7rem 1.5rem 0.7rem 4rem;
  height: var(--header-height);
  background-color: var(--c-bg);
}
@media (min-width: 720px) {
  .nav-bar {
    padding: 0.7rem 1.5rem;
  }
}
.flex-grow {
  flex-grow: 1;
}
.nav {
  display: none;
}
@media (min-width: 720px) {
  .nav {
    display: block;
    margin-left: auto;
  }
}

.repo-item {
  margin-left: 6px;
  padding-top: 1px;
}

.repo-item img {
  width: 30px;
  border-radius: var(--c-border-radius-default);
}
</style>
