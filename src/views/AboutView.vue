<template>
    <div class="bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <!-- Introduction Section -->
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold uppercase dark:text-white">Hi! I'm JM</h2>
        <p class="text-lg sm:text-xl my-4 sm:w-8/12 mx-auto dark:text-gray-300">
          An ambitious and dedicated 4th-year college student with a strong interest in pursuing a career in Cybersecurity.
        </p>
      </div>
  
      <!-- Educational Attainment Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:w-8/12 mx-auto mb-10">
        <h3 class="text-2xl font-bold mb-4 dark:text-white">
          Educational Attainment <font-awesome-icon :icon="faGraduationCap" class="text-yellow-500" />
        </h3>
        <ul class="list-disc ml-6 text-lg dark:text-gray-300">
          <li>College: New Era University (2021–2025) Bachelor of Science in Computer Science</li>
          <li>Senior Highschool: New Era University (2018–2020) Information and Communications Technology</li>
          <li>Junior High: New Era University (2013–2018)</li>
          <li>Elementary: New Era University (2007–2013)</li>
        </ul>
      </div>
  
      <!-- Projects Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:w-8/12 mx-auto">
        <h3 class="text-2xl font-bold mb-4 dark:text-white">Projects</h3>
        <ul class="list-disc ml-6 text-lg dark:text-gray-300">
          <li>
            <a href="https://app.powerbi.com/view?r=eyJrIjoiYTUzODgwMTYtODBhOC00NDFhLThhMjQtNWNlNWRiY2E3N2ZhIiwidCI6IjI1ZWFlODJhLTJiYjktNDUyNC05MGM1LWE5YWNlMzczNGVlNCIsImMiOjEwfQ%3D%3D" 
               target="_blank" class="text-blue-500 underline hover:text-blue-700 transition duration-300">
              Course Report
            </a>
          </li>
          <li>
            <a href="https://app.powerbi.com/view?r=eyJrIjoiOGZkYzI1NGItODUyMi00ODk1LTlhZDQtODE4MjlmNTY0Y2Y2IiwidCI6IjI1ZWFlODJhLTJiYjktNDUyNC05MGM1LWE5YWNlMzczNGVlNCIsImMiOjEwfQ%3D%3D" 
               target="_blank" class="text-blue-500 underline hover:text-blue-700 transition duration-300">
              Snack Report Using DAX
            </a>
          </li>
          <li>
            <a href="https://app.powerbi.com/view?r=eyJrIjoiYTY0ZTgyZDQtYTU0Zi00OWY3LTg1OGYtNzNiM2ViNjMyM2Y4IiwidCI6IjI1ZWFlODJhLTJiYjktNDUyNC05MGM1LWE5YWNlMzczNGVlNCIsImMiOjEwfQ%3D%3D" 
               target="_blank" class="text-blue-500 underline hover:text-blue-700 transition duration-300">
              Soda Report
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  </script>
  
  <style scoped>
  h3 span {
    font-size: 1.5rem;
  }
  
  a {
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #1e40af; /* Change color on hover */
  }
  </style>
  
