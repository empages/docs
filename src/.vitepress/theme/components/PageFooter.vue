<script setup>
import LastUpdated from 'vitepress/dist/client/theme-default/components/LastUpdated.vue'
import EditLink from "./EditLink.vue";
</script>

<template>
  <footer class="page-footer">
    <div class="edit">
      <EditLink />
    </div>
    <div class="updated">
      <LastUpdated />
    </div>
  </footer>
</template>

<style scoped>
.page-footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
}

.page-footer :deep .link {
  font-size: 14px !important;
}

.page-footer :deep .last-updated {
  font-size: 14px !important;
}

@media (min-width: 960px) {
  .page-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.updated {
  padding-top: 4px;
}

@media (min-width: 960px) {
  .updated {
    padding-top: 0;
  }
}
</style>
