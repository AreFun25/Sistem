<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
        <main class="flex flex-col items-center px-20 pt-32 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <section class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
        <div class="max-w-full w-[952px]">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/620ff041f074146a40a17d4ed05a7b479d1ea11f21ba20bdd8802d9140460ab6?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Author's portrait" class="object-contain grow w-full aspect-[0.85] max-md:mt-8" />
            </div>
            <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                <h1 class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                  Hey there, I'm Andrew Jonhson and welcome to my Blog
                </h1>
                <p class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b2c8c8d6b0bfd83127751dc0563d7972908f9608b2bf2b172d18c4b0232c73f?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Social media icons" class="object-contain mt-6 w-28 max-w-full aspect-[6.58]" />
              </div>
            </div>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6adf65d2b2182cdb25b4a072861eb1ed209bb0f828b6136c6697d20e482490?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Decorative image" class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full" />
      </section>

      <section class="flex flex-col self-center mt-32 w-full max-w-screen-lg max-md:mt-10 max-md:max-w-full">
        <h2 class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">
          My Posts
        </h2>
        <div class="mt-16 max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow max-md:mt-8">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a0cfd0b5f4bac1070110b31f5611e8edaf3d046aecde01dc829c8565e0f4e88?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 1" class="object-contain w-full aspect-[1.29]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b473980178f2522679e74bfb1e31f21a2fd33361b4681aac2dd2892843f79f?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 2" class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10" />
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
                <span class="self-start uppercase tracking-[3px]">BUSINESS</span>
                <h3 class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Font sizes in UI design: The complete guide to follow
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">ECONOMY</span>
                <h3 class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  How to build rapport with your web design clients
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>