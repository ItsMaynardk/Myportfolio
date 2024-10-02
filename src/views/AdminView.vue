<!-- src/views/AdminView.vue -->
<template>
    <div class="text-center">
        <h1 class="text-center text-xl sm:text-2xl font-bold uppercase dark:text-white">Admin Panel</h1>
        <p class="sm:text-center text-justify my-4 sm:w-4/12 mx-auto dark:text-gray-300">
            Welcome to the admin section. You can manage users here.
        </p>

        <div class="text-left sm:w-4/12 mx-auto dark:text-gray-300">
            <h3 class="text-xl font-bold mb-2 dark:text-white">Manage Users</h3>

            <!-- Add User Form -->
            <form @submit.prevent="addUser" class="mb-4">
                <div>
                    <input v-model="newUser.name" type="text" placeholder="Enter user name" required
                        class="border p-2 w-full mb-2 rounded-md dark:bg-gray-800 dark:text-white" />
                </div>
                <div>
                    <input v-model="newUser.email" type="email" placeholder="Enter user email" required
                        class="border p-2 w-full mb-2 rounded-md dark:bg-gray-800 dark:text-white" />
                </div>
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add User</button>
            </form>

            <!-- Users List -->
            <ul class="list-disc ml-5">
                <li v-for="(user, index) in users" :key="user.id" class="mb-2">
                    <div class="flex justify-between items-center">
                        <div>
                            <strong>{{ user.name }}</strong> - {{ user.email }}
                        </div>
                        <div>
                            <button @click="editUser(index)" class="text-blue-500 hover:underline">Edit</button>
                            <button @click="deleteUser(index)" class="text-red-500 hover:underline ml-2">Delete</button>
                        </div>
                    </div>

                    <!-- Edit User Form -->
                    <div v-if="editingIndex === index">
                        <input v-model="user.name" class="border p-2 w-full mb-2 rounded-md dark:bg-gray-800 dark:text-white" />
                        <input v-model="user.email" class="border p-2 w-full mb-2 rounded-md dark:bg-gray-800 dark:text-white" />
                        <button @click="saveUser(index)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
                        <button @click="cancelEdit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">Cancel</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Define the list of users and new user fields
const users = ref([
    { id: 1, name: 'John Maynardk', email: 'maynardk.atienza@gmail.com.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' }
]);

const newUser = ref({ name: '', email: '' });
const editingIndex = ref(null);

// Add a new user
const addUser = () => {
    const id = users.value.length + 1;
    users.value.push({ id, ...newUser.value });
    newUser.value = { name: '', email: '' }; // Reset form
};

// Edit an existing user
const editUser = (index) => {
    editingIndex.value = index; // Set editing state
};

// Save updated user
const saveUser = (index) => {
    editingIndex.value = null; // Exit editing mode
};

// Cancel editing
const cancelEdit = () => {
    editingIndex.value = null; // Exit editing mode
};

// Delete a user
const deleteUser = (index) => {
    users.value.splice(index, 1); // Remove user from list
};
</script>

<style scoped>
/* Add styles specific to the admin section */
button {
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #3b82f6; /* Tailwind blue hover color */
}

form {
    margin-bottom: 1rem;
}
</style>
