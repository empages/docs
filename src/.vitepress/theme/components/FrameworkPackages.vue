<template>
  <div class="row my-2">
    <div class="col-12" v-for="packageItem in packages" :key="packageItem.name">
      <FrameworkPackage :package="packageItem" />
    </div>
  </div>
</template>

<script>
import FrameworkPackage from "./FrameworkPackage.vue";
export default {
  name: "FrameworkPackages",
  components: {FrameworkPackage},
  props: {
    packages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
