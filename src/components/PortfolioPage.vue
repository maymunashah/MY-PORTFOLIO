<template>
  <div class="portfolio-page">
    <h2 class="section-title">Projects</h2>
    <div class="projects-container">
      <div v-for="project in data" :key="project.name" class="project-item">
        <!-- Project Title -->
        <h3 class="project-title">{{ project.name }}</h3>
        
        <!-- Technologies Used (Display Icons) -->
        <div class="technologies">
          <div v-for="tech in project.technologies" :key="tech.name" class="tech-icon">
            <i :class="tech.icon"></i>
          </div>
        </div>
        
        <!-- Project Description -->
        <p class="project-description">{{ project.description }}</p>
        
        <!-- Project Outcomes -->
        <div class="outcomes">
          <h4>Outcomes:</h4>
          <ul>
            <li v-for="outcome in project.outcomes" :key="outcome.label" class="outcome-item">
              <strong>{{ outcome.label }}:</strong> {{ outcome.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>

<style scoped>
.portfolio-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; /* Adds space between projects */
  width: 100%;
  max-width: 900px; /* Optional: limits the width of the content */
}

.project-item {
  width: 100%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-title {
  font-size: 2rem; /* Increased font size */
  margin-bottom: 15px;
  text-align: center;
}

.technologies {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
  color:blue
}

.tech-icon {
  font-size: 1.5rem;
}

.project-description {
  margin-bottom: 20px;
  font-size: 1.1rem;
  text-align: center;
}

.outcomes {
  margin-top: 20px;
}

.outcomes h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: center;
}

.outcomes ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.outcome-item {
  font-size: 1rem;
  margin-bottom: 8px;
  text-align: center;
}

.outcome-item strong {
  font-weight: bold;
}
</style>
