import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import PortfolioPage from "./components/PortfolioPage.vue";
import ContactPage from "./components/ContactPage.vue";
import './assets/index.css';
import './assets/styles.css';  // Import global styles
import appData from './appData.js'; // Import appData

console.log(HomePage, AboutPage, PortfolioPage, ContactPage);

// Define the routes and map them to their components
const routes = [
  { path: "/", component: HomePage, props: { data: appData.home } },
  { path: "/about", component: AboutPage, props: { data: appData.about } },
  { path: "/portfolio", component: PortfolioPage, props: { data: appData.portfolio } },
  { path: "/contact", component: ContactPage, props: { data: appData.contact } },
];

// Set up the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount("#app");
