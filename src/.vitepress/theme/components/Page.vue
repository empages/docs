<script setup>
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
import {computed} from "vue";

const screenHeight = computed(() => {
  const screenHeight = window.innerHeight - 268;
  return `${screenHeight}px`;
})
</script>

<template>
  <main class="page">
    <div class="container">
      <slot name="top" />

      <Content class="content" />
      <PageFooter />
      <NextAndPrevLinks />

      <slot name="bottom" />
    </div>
  </main>
</template>

<style scoped>
.page {
  padding-top: var(--header-height);
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 16rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 0;
}

.content {
  padding-bottom: 1.5rem;
  min-height: v-bind(screenHeight);
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
</style>
