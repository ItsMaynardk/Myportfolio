<template>
    <div class="text-center my-10">
      <h1 class="text-3xl font-bold uppercase dark:text-white mb-6">Manage Certificates Section</h1>
  
      <form @submit.prevent="addCertificate" class="bg-gray-100 p-6 rounded-md shadow-md mb-6 dark:bg-gray-800">
        <input v-model="newCertificate.name" type="text" placeholder="Certificate Name" required class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white" />
        <input v-model="newCertificate.link" type="url" placeholder="Certificate Link" required class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white" />
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-300">
          Add Certificate
        </button>
      </form>
  
      <ul class="list-disc ml-5">
        <li v-for="(certificate, index) in certificates" :key="certificate.id" class="mb-4">
          <div class="flex justify-between items-center">
            <div>
              <strong class="text-xl dark:text-white">{{ certificate.name }}</strong> - 
              <a :href="certificate.link" target="_blank" class="text-blue-500 underline">{{ certificate.link }}</a>
            </div>
            <div>
              <button @click="editCertificate(index)" class="text-blue-500 hover:underline text-lg font-semibold">Edit</button>
              <button @click="deleteCertificate(index)" class="text-red-500 hover:underline ml-4 text-lg font-semibold">Delete</button>
            </div>
          </div>
  
          <div v-if="editingCertificateIndex === index" class="mt-4 bg-gray-100 p-6 rounded-md shadow-md dark:bg-gray-800">
            <input v-model="certificate.name" class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white" />
            <input v-model="certificate.link" class="border p-3 w-full mb-4 rounded-md dark:bg-gray-800 dark:text-white" />
            <button @click="saveCertificate(index)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-all duration-300">
              Save
            </button>
            <button @click="cancelEditCertificate" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded ml-2 transition-all duration-300">
              Cancel
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Certificates data
  const certificates = ref([
      { id: 1, name: 'Fortinet Certified Fundamentals in CyberSecurity', link: 'https://drive.google.com/your-link-1' }
  ]);
  const newCertificate = ref({ name: '', link: '' });
  const editingCertificateIndex = ref(null);
  
  // CRUD Operations
  const addCertificate = () => {
      const id = certificates.value.length + 1;
      certificates.value.push({ id, ...newCertificate.value });
      newCertificate.value = { name: '', link: '' };
  };
  
  const editCertificate = (index) => {
      editingCertificateIndex.value = index;
  };
  
  const saveCertificate = (index) => {
      editingCertificateIndex.value = null;
  };
  
  const cancelEditCertificate = () => {
      editingCertificateIndex.value = null;
  };
  
  const deleteCertificate = (index) => {
      certificates.value.splice(index, 1);
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
  