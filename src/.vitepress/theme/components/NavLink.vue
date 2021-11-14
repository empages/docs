<script setup>
import { toRefs } from 'vue'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'
import OutboundLink from 'vitepress/dist/client/theme-default/components/icons/OutboundLink.vue'

const props = defineProps({
  item: {}
});

const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
</script>

<template>
  <div class="nav-link">
    <a class="item" v-bind="linkProps">
      {{ item.text }} <OutboundLink v-if="isExternal" />
    </a>
  </div>
</template>

<style scoped>
.nav-link {
  padding: 0;
  margin-right: 15px;
}

.item {
  display: block;
  padding: 0 .2rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  white-space: nowrap;
}

.item:hover,
.item.active {
  text-decoration: none;
  color: var(--c-brand);
}

.item.external:hover {
  border-bottom-color: transparent;
  color: var(--c-text);
}

@media (min-width: 720px) {
  .item {
    border-bottom: 2px solid transparent;
    padding: 0;
    line-height: 24px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .item:hover {
    border-bottom-color: var(--c-black);
    color: var(--c-text);
  }

  .item.active {
    color: var(--c-brand);
    border-bottom-color: var(--c-brand);
  }
}
</style>
