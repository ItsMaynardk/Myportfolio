<template>
    <nav class="bg-gray-900 dark:bg-gray-800 shadow py-4 fixed w-full top-0 z-10">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <!-- Left: Brand Logo or Text -->
          <div class="flex items-center">
            <h1 class="text-3xl font-bold text-white">My Portfolio</h1>
          </div>
  
          <!-- Right: Navigation Links -->
          <div class="hidden sm:flex space-x-8">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="/about" class="nav-link">About</RouterLink>
            <RouterLink to="/project" class="nav-link">Certificates</RouterLink>
            <RouterLink to="/admin" class="nav-link">Admin</RouterLink>
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="sm:hidden flex items-center">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div :class="isMenuOpen ? 'block' : 'hidden'" class="sm:hidden">
        <RouterLink to="/" class="nav-link block px-4 py-2">Home</RouterLink>
        <RouterLink to="/about" class="nav-link block px-4 py-2">About</RouterLink>
        <RouterLink to="/project" class="nav-link block px-4 py-2">Certificates</RouterLink>
        <RouterLink to="/admin" class="nav-link block px-4 py-2">Admin</RouterLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .nav-link {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }
  .nav-link:hover {
    color: #3b82f6;
  }
  </style>
  
