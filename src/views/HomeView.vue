<template>
    <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-10 max-w-4xl mx-auto w-full text-center mt-16">
      
      <!-- Profile Image Section with simple, clean design -->
      <div class="relative inline-block rounded-lg shadow-lg">
        <div class="bg-gray-700 p-1 rounded-lg">
          <img
            src="../assets/imgs/temp.jpg"
            class="w-80 h-80 rounded-lg object-cover"
            alt="Profile Picture"
          />
        </div>
      </div>
  
      <!-- Name and Title Section -->
      <h1 class="text-white text-3xl font-semibold mt-6 mb-2">John Maynardk Atienza</h1>
      <p class="text-gray-400 text-md mb-6">My Portfolio</p>
  
      <!-- Subtle divider line -->
      <div class="border-b border-gray-600 w-10 mx-auto mb-6"></div>
  
      <!-- Social Media Icons Section -->
      <div class="flex justify-center space-x-5 mb-8">
        <a href="https://www.linkedin.com/in/johnmaynardkatienza/" target="_blank"
           class="text-gray-300 text-2xl hover:text-white transition ease-in-out">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://www.facebook.com/maynardkk" target="_blank"
           class="text-gray-300 text-2xl hover:text-white transition ease-in-out">
          <font-awesome-icon icon="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/itsmaynardk/" target="_blank"
           class="text-gray-300 text-2xl hover:text-white transition ease-in-out">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a href="https://github.com/ItsMaynardk" target="_blank"
           class="text-gray-300 text-2xl hover:text-white transition ease-in-out">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a href="mailto:maynardk.atienza@gmail.com"
           class="text-gray-300 text-2xl hover:text-white transition ease-in-out">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
  
      <!-- Brief Introduction -->
      <p class="text-gray-400 max-w-lg mx-auto leading-relaxed">
        Welcome to my portfolio! Explore my projects and learn more about me.
      </p>
    </div>
  </template>
  
  <script setup>
  // No additional JavaScript needed for this design
  </script>
  
  <style scoped>
  img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  img:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    letter-spacing: 1px;
  }
  
  p {
    line-height: 1.5;
  }
  </style>
  
