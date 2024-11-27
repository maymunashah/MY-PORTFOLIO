<template>
  <section id="about-me" class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">{{ about.title }}</h1>
    <div v-for="(paragraph, index) in about.paragraphs" :key="index" class="mb-6">
      <p class="text-lg whitespace-pre-line">{{ paragraph }}</p>
    </div>
  </section>
</template>

<script>
import appData from '@/appData.js';

export default {
  data() {
    return {
      about: appData.about,
    };
  },
};
</script>

<style scoped>
/* Add any custom styling if needed */
</style>
