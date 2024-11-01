<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderContent from './components/HeaderContent.vue';
import FooterContent from './components/FooterContent.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderContent />

    <main class="flex-grow">
      <RouterView />
    </main>

    <FooterContent />
  </div>
</template>