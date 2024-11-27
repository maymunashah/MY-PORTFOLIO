<template>
  <section id="contact-me" class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <p class="text-lg text-center mb-8">Feel free to reach out to me via the channels below!</p>
      <div class="flex flex-wrap justify-center items-center space-x-6">
        <a
          v-for="(link, index) in contactLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          class="text-xl flex items-center space-x-2"
        >
          <span :class="link.color">
            <i :class="link.icon"></i>
          </span>
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import appData from '@/appData.js';

export default {
  data() {
    return {
      contactLinks: [
        { label: "Email", url: `mailto:${appData.contact.email}`, icon: "fa fa-envelope", color: "text-blue-500" },
        { label: "LinkedIn", url: appData.contact.linkedin, icon: "fa fa-linkedin", color: "text-blue-700" },
        { label: "GitHub", url: appData.contact.github, icon: "fa fa-github", color: "text-gray-800" },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styling if needed */
</style>
