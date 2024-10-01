<!-- src/views/AdminView.vue -->
<template>
    <div class="text-center">
        <h1 class="text-center text-xl sm:text-2xl font-bold uppercase dark:text-white">Admin Panel</h1>
        <p class="sm:text-center text-justify my-4 sm:w-4/12 mx-auto dark:text-gray-300">
            Welcome to the admin section. You can manage users and settings here.
        </p>

        <div class="text-left sm:w-4/12 mx-auto dark:text-gray-300">
            <h3 class="text-xl font-bold mb-2 dark:text-white">Admin Actions</h3>
            <ul class="list-disc ml-5">
                <li>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Manage Users</button>
                </li>
                <li>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Manage Content</button>
                </li>
                <li>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Settings</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// No additional logic is needed for this static admin panel
</script>

<style scoped>
/* Add styles specific to the admin section */
button {
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #3b82f6; /* Tailwind blue hover color */
}
</style>
