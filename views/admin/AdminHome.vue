<template>
    <div class="text-center my-10">
      <h1 class="text-3xl font-bold uppercase dark:text-white mb-6">Manage Home Section</h1>
  
      <div v-if="editing" class="bg-gray-100 p-6 rounded-md shadow-md dark:bg-gray-800">
        <input v-model="home.name" type="text" placeholder="Name" class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white"/>
        <textarea v-model="home.bio" placeholder="Bio" rows="3" class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white"></textarea>
        <button @click="saveHome" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-all duration-300">
          Save
        </button>
        <button @click="cancelEdit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded ml-2 transition-all duration-300">
          Cancel
        </button>
      </div>
      
      <div v-else class="p-6 rounded-md shadow-md bg-gray-100 dark:bg-gray-800">
        <p class="text-2xl font-bold dark:text-white">{{ home.name }}</p>
        <p class="text-gray-700 dark:text-gray-300">{{ home.bio }}</p>
        <div class="mt-4">
          <button @click="editHome" class="text-blue-500 hover:underline text-xl font-semibold">Edit</button>
          <button @click="deleteHome" class="text-red-500 hover:underline ml-4 text-xl font-semibold">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Home data (replace with actual data from API or DB if applicable)
  const home = ref({ name: 'John Maynardk Atienza', bio: 'My Portfolio' });
  const editing = ref(false);
  
  // CRUD Operations
  const editHome = () => {
      editing.value = true;
  };
  
  const saveHome = () => {
      editing.value = false;
  };
  
  const cancelEdit = () => {
      editing.value = false;
  };
  
  const deleteHome = () => {
      home.value = { name: '', bio: '' };
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
  