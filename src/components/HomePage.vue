<template>
  <div class="home-page">
    <!-- Hero Section -->
    <header class="hero">
      <div class="row">
        <div class="col profile-column">
          <img class="profile-image" :src="data.profileImage" alt="Profile Image" />
        </div>
        <div class="col intro-column">
          <h1>{{ data.title }}</h1>
          <p class="introduction">{{ data.introduction }}</p>
        </div>
      </div>
    </header>

    <!-- Education History -->
    <section class="timeline-section">
      <h2 class="section-title">Education History</h2>
      <div class="timeline">
        <div v-for="edu in data.education" :key="edu.degree" class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="timeline-content">
            <h3>{{ edu.degree }}</h3>
            <p><strong>{{ edu.institution }}</strong> - {{ edu.years }} - {{ edu.grade }}</p>
            <p class="description">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Work History -->
    <section class="timeline-section">
      <h2 class="section-title">Work History</h2>
      <div class="timeline">
        <div v-for="job in data.workHistory" :key="job.role" class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-briefcase"></i>
          </div>
          <div class="timeline-content">
            <h3>{{ job.role }}</h3>
            <p><strong>{{ job.company }}</strong> - {{ job.years }}</p>
            <p class="description">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteering -->
    <section class="timeline-section">
      <h2 class="section-title">Volunteering</h2>
      <div class="timeline">
        <div v-for="volunteer in data.volunteering" :key="volunteer.role" class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-hand-holding-heart"></i>
          </div>
          <div class="timeline-content">
            <h3>{{ volunteer.role }}</h3>
            <p><strong>{{ volunteer.organization }}</strong> - {{ volunteer.years }}</p>
            <p class="description">{{ volunteer.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hobbies -->
    <section class="list-section">
      <h2 class="section-title">Hobbies</h2>
      <ul class="hobby-list">
        <li v-for="hobby in data.hobbies" :key="hobby" class="hobby-item">
          <i class="fas fa-thumbs-up"></i> {{ hobby }}
        </li>
      </ul>
    </section>

    <!-- Languages -->
    <section class="list-section">
      <h2 class="section-title">Languages</h2>
      <ul class="language-list">
        <li v-for="language in data.languages" :key="language.name" class="language-item">
          <i :class="language.icontag"></i> {{ language.name }} ({{ language.proficiency }})
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: 2rem 1rem;
  background-color: #f5f5f5;
  border-bottom: 2px solid #ccc;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.profile-column {
  flex: 1;
  text-align: center;
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid #FFEA00;
  margin: 0 auto;
}

.intro-column {
  flex: 1;
  text-align: left;
}

.intro-column h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.intro-column .introduction {
  font-size: 1.2rem;
  color: #666;
  margin: 0 auto;
  max-width: 600px;
}

/* Timeline Section */
.timeline-section {
  padding: 5rem 1rem;
}

.section-title {
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1.5rem;
  text-align: center;
}

.timeline {
  position: relative;
  margin: 5rem auto;
  max-width: 800px;
  padding-left: 2rem;
}

.timeline:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  width: 4px;
  background: #FFEA00;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-icon {
  position: absolute;
  top: 0;
  left: -0.6rem;
  width: 1.6rem;
  height: 1.6rem;
  /* background: #fff; */
  border: 0px solid #FFEA00;
  /* border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #FFEA00;
  /* z-index: 1; */
}

.timeline-content {
  margin-left: 1rem;
}

.timeline-content h3 {
  font-size: 1.5rem;
  color: #333;
}

.timeline-content p {
  margin: 0.2rem 0;
  font-size: 1rem;
  color: #666;
}

.timeline-content .description {
  font-size: 0.9rem;
  color: #555;
}

/* List Section */
.list-section {
  padding: 2rem 1rem;
}

.hobby-list,
.language-list {
  list-style: none;
  padding: 0;
  text-align: center;
}

.hobby-item,
.language-item {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #333;
}

.hobby-item i,
.language-item i {
  margin-right: 0.5rem;
  color: #FFEA00;
}
</style>
