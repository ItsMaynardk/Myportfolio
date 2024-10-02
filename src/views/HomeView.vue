<template>
    <div class="min-h-screen flex flex-col justify-center">
      <!-- Profile Section -->
      <section class="container mx-auto flex-1 flex items-center justify-center">
        <div class="bg-gray-900 dark:bg-gray-800 shadow-md rounded-lg p-10 max-w-5xl mx-auto w-full">
          <img
            src="../assets/imgs/temp.jpg"
            class="w-40 h-40 mx-auto rounded-full shadow-lg mb-6"
            alt="Profile Picture"
          />
          <h1 class="text-4xl font-bold text-white mb-2">John Maynardk Atienza</h1>
          <hr class="border-gray-500 my-4 w-20 mx-auto" />
          <p class="text-gray-400 text-lg mb-6">My Portfolio</p>
  
          <!-- Social Media Links (No footer) -->
          <div class="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/johnmaynardkatienza/" target="_blank" class="text-gray-400 hover:text-blue-600">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://www.facebook.com/maynardkk" target="_blank" class="text-gray-400 hover:text-blue-600">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a href="https://www.instagram.com/itsmaynardk/" target="_blank" class="text-gray-400 hover:text-blue-600">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a href="https://github.com/ItsMaynardk" target="_blank" class="text-gray-400 hover:text-blue-600">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="mailto:maynardk.atienza@gmail.com" class="text-gray-400 hover:text-blue-600">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  /* Styling is applied using Tailwind CSS */
  </style>
  
