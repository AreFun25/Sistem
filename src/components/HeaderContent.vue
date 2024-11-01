<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="px-6 md:px-12 w-full h-[80px] bg-x-black flex items-center justify-between">
    <div class="flex items-center gap-4">
      <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo" class="h-10">
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <ul :class="`flex gap-4 md:flex ${isMenuOpen ? 'block' : 'hidden'}`">
      <li>
        <router-link to="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</router-link>
      </li>
      <li>
        <router-link to="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</router-link>
      </li>
      <li>
        <router-link to="/about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</router-link>
      </li>
      <li>
        <router-link to="/contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</router-link>
      </li>
    </ul>

    <div class="flex items-center gap-4">
      <router-link to="/contact" class="hidden md:block bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact US</router-link>
    </div>
  </nav>
</template>
