<template>
  <div id="contact" class="pb-2 px-2">
    <div class="container">
      <div class="hp-header">
        <h2 class="hp-title">Contact</h2>
        <h3 class="hp-subtitle">send us your feedback, comments, requests</h3>
      </div>
      <div class="text-center">
        <a :title="email" class="email" :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const email = 'contact@emeraude.dev';
</script>

<style scoped>
#contact {
  margin-top: 40px;
  margin-bottom: 40px;
}

.email {
  font-size: 2.3rem;
  font-weight: bold;
  text-decoration: none;
}

.hp-header {
  margin-bottom: 8px;
}

@media screen and (max-width: 720px) {
  .email {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 340px) {
  .email {
    font-size: 1.2rem;
  }
}
</style>
