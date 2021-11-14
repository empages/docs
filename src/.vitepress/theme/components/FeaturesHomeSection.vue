<template>
  <div id="features" class="pb-2 px-2">
    <div class="container">
      <div class="hp-header">
        <h2 class="hp-title">Features</h2>
        <h3 class="hp-subtitle">or what you get out of the box</h3>
      </div>
      <div class="feature-list">
        <div class="feature-list-row row">
          <div :key="'feature-index-' + featureIndex" class="feature-list-item col-sm-3"
               v-for="(feature, featureIndex) in features">
            <div class="d-flex">
              <p :class="feature.icon"></p>
              <h2 class="text-left">{{ feature.title }}</h2>
            </div>
            <p class="feature-description">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { features } from "../../data/features";

</script>

<style scoped>
  #features {
    margin-top: 40px;
  }
  #features .feature-list-row {
    text-align: center;
  }
  #features .feature-list-row .feature-list-item {
    padding: 5px;
    text-align: left;
    vertical-align: top;
  }
  #features .feature-list-row .feature-list-item h2 {
    font-size: 18px;
    font-weight: bold;
    border: none;
    margin: auto auto auto 10px;
  }
  #features .feature-list-row .feature-list-item .mdi {
    font-size: 40px;
    margin: 0;
    color: var(--c-brand);
  }
  #features .feature-list-row .feature-list-item .feature-description {
    margin-top: 5px;
  }
</style>
