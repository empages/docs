<template>
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
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

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

<!--<style lang="stylus">-->
<!--.home-->
<!--  padding $navbarHeight 2rem 0-->
<!--  max-width $homePageWidth-->
<!--  margin 0px auto-->
<!--  display block-->
<!--  .hero-->
<!--    text-align center-->
<!--    img-->
<!--      max-width: 100%-->
<!--      max-height 280px-->
<!--      display block-->
<!--      margin 3rem auto 1.5rem-->
<!--    h1-->
<!--      font-size 3rem-->
<!--    h1, .description, .action-->
<!--      margin 1.8rem auto-->
<!--    .description-->
<!--      max-width 35rem-->
<!--      font-size 1.6rem-->
<!--      line-height 1.3-->
<!--      color lighten($textColor, 40%)-->
<!--    .action-button-->
<!--      display inline-block-->
<!--      font-size 1.2rem-->
<!--      color #fff-->
<!--      background-color $accentColor-->
<!--      padding 0.8rem 1.6rem-->
<!--      border-radius 4px-->
<!--      transition background-color .1s ease-->
<!--      box-sizing border-box-->
<!--      border-bottom 1px solid darken($accentColor, 10%)-->
<!--      &:hover-->
<!--        background-color lighten($accentColor, 10%)-->
<!--  .features-->
<!--    border-top 1px solid $borderColor-->
<!--    padding 1.2rem 0-->
<!--    margin-top 2.5rem-->
<!--    display flex-->
<!--    flex-wrap wrap-->
<!--    align-items flex-start-->
<!--    align-content stretch-->
<!--    justify-content space-between-->
<!--  .feature-->
<!--    flex-grow 1-->
<!--    flex-basis 30%-->
<!--    max-width 30%-->
<!--    h2-->
<!--      font-size 1.4rem-->
<!--      font-weight 500-->
<!--      border-bottom none-->
<!--      padding-bottom 0-->
<!--      color lighten($textColor, 10%)-->
<!--    p-->
<!--      color lighten($textColor, 25%)-->
<!--  .footer-->
<!--    padding 2.5rem-->
<!--    border-top 1px solid $borderColor-->
<!--    text-align center-->
<!--    color lighten($textColor, 25%)-->

<!--@media (max-width: $MQMobile)-->
<!--  .home-->
<!--    .features-->
<!--      flex-direction column-->
<!--    .feature-->
<!--      max-width 100%-->
<!--      padding 0 2.5rem-->

<!--@media (max-width: $MQMobileNarrow)-->
<!--  .home-->
<!--    padding-left 1.5rem-->
<!--    padding-right 1.5rem-->
<!--    .hero-->
<!--      img-->
<!--        max-height 210px-->
<!--        margin 2rem auto 1.2rem-->
<!--      h1-->
<!--        font-size 2rem-->
<!--      h1, .description, .action-->
<!--        margin 1.2rem auto-->
<!--      .description-->
<!--        font-size 1.2rem-->
<!--      .action-button-->
<!--        font-size 1rem-->
<!--        padding 0.6rem 1.2rem-->
<!--    .feature-->
<!--      h2-->
<!--        font-size 1.25rem-->
<!--</style>-->
