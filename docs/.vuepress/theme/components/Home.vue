<template>
  <div class="container">
    <main
            class="home"
            aria-labelledby="main-title">
      <div id="homepage">
        <p class="brand-container">
          <a class="brand" title="Emeraude">
            <img class="logo" src="/assets/images/logo.svg" alt="Emeraude">
            <h1 class="title">{{ $siteTitle }}</h1>
            <h2 class="sub-title">{{ $description }}</h2>
          </a>
          <a class="btn btn-large get-started-btn" href="/guide/introduction.html" title="Get Started">GET STARTED</a>
          <a class="btn btn-large btn-gray" href="https://github.com/Definux/Emeraude" target="_blank" title="GitHub">GITHUB</a>
        </p>

        <hr/>

        <div id="technologies">
          <div class="hp-header">
            <h2 class="hp-title">{{ data.techTitle }}</h2>
            <h3 class="hp-subtitle">{{ data.techSubTitle }}</h3>
          </div>
          <div class="tech-list-container">
            <a v-for="(tech, techIndex) in data.technologies" class="tech-item" :href="tech.url" :title="tech.name" :key="'tech-index-' + techIndex">
              <img :alt="tech.name" :src="`/assets/images/technologies/${tech.image}`"/>
            </a>
          </div>
        </div>

        <div id="features">
          <div class="hp-header">
            <h2 class="hp-title">{{ data.featuresTitle }}</h2>
            <h3 class="hp-subtitle">{{ data.featuresSubTitle }}</h3>
          </div>
          <div class="feature-list">
            <div class="feature-list-row">

              <div class="feature-list-item" v-for="(feature, featureIndex) in data.features" :key="'feature-index-' + featureIndex">
                <div class="d-flex">
                  <p :class="feature.icon"></p>
                  <h2 class="text-left">{{ feature.title }}</h2>
                </div>
                <p class="feature-description">{{ feature.desc }}</p>
              </div>

            </div>
          </div>
        </div>

        <div id="support">
          <div class="hp-header mb-2">
            <h2 class="hp-title">{{ data.supportTitle }}</h2>
            <h3 class="hp-subtitle">{{ data.supportSubTitle }}</h3>
          </div>
          <div class="donate-section">
            <a target="_blank" class="btn btn-large" :href="data.paypalDonate">Donate via PayPal</a>
            <a target="_blank" class="btn btn-large" :href="data.patreonDonate">Become a backer or sponsor via Patreon</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>{{ data.license }} • Copyright © {{ new Date().getFullYear() }} <a target="_blank" href="https://definux.io/">Definux</a></p>
      </div>
    </main>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';
export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
  }
}
</script>