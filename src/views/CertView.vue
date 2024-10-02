<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl p-6"> <!-- Adjusted to grid format with responsive columns -->
    <div v-for="certificate in certificates" :key="certificate.id" class="mb-6">
      <div class="bg-blue-300 p-4 rounded-md shadow-md">
        <img :src="certificate.image" alt="Certificate Image" class="w-full h-auto rounded-md mb-4" />
        <a :href="certificate.link" target="_blank">
          <h2 class="font-bold text-xl text-center text-blue-700 underline">{{ certificate.name }}</h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Array with certificates
const certificates = ref([
  {
    id: 1,
    name: 'Fortinet Certified Fundamentals in CyberSecurity',
    link: 'https://drive.google.com/your-link-1',
    image: '/src/assets/imgs/fort-cert.jpg',
  },
  {
    id: 2,
    name: 'Fortinet Certified Associate in Cybersecurity',
    link: 'https://drive.google.com/file/d/1meWC3C5f4PrGcxrnLsd2uNXaIzkqXR-l/view?usp=sharing',
    image: '/src/assets/imgs/fortport.jpg',
  },
  {
    id: 3,
    name: 'Intro to Cybersecurity',
    link: 'https://drive.google.com/file/d/1fD3rP6fFYMk4xhu8qvzVzShd7XeQ7jU1/view?usp=sharing',
    image: '/src/assets/imgs/intro.jpg',
  },
  {
    id: 4,
    name: 'Data Analytics Essentials',
    link: 'https://drive.google.com/file/d/1IdSOmXcZkweqzaZjcetTm6PA4yczICQd/view?usp=sharing',
    image: '/src/assets/imgs/data-analytics.jpg',
  },
  {
    id: 5,
    name: 'Business Analytics Essentials',
    link: 'https://drive.google.com/file/d/1l9MuJqzNFf2IBc0FfgU9UWl7jhssfGaY/view?usp=sharing',
    image: '/src/assets/imgs/business-analytics-with-excel.jpg',
  },
]);
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
