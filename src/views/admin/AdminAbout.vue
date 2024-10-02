<template>
    <div class="text-center my-10">
      <h1 class="text-3xl font-bold uppercase dark:text-white mb-6">Manage About Section</h1>
  
      <div v-if="editing" class="bg-gray-100 p-6 rounded-md shadow-md dark:bg-gray-800">
        <textarea v-model="about.description" placeholder="About Description" rows="4" class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white"></textarea>
        <button @click="saveAbout" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-all duration-300">
          Save
        </button>
        <button @click="cancelEdit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded ml-2 transition-all duration-300">
          Cancel
        </button>
      </div>
      
      <div v-else class="p-6 rounded-md shadow-md bg-gray-100 dark:bg-gray-800">
        <p class="text-xl font-bold dark:text-white">{{ about.description }}</p>
        <div class="mt-4">
          <button @click="editAbout" class="text-blue-500 hover:underline text-xl font-semibold">Edit</button>
          <button @click="deleteAbout" class="text-red-500 hover:underline ml-4 text-xl font-semibold">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // About data (replace with actual data from API or DB if applicable)
  const about = ref({ description: 'An ambitious and dedicated 4th year college student...' });
  const editing = ref(false);
  
  // CRUD Operations
  const editAbout = () => {
      editing.value = true;
  };
  
  const saveAbout = () => {
      editing.value = false;
  };
  
  const cancelEdit = () => {
      editing.value = false;
  };
  
  const deleteAbout = () => {
      about.value = { description: '' };
  };
  </script>
  
  <style scoped>
  button {
      transition: background-color 0.3s ease;
  }
  button:hover {
      background-color: #3b82f6;
  }
  </style>
  