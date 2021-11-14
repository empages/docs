<template>
  <div id="sponsors" class="pb-2">
    <div class="container">
      <div class="hp-header">
        <h2 class="hp-title">Sponsors</h2>
        <h3 class="hp-subtitle">they help us so that we can help you</h3>
      </div>
      <div class="sponsors-list">
        <div class="sponsors-list-item">
          <a :key="'sponsor-index-' + sponsorIndex"
             class="feature-list-item"
             :title="sponsor.name"
             target="_blank"
             :href="sponsor.url"
             v-for="(sponsor, sponsorIndex) in sponsors">
            <img :src="`/_assets/images/sponsors/${sponsor.logo}`" :alt="sponsor.name"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sponsors } from "../../data/sponsors";
</script>

<style scoped>
#sponsors {
  margin-top: 40px;
  margin-bottom: 40px;
}

#sponsors .sponsors-list {
  text-align: center;
}
</style>
