<template>
  <div id="feedback" class="pb-2">
    <div class="container">
      <div class="hp-header">
        <h2 class="hp-title">What people thinks</h2>
        <h3 class="hp-subtitle">we do it for them</h3>
      </div>
      <div v-if="feedback && feedback.length" class="row justify-content-center feedback-section">
        <div v-for="(feedbackItem, feedbackIndex) in feedback" :key="'feedback-' + feedbackIndex" class="person col-12 col-lg-4 p-3 mb-1">
          <div class="person-container p-2">
            <blockquote class="feedback-text">
              {{ feedbackItem.text }}
            </blockquote>
            <div class="d-flex">
              <img class="person-avatar me-2" :src="feedbackItem.imageUrl" :alt="feedbackItem.personName">
              <div class="person-info media-body text-center">
                <div class="person-name">
                  {{ feedbackItem.personName }}
                </div>
                <div class="person-title">
                  {{ feedbackItem.personTitle }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import feedback from "../../data/feedback";
</script>

<style scoped>
#feedback {
  margin-top: 40px;
}

.person {
  padding: 0 !important;
}

.person-container {
  height: 100%;
  position: relative;
}
.person-avatar {
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
  padding: 3px;
}
.person-info {
  font-size: 0.875rem;
  text-align: left;
}
.person-name {
  font-size: 13px;
  font-weight: bold;
  text-align: left;
}

.person-title {
  text-align: left;
  font-size: 11px;
}

.feedback-text {
  --feedbak-bg: #f3f5f7;
  font-style: italic;
  font-size: 14px;
  color: black;
  padding: 15px;
  border-color: var(--c-brand);
  background: linear-gradient(90deg, var(--feedbak-bg), transparent);
  margin-bottom: 20px;
  position: relative;
}

.feedback-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 18px;
  border-top: 16px solid black;
  border-top-color:  var(--feedbak-bg);
  border-left: 0 solid transparent;
  border-right: 15px solid transparent;
}

</style>
