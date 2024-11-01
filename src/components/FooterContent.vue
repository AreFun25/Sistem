<script setup lang="ts">
</script>

<template>
  <footer class="flex flex-col justify-center px-8 py-12 bg-gray-800 text-white max-md:px-5 mt-16">
    <div class="flex flex-wrap items-start justify-between gap-8 w-full text-sm">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af0d061470f5d5bcb5014b6b356d53b318e2e180ffd559179402ff1402b653f?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Company logo" class="w-36 object-contain" />
      <nav class="flex gap-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/blog" class="hover:underline">Blog</router-link>
        <router-link to="/about" class="hover:underline">About Us</router-link>
        <router-link to="/contact" class="hover:underline">Contact Us</router-link>
        <router-link to="/privacy" class="hover:underline">Privacy Policy</router-link>
      </nav>
    </div>

    <div class="flex flex-col items-start gap-6 mt-10 text-center md:text-left">
      <h2 class="text-2xl font-semibold">Subscribe to our newsletter for latest updates</h2>
      <form class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <label for="subscribeEmail" class="sr-only">Enter Your Email</label>
        <input
          id="subscribeEmail"
          type="email"
          placeholder="Enter Your Email"
          class="px-4 py-3 text-gray-800 rounded sm:flex-grow"
        />
        <button type="submit" class="px-6 py-3 bg-blue-600 rounded text-white hover:bg-blue-700 transition">
          Subscribe
        </button>
      </form>
    </div>

    <div class="flex flex-col items-start gap-4 mt-10 text-sm opacity-80">
      <address class="not-italic">Finstreet 118, 2561 Fintown</address>
      <div class="flex gap-4">
        <a href="mailto:Hello@finsweet.com">Hello@finsweet.com</a>
        <a href="tel:02079932905">020 7993 2905</a>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97aec69bb865091acc615dc97db5d8e70f9d2159333bac51fc7e064632ee024b?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Social media icons" class="w-32 mt-3" />
    </div>
  </footer>
</template>
