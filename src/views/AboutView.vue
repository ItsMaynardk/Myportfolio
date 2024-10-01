<template>
    <div class="text-center">
        <!-- Introduction Section -->
        <h2 class="text-center text-xl sm:text-2xl font-bold uppercase dark:text-white">Hi! I'm JM</h2>
        <p class="sm:text-center text-justify my-4 sm:w-4/12 mx-auto dark:text-gray-300">
            An ambitious and dedicated 4th year college student with a strong
            interest in pursuing a career in Cybersecurity.
        </p>

        <!-- Educational Attainment Section -->
        <div class="text-left sm:w-4/12 mx-auto dark:text-gray-300">
            <h3 class="text-xl font-bold mb-2 dark:text-white">
                Educational Attainment <span class="inline-block">🎓</span>
            </h3>
            <ul class="list-disc ml-5">
                <li>College: New Era University (2021–2025) Bachelor of Science in Computer Science</li>
                <li>Senior Highschool: New Era University (2018–2020) Information and Communications Technology</li>
                <li>Junior High: New Era University (2013–2018)</li>
                <li>Elementary: New Era University (2007–2013)</li>
            </ul>
        </div>

        <!-- Current Projects Section -->
        <div class="text-left sm:w-4/12 mx-auto dark:text-gray-300">
            <h3 class="text-xl font-bold mb-2 dark:text-white">Projects</h3>
            <ul class="list-disc ml-5">
                <!-- Clickable Projects -->
                <li>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiYTUzODgwMTYtODBhOC00NDFhLThhMjQtNWNlNWRiY2E3N2ZhIiwidCI6IjI1ZWFlODJhLTJiYjktNDUyNC05MGM1LWE5YWNlMzczNGVlNCIsImMiOjEwfQ%3D%3D" target="_blank" class="text-blue-500 underline">
                        Course Report
                    </a>
                </li>
                <li>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiOGZkYzI1NGItODUyMi00ODk1LTlhZDQtODE4MjlmNTY0Y2Y2IiwidCI6IjI1ZWFlODJhLTJiYjktNDUyNC05MGM1LWE5YWNlMzczNGVlNCIsImMiOjEwfQ%3D%3D" target="_blank" class="text-blue-500 underline">
                        Snack Report Using DAX
                    </a>
                </li>
                <li>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiYTY0ZTgyZDQtYTU0Zi00OWY3LTg1OGYtNzNiM2ViNjMyM2Y4IiwidCI6IjI1ZWFlODJhLTJiYjktNDUyNC05MGM1LWE5YWNlMzczNGVlNCIsImMiOjEwfQ%3D%3D" target="_blank" class="text-blue-500 underline">
                        Soda Report
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// No specific JavaScript needed for this static content.
</script>

<style scoped>
/* You can add additional styling here if needed */
h3 span {
  font-size: 1.5rem;
}

a {
  transition: color 0.3s ease;
}

a:hover {
  color: #1e40af; /* Change color on hover */
}
</style>