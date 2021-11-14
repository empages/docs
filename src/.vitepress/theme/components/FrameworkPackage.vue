<template>
  <div class="card mb-2">
    <div class="card-body">
      <div class="package-item">
        <div class="package-img mt-1 mb-auto">
          <img :src="logo" :alt="package.name"/>
        </div>
        <div class="package-meta mt-0 mb-auto">
          <h3>
            <a target="_blank" :title="package.name" :href="`https://www.nuget.org/packages/${package.name}`">
              {{ package.name }}
            </a>
          </h3>
          <p>{{ package.description }}</p>
          <p v-if="package.possibleReferences.length">Referenced by: <span class="badge bg-dark p-1 me-1" v-for="reference in package.possibleReferences" :key="`${package.name}-${reference}`">{{ reference }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {withBase} from 'vitepress';
export default {
  name: "FrameworkPackage",
  props: {
    package: {
      type: Object,
      required: true
    }
  },
  computed: {
    logo() {
      return withBase('/_assets/images/logo.svg')
    }
  },
  methods: {
    withBase
  }
}
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

  .package-meta h3 a {
    color: black;
  }

  .package-meta h3 a:hover,
  .package-meta h3 a:active,
  .package-meta h3 a:focus {
    color: var(--c-brand);
  }

  .package-meta p {
    margin: 0;
    font-size: 14px;
  }
</style>
