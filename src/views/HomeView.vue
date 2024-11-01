<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <div class="flex overflow-hidden flex-col pb-16 bg-white">
    <main>
      <section class="flex relative flex-col w-full text-base font-bold text-white min-h-[720px] max-md:max-w-full"
      style="background-image: url('src/assets/images/misc/cover.png')">
        <div class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
          <p class="font-semibold leading-none uppercase tracking-[3px]">
            <span class="font-medium">Posted on</span>
            <span class="font-black">startup</span>
          </p>
          <h1 class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p class="mt-6 leading-7 text-blue-600">
            By <span class="text-blue-600">James West</span> | May 23, 2022
          </p>
          <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <button class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:px-5 max-md:mt-10 max-md:mb-2.5" tabindex="0">
            Read More >
          </button>
        </div>
      </section>

      <section class="flex flex-col px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
          <h2 class="tracking-tighter">Featured Post</h2>
          <h2 class="tracking-tighter">All Posts</h2>
          <a href="/posts" class="my-auto text-base leading-7 text-amber-300 hover:text-amber-400">View All</a>
        </div>

        <div class="mt-8 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c651b39fb6730526c376a0d7d125fa0443fc8b0fa3d16aa41cb74d28393efb65?placeholderIfAbsent=true&apiKey=06487ba96cd6459d8ca7833e049f7114" alt="Featured post image" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
                <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> l May 23, 2022
                </p>
                <h3 class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h3>
                <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <button class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:px-5" tabindex="0">
                  Read More >
                </button>
              </div>
            </article>

            <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none text-amber-300">
                    By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>

                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-orange-50 max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none text-amber-300">
                    By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>

                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none text-amber-300">
                    By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>

                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none text-amber-300">
                    By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>
              </div>
            </aside>
          </div>
        </div>

        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=06487ba96cd6459d8ca7833e049f7114" alt="Decorative divider" class="object-contain self-end mt-32 aspect-[45.45] max-w-[1061px] w-[1061px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full" />

        <section class="px-20 py-24 bg-gray-100 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">ABOUT US</h2>
                <h3 class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                  We are a community of content writers who share their learnings
                </h3>
                <p class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/about" class="self-start mt-7 text-lg leading-8 text-amber-300 hover:text-amber-400">Read More ></a>
              </div>
            </article>

            <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h2 class="font-semibold leading-none uppercase tracking-[3px]">Our mision</h2>
                <h3 class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                  Creating valuable content for creatives all around the world
                </h3>
                <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  </div>
  <div class="mt-16">
  <div class="container">
    <div class="flex justify-center">
      <div class="title">Choose A Catagory</div>
    </div>
    <div class="cards">
      <div class="card" v-for="(item, index, icon) in categories" :key="index">
        <img :src=item.icon alt="icon" class="cord-icon" />
        <div class="card-title">{{ item.title }}</div>
        <div class="card-text">{{ item.text }}</div>
      </div>
    </div>
    <div class="flex justify-center">
    <div class="content">
      <div class="image">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35cf3d6450165144a0ef4eb8b2d9b1fa459630d3402d8949bbfde1d779507d11?placeholderIfAbsent=true&apiKey=06487ba96cd6459d8ca7833e049f7114" alt="Mountain View">
      </div>
      <div class="mt-16">
      <div class="text">
        <div class="title">WHY WE STARTED</div>
        <div class="heading">It started out as a simple idea and evolved into our passion</div>
        <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
        <button class="discover-button">Discover our story</button>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>
  
<div class="container">
    <h2 class="title">List of Authors</h2>
    <div class="grid">
      <div class="card" v-for="(author, index) in authors" :key="index">
        <img :src="author.image" alt="Author Image" class="avatar" />
        <h3>{{ author.name }}</h3>
        <p>{{ author.title }}</p>
      </div>
    </div>
    <section class="flex flex-wrap gap-10 mt-36 w-full max-w-[1237px] text-zinc-500 max-md:mt-10 max-md:max-w-full">
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c97b6045417360361410a73b225309321b37ae230a3bf8f28e10fbcfcd9733?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" 
      alt="Featured publications logos" 
      class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full"
    />
  </section>
  </div>

  <div class="mt-16">
  <section data-layername="testimonials" class="flex flex-col justify-center items-center w-full max-w-screen-lg px-8 py-20 rounded-lg py-16 bg-orange-50 shadow-md mx-auto">
      <div class="flex flex-wrap gap-5">
        <div class="flex flex-col items-start mt-3 text-base text-gray-800">
          <h2 data-layername="testimonials" class="font-semibold uppercase tracking-[3px]">
            TESTIMONIALS
          </h2>
          <h3 data-layername="whatPeopleSayAboutOurBlog" class="mt-3 text-4xl font-bold leading-10">
            What people say about our blog
          </h3>
          <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor" class="mt-4 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div class="shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px]"></div>
        <div class="flex flex-col max-md:max-w-full">
          <blockquote data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua" class="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </blockquote>
          <div class="flex flex-wrap gap-5 justify-between items-start mt-10 w-full">
            <div class="flex gap-4 mt-2">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/830a66a5a38a6ee455158585ade9629a597165cac806aa06f0f7c3f150c67226?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Profile picture of Jonathan Vallem" class="object-contain w-12 rounded-full" />
              <div class="flex flex-col">
                <cite data-layername="jonathanVallem" class="text-2xl font-bold text-gray-800">
                  Jonathan Vallem
                </cite>
                <span data-layername="newYorkUsa" class="text-base text-zinc-500">
                  New York, USA
                </span>
              </div>
            </div>
            <div class="flex gap-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="" class="w-12" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="" class="w-[62px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
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

.card-icon  {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
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

.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}

.logos img {
  width: 40px;
  height: 40px;
  margin: 10px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'


export default {
  name: 'HomeView',
  components: {
    HeaderContent
  },
  data() {
    return {
      categories: [
        {
          title: 'Business ',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce335824448cbad56f38896330200d6bf9ede337a7a65aedb9c940df72afce49?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
        {
          title: 'Startup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/576cba0d27ba2190bd6bbd54daa12782abddcdfeedf9d5523524e38534114f60?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
        {
          title: 'Economy',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/15565c59b7865f60bcfd919010754b59fc48abc215caf792c4a82a1fd7c047f3?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
        {
          title: 'Technology',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/35317dfe268fe2c0a7c4e8cc832a5f8669aab86961c45ba5407deb2c3bc1bb45?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        }
      ],
      authors: [
        {
          name: 'Floyd Miles',
          title: 'Content Writer @Company',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a08ac807213d9627fd7596c3e46ac3eb0e08d4f8417cb8b287915d18f59c9b0?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
        {
          name: 'Dianne Russell',
          title: 'Content Writer @Company',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e22bc8df8cd660950385732d863cfe8a46f88897df05f7505ee7e97e51005442?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
        {
          name: 'Jenny Wilson',
          title: 'Content Writer @Company',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/431ba0a554f76db4c1d3c76b098c205bdd0514c081424011e52b03ec1dacf10c?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
        {
          name: 'Leslie Alexander',
          title: 'Content Writer @Company',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
      ],
    }
  }
};

</script>

<style scoped>
.builder-component {
  max-width: none !important;
}
</style>