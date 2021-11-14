<template>
  <div id="purpose" class="pb-2 px-2">
    <div class="container">
      <div class="purpose-list row">
        <div :key="'purpose-index-' + purposeIndex" class="purpose-item col-sm-4"
             v-for="(purpose, purposeIndex) in purposes">
          <div>
            <h3 class="title">
              <span class="text">
                {{ purpose.title }}
              </span>
            </h3>
            <p>{{ purpose.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {purposes} from "../../data/purpose";

</script>

<style scoped>
  #purpose {
    margin-top: 40px;
  }

  #purpose .purpose-item .title {
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }

  #purpose .purpose-item .title .text {
    color: white;
    background: var(--c-brand);
    padding: 3px 15px;
    text-shadow: 1px 1px 2px rgba(0,0,0,.4);
    display: inline-block;
    width: 100%;
  }
</style>
