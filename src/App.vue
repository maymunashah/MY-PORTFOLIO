<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Memoona's Portfolio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- Link to Home Page -->
              <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <!-- Link to About Page -->
              <router-link to="/about" class="nav-link" active-class="active">About</router-link>
            </li>
            <li class="nav-item">
              <!-- Link to Portfolio Page -->
              <router-link to="/portfolio" class="nav-link" active-class="active">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <!-- Link to Contact Page -->
              <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view :appData="appData" />
  </div>
</template>

<script>
// Import the appData from appData.js
import appData from './appData.js';

export default {
  name: "App",
  data() {
    return {
      appData, // Pass the appData to the child components
    };
  },
};
</script>

<style>
/* Optional: Custom styling for the navbar or other areas */
</style>
