<template>
  <div id="support">
    <div class="hp-header">
      <h2 class="hp-title">Support Us</h2>
      <h3 class="hp-subtitle">any help would be highly appreciated</h3>
    </div>
    <div class="donate-section">
      <a :href="paypalDonateUrl" class="btn btn-lg btn-outline-light mx-1" target="_blank">Donate via PayPal</a>
      <a :href="patreonDonateUrl" class="btn btn-lg btn-outline-light mx-1" target="_blank">Become a backer or sponsor via Patreon</a>
    </div>
  </div>
</template>

<script setup>
const paypalDonateUrl = 'https://www.paypal.com/donate?hosted_button_id=4FEAXAP5TL3EG';
const patreonDonateUrl = 'https://www.patreon.com/gsk567';
</script>

<style scoped>
  #support {
    background: var(--c-brand);
    padding: 40px 10px 10px;
  }
  #support .hp-header {
    color: white;
  }
  #support .hp-header .hp-title {
    margin: 0 !important;
  }
  #support .donate-section {
    text-align: center;
  }
  #support .donate-section .btn {
    margin-bottom: 30px;
  }

</style>
