<!-- src/views/AdminView.vue -->
<template>
    <div class="text-center">
        <h1 class="text-xl font-bold uppercase dark:text-white">Admin Panel</h1>
        <p class="sm:text-center text-justify my-4 sm:w-4/12 mx-auto dark:text-gray-300">
            Manage the sections of your website from here.
        </p>

        <!-- Admin Panel Navigation -->
        <div class="text-left sm:w-4/12 mx-auto dark:text-gray-300">
            <h3 class="text-xl font-bold mb-2 dark:text-white">Admin Sections</h3>
            <ul class="list-disc ml-5">
                <li>
                    <RouterLink to="/admin/home" class="text-blue-500 underline">Manage Home Section</RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/about" class="text-blue-500 underline">Manage About Section</RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/certificates" class="text-blue-500 underline">Manage Certificates Section</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>
