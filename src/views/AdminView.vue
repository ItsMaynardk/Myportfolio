<template>
    <div class="bg-gray-900 dark:bg-gray-800 shadow-md rounded-lg p-10 max-w-4xl mx-auto w-full text-center mt-16">
      
      <!-- Admin Panel Header -->
      <h1 class="text-white text-3xl font-semibold mb-4">Admin Panel</h1>
      <p class="text-gray-400 text-md mb-6 max-w-lg mx-auto">
        Manage the sections of your website from here.
      </p>
  
      <!-- Subtle divider line -->
      <div class="border-b border-gray-600 w-10 mx-auto mb-6"></div>
  
      <!-- Admin Sections Card -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
        
        <!-- Manage Home Section Card -->
        <div class="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition ease-in-out">
          <h3 class="text-xl font-bold text-white mb-2">Home Section</h3>
          <p class="text-gray-400 mb-4">Manage content and settings for the Home section.</p>
          <RouterLink to="/admin/home" class="text-blue-500 underline">Manage Home Section</RouterLink>
        </div>
  
        <!-- Manage About Section Card -->
        <div class="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition ease-in-out">
          <h3 class="text-xl font-bold text-white mb-2">About Section</h3>
          <p class="text-gray-400 mb-4">Edit details and information in the About section.</p>
          <RouterLink to="/admin/about" class="text-blue-500 underline">Manage About Section</RouterLink>
        </div>
  
        <!-- Manage Certificates Section Card -->
        <div class="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition ease-in-out">
          <h3 class="text-xl font-bold text-white mb-2">Certificates Section</h3>
          <p class="text-gray-400 mb-4">Update or add certificates to your portfolio.</p>
          <RouterLink to="/admin/certificates" class="text-blue-500 underline">Manage Certificates Section</RouterLink>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  h1, h3 {
    letter-spacing: 1px;
  }
  
  a {
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #1e40af; /* Subtle hover effect */
  }
  </style>
  
