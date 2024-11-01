<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <main data-layername="aboutUs" class="flex overflow-hidden flex-col items-center pt-40 bg-white pb-[688px] max-md:py-24">
    <section class="flex flex-col self-stretch px-20 w-full max-md:px-5 max-md:max-w-full">
      <div class="z-10 self-end mr-10 w-full max-w-[1133px] max-md:mr-2.5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div data-layername="column" class="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div data-layername="background" class="flex flex-col grow items-start p-16 w-full text-gray-800 bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <h2 data-layername="aboutUs" class="text-base font-medium leading-none uppercase tracking-[3px]">ABOUT US</h2>
              <h1 data-layername="weAreATeamOfContentWritersWhoShareTheirLearnings" class="mt-4 text-5xl font-bold tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">We are a team of content writers who share their learnings</h1>
            </div>
          </div>
          <div data-layername="column" class="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat" class="self-stretch my-auto text-base leading-7 text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div class="flex relative flex-col items-start px-20 pt-64 min-h-[444px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98c405a947850aac06115bd1837eba5a67dd108c0b2b6d0d0bfe6f6618cbb5a?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="" class="object-cover absolute inset-0 size-full" />
        <div class="flex relative flex-col max-w-full w-[862px]">
          <div data-layername="background" class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5">
            <div class="flex gap-5 max-md:flex-col">
              <div data-layername="column" class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <div data-layername="12" class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">12+</div>
                  <div data-layername="blogsPublished" class="text-base leading-7">Blogs Published</div>
                </div>
              </div>
              <div data-layername="column" class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <div data-layername="18K" class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">18K+</div>
                  <div data-layername="viewsOnFinsweet" class="text-base leading-7">Views on Finsweet</div>
                </div>
              </div>
              <div data-layername="column" class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <div data-layername="30K" class="text-6xl font-bold tracking-tighter leading-none max-md:mr-2.5 max-md:text-4xl">30K+</div>
                  <div data-layername="totalActiveUsers" class="text-base leading-7">Total active Users</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-px">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc96f499ca32af7118424249567bcb1bf42a3e1d0414b47cbcdd9ef2d9dc2cd?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="" class="object-contain grow shrink-0 aspect-[13.51] basis-0 fill-amber-300 w-fit" />
            
          </div>
        </div>
      </div>
      <section data-layername="background" class="flex flex-col items-center px-16 pt-32 pb-20 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div class="w-full max-w-[1053px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div data-layername="column" class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h3 data-layername="ourMision" class="font-semibold leading-none uppercase tracking-[3px]">Our mision</h3>
                <h2 data-layername="creatingValuableContentForCreativesAllAroundTheWorld" class="mt-6 text-3xl font-bold tracking-tighter leading-10">Creating valuable content for creatives all around the world</h2>
                <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaNonBlanditMassaEnimNecScelerisqueViverraMaurisInAliquamSemAtRisusViverraAdipiscingAtInTellus" class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </div>
            <div data-layername="column" class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h3 data-layername="ourVision" class="font-semibold leading-none uppercase tracking-[3px]">Our Vision</h3>
                <h2 data-layername="aPlatformThatEmpowersIndividualsToImprove" class="mt-6 text-3xl font-bold tracking-tighter leading-10">A platform that empowers individuals to improve</h2>
                <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaNonBlanditMassaEnimNecScelerisqueViverraMaurisInAliquamSemAtRisusViverraAdipiscingAtInTellus" class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="mt-32 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div data-layername="column" class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 data-layername="ourTeamOfCreatives" class="self-start text-4xl tracking-tighter leading-none text-gray-800">Our team of creatives</h2>
              <h3 data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididunt" class="mt-4 text-2xl leading-8 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
              <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiat" class="mt-4 text-base leading-7 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              </p>
            </div>
          </div>
          <div data-layername="column" class="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/209cea4fe3d9e717472696012448afc1588578827fcd02ffb1ba99d8437fa9bd?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Our team of creatives" class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full" />
          </div>
        </div>
      </div>
      <div class="mt-32 w-full max-w-[1207px] max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div data-layername="column" class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6cba920407dd7f10ad9f12e05252b59b895adba0200a2508c75fa5c5f38f6c?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f" alt="Why we started this blog" class="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div data-layername="column" class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 data-layername="whyWeStartedThisBlog" class="self-start text-4xl tracking-tighter leading-none text-gray-800">Why we started this Blog</h2>
              <h3 data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididunt" class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
              <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiat" class="mt-4 text-base leading-7 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  </section>
  </div>
   
    <section class="flex flex-col items-center mt-32 max-md:mt-10">
      <h2 data-layername="joinOurTeamToBeAPartOfOurStory" class="text-4xl font-bold tracking-tighter leading-10 text-center text-gray-800 w-[414px] max-md:w-full">Join our team to be a part of our story</h2>
      <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididunt" class="mt-4 text-base leading-7 text-center text-zinc-500 w-[405px] max-md:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <button data-layername="button" class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5">Join Now</button>
    </section>
  </main>
</template>

<style scoped>
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
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default {
  name: 'AboutUs',
  components: {
  },
  data() {
    return {
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
        {
          name: 'Jenny Wilson',
          title: 'Content Writer @Company',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/431ba0a554f76db4c1d3c76b098c205bdd0514c081424011e52b03ec1dacf10c?placeholderIfAbsent=true&apiKey=7616f685421b4f3bb4288c7e45caae1f',
        },
      ],
    }
  }
};
</script>
