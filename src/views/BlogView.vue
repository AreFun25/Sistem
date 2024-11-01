<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
    <div class="bg-lightergrey">
      <div class="flex max-w-screen-2xl mx-auto px-8 py-32">
        <div class="basis-1/2">
          <p class="font-inter text-h6 leasing-h6 font-regular text-darkblue uppercase tracking-widest mb-4">Featured Post</p>
              <h1 class="font-sen text-h2 leasing-h2 font-bold text-darkblue mb-6 max-w-4xl">Step-by-step guide to choosing great font pairs</h1>
              <p class="font-inter text-body1 leasing-body1 font-normal text-darkblue mb-6">By <span class="text-secondary">John Doe</span> |  May 23, 2022 </p>
              <p class="font-inter text-body1 leasing-body1 font-normal text-mediumgrey mb-10 max-w-3xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <Button variant="primary"  to="/post">
                          Read More >
              </Button>
        </div>
        <div class="basis-1/2 m-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d8e2ad51b83243c6a1b8dc7a5ef0551de55869448857de5ea983f125477ec0?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f"
            alt="hero" class="mx-auto"/>
        </div>
      </div>
     </div>
     <main class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <h1 data-layername="allPosts" class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">
      All posts
    </h1>
    <hr data-layername="allBlogsDivider" class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full" />
    <section class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <aside data-layername="column" class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 1" class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 2" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cfeccf80166a1a1e1a67e39fb048144c2077f71940df4513cedf2d316b6abdb?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 3" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 4" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Blog post image 5" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
          </div>
        </aside>
        <article data-layername="column" class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
            <span data-layername="startup" class="self-start uppercase tracking-[3px]">
              Startup
            </span>
            <h2 data-layername="designTipsForDesignersThatCoverEverythingYouNeed" class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
              Design tips for designers that cover everything you need
            </h2>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <span data-layername="business" class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">
              BUSINESS
            </span>
            <h2 data-layername="howToBuildRapportWithYourWebDesignClients" class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
              How to build rapport with your web design clients
            </h2>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <span data-layername="startup" class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">
              Startup
            </span>
            <h2 data-layername="logoDesignTrendsToAvoidIn2022" class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full">
              Logo design trends to avoid in 2022
            </h2>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <span data-layername="technology" class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">
              TECHNOLOGY
            </span>
            <h2 data-layername="8FigmaDesignSystemsYouCanDownloadForFreeToday" class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
              8 Figma design systems you can download for free today
            </h2>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <span data-layername="economy" class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">
              ECONOMY
            </span>
            <h2 data-layername="fontSizesInUiDesignTheCompleteGuideToFollow" class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
              Font sizes in UI design: The complete guide to follow
            </h2>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </article>
      </div>
    </section>
    <nav class="flex gap-4 self-center mt-16 ml-3.5 max-w-full font-bold text-center w-[174px] max-md:mt-10">
      <button data-layername="prev" class="grow my-auto text-2xl leading-none text-zinc-500">
        &lt; Prev
      </button>
      <button data-layername="next" class="text-3xl tracking-tighter leading-none text-gray-800">
        Next &gt;
      </button>
    </nav>
  </main>
  <div class="mt-16">
  <div class="container">
    <div class="flex justify-center">
      <div class="title">Choose A Catagory</div>
    </div>
    <div class="cards">
      <div class="card" v-for="(item, index) in categories" :key="index">
        <i :class="item.icon"></i>
        <div class="card-title">{{ item.title }}</div>
        <div class="card-text">{{ item.text }}</div>
      </div>
    </div>
    </div>
  </div>
  <div class="mt-16">
  <div class="flex justify-center">
  <hr class="shrink-0 self-stretch mt-16 h-px border border-solid opacity-30 bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
    <section class="mt-32 max-md:mt-10">
      <h2 class="text-4xl font-bold tracking-tighter leading-10 text-center text-gray-800 w-[414px]">
        Join our team to be a part of our story
      </h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500 w-[405px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <div class="flex justify-center">
        <button class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out max-md:px-5">
          Join Now
        </button>
      </div>
    </section>
  </div>
</div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.social-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bi {
  font-size: 24px;
  margin: 0 10px;
}

.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.card {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  color: #666;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  width: 50%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.text {
  width: 50%;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.heading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.paragraph {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.discover-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.discover-button:hover {
  background-color: #3e8e41;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default {
  name: 'BlogView',
  components: {
    HeaderContent
  },
  data() {
    return {
      categories: [
        {
          title: 'Business ',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'bi bi-briefcase'
        },
        {
          title: 'Startup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'bi bi-heart'
        },
        {
          title: 'Technology',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'bi bi-code'
        },
        {
          title: 'Health',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'bi bi-heart'
        }
      ]
    }
  }
};
</script>


