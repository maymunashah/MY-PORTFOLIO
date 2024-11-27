<template>
  <section id="about-me" class="container mx-auto px-4 py-8" style="font-family: 'Allura', cursive;">
    <!-- Title with cursive font -->
    <h1 class="text-4xl font-bold mb-6 text-center">{{ about.title }}</h1>
    
    <!-- Loop through paragraphs and display each with space between them -->
    <div v-for="(paragraph, index) in about.paragraphs" :key="index" class="mb-8">
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
/* Ensure the section has enough padding and proper alignment */
#about-me {
  font-family: 'Allura', cursive; /* Apply the cursive font to the entire section */
}

/* Style for the paragraph container */
#about-me p {
  margin-bottom: 1.5rem; /* Add space between paragraphs */
}

/* Add some padding before the first paragraph */
#about-me div:first-of-type {
  padding-top: 2rem; /* Add space before the first paragraph */
}

/* Optional: You can also apply styling for the text (font-size, color, etc.) */
#about-me h1 {
  font-family: 'Allura', cursive;
  font-size: 48px;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Add spacing between paragraphs */
#about-me div {
  margin-bottom: 2rem; /* Ensure a comfortable gap between each paragraph */
}
</style>
