<template>
  <div class="row my-2">
    <div class="col-12" v-for="packageItem in props.packages" :key="packageItem.name">
      <FrameworkPackage :package="packageItem" />
    </div>
  </div>
</template>

<script setup>
import FrameworkPackage from "./FrameworkPackage.vue";

const props = defineProps({
  packages: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>

</style>
