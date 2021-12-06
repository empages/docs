<template>
  <div class="home">
    <div class="home-section">
      <div class="p-5 mb-4 rounded-3">
        <div class="container-fluid py-5 position-relative">
          <div class="logo"/>
          <div class="position-relative">
            <h1 class="display-5 text-white m-0 text-shadow">Emeraude</h1>
            <p class="col-md-8 fs-4 text-white text-shadow mt-0">A lightweight ASP.NET framework for creating successful products</p>
            <a href="/documentation/guide/introduction" class="btn btn-light btn-lg me-2">Get Started</a>
            <a :href="repo.link" target="_blank" class="btn btn-outline-light btn-lg">{{ repo.text }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-content">
      <PurposeHomeSection />
      <FeaturesHomeSection />
      <FeedbackHomeSection />
      <SponsorsHomeSections />
    </div>
    <SupportHomeSection />
    <ContactHomeSection />
    <div class="bg-attribute p-3 text-center">
      <a href="https://www.netlify.com">
        <img src="/_assets/images/netlify-color-accent.svg" alt="Deploys by Netlify" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { withBase, useData } from 'vitepress'
import { useRepo } from "vitepress/dist/client/theme-default/composables/repo";
import FeaturesHomeSection from "./FeaturesHomeSection.vue";
import PurposeHomeSection from "./PurposeHomeSection.vue";
import SponsorsHomeSections from "./SponsorsHomeSections.vue";
import SupportHomeSection from "./SupportHomeSection.vue";
import FeedbackHomeSection from "./FeedbackHomeSection.vue";
import ContactHomeSection from "./ContactHomeSection.vue";

const { theme } = useData()
const repo = useRepo()
</script>

<style scoped>
.home {
  padding-top: var(--header-height);
}

.home-content {
  margin: 0 auto;
  padding: 0 1.5rem;
}

.home-section {
  background: linear-gradient(45deg, var(--c-brand), var(--c-brand-dark))
}

.home-section .text-shadow {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
}

.home-section h1 {
  font-family: var(--c-brand-font);
  text-transform: uppercase;
  font-weight: 500;
}

.home-section .logo {
  background-size: contain;
  position: absolute;
  bottom: -48px;
  right: -48px;
  width: 50%;
  height: calc(100% + 216px);
  opacity: 0.2;
  overflow: hidden;
}

@media screen and (max-width: 960px) {
  .home-section .logo {
    width: 80%;
  }
}

@media screen and (max-width: 720px) {
  .btn-lg {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
  }
}

.home-section .logo::before {
  content: '';
  background-image: url('/_assets/images/logo_white.svg');
  background-size: cover;
  transform: rotate(-15deg);
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  bottom: -50px;
  right: -40px;
}

.bg-attribute {
  background: #313d3e;
}
</style>
