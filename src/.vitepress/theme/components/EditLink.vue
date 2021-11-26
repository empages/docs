<script setup>
import OutboundLink from 'vitepress/dist/client/theme-default/components/icons/OutboundLink.vue'
import {useData} from "vitepress";
import {useRepo} from "vitepress/dist/client/theme-default/composables/repo";
import {computed} from "vue";

const { theme } = useData();

const url = computed(() => {
  const { page } = useData();
  const { relativePath } = page.value;
  const repo = useRepo();
  return `${repo.value.link}/docs/edit/master/src/${relativePath}`
})

const text = theme.value.editLinkText;

</script>

<template>
  <div class="edit-link">
    <a
        v-if="url"
        class="link"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
    >
      {{ text }} <OutboundLink class="icon" />
    </a>
  </div>
</template>

<style scoped>
.link {
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-text-light);
}

.link:hover {
  text-decoration: none;
  color: var(--c-brand);
}

.icon {
  margin-left: 4px;
}
</style>
