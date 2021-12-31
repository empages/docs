<template>
  <div class="card mb-2">
    <div class="card-body">
      <div class="package-item">
        <div class="package-img mt-1 mb-auto">
          <img :src="logo" :alt="props.package.name"/>
        </div>
        <div class="package-meta mt-0 mb-auto">
          <h3>
            <a class="package-title" target="_blank" :title="props.package.name" :href="`https://www.nuget.org/packages/${props.package.name}`">
              {{ props.package.name }}
            </a>
          </h3>
          <p v-if="props.package.possibleReferences.length">Referenced by: <span class="badge bg-dark p-1 me-1" v-for="reference in props.package.possibleReferences" :key="`${props.package.name}-${reference}`">{{ reference }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {withBase} from 'vitepress';
import {ref} from "vue";

const props = defineProps({
  package: {
    type: Object,
    required: true
  }
})

const logo = withBase('/_assets/images/logo.svg');

</script>

<style scoped>
  .package-item {
    display: flex;
  }

  .package-img {
    width: 40px;
    min-width: 40px;
    margin-right: 10px;
  }

  .package-meta h3 {
    margin: 0;
    word-break: break-all;
    font-size: 20px;
    font-weight: bold;
  }

  .package-meta .package-title {
    color: black;
    font-size: 20px;
  }

  .package-meta .package-title:hover,
  .package-meta .package-title:active,
  .package-meta .package-title:focus {
    color: var(--c-brand);
  }

  .package-meta p {
    margin: 0;
    font-size: 14px;
  }
</style>
