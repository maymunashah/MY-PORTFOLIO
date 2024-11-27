<template>
  <section id="contact-me" class="bg-gray-100 py-8 min-h-screen flex flex-col justify-center">
    <div class="container mx-auto px-4">
      <!-- Cursive Text "Reach out" -->
      <!-- <h1 class="text-4xl font-cursive text-center mb-6 mt-24">Reach out</h1> -->

      <!-- Row of Icons -->
      <div class="flex justify-center gap-8 mt-8">
        <!-- Loop through contactLinks and display each logo image -->
        <a
          v-for="(link, index) in contactLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          class="flex items-center justify-center"
        >
          <!-- Dynamic image sources for each link -->
          <img
            :src="require(`@/assets/images/${link.icon}`)"
            :alt="link.label"
            class="w-12 h-12 transition-transform transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object, // The data passed to this component
  },
  computed: {
    contactLinks() {
      return [
        { label: "Email", url: `mailto:${this.data.email}`, icon: "gmail.png" },
        { label: "LinkedIn", url: this.data.linkedin, icon: "linkedin.png" },
        { label: "GitHub", url: this.data.github, icon: "github.png" },
        { label: "Instagram", url: this.data.instagram, icon: "instagram.png" },
        { label: "YouTube", url: this.data.youtube, icon: "youtube.png" },
      ];
    },
  },
};
</script>

<style scoped>
/* Custom styles for the cursive font */
.font-cursive {
  font-family: 'Dancing Script', cursive; /* Ensure this font is available in your project */
  font-size: 25px;
}

/* Ensure logos are 50px by 50px */
img {
  width: 50px;
  height: 50px;
}

/* Make the section fill the screen vertically, and center content */
section {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  min-height: 100vh; /* Ensure full screen height */
}

/* Center align the text */
h1 {
  margin-top: 10px; /* 100px below navbar */
}

/* Custom styles for spacing between logos */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* Space between the logos */
}

/* Center align the icons with space between them in a row */
.flex {
  display: flex;
  justify-content: center;
  gap: 30px; /* Space between icons */
  margin-top: 30px; /* Space between the text and icons */
}

/* Hover effect to enlarge logos */
a:hover img {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
