<template>
  <div class="flex min-h-full items-center justify-center sm:items-center sm:p-0">
    <div class="relative rounded flex justify-between w-[100%] lg:w-[70%] h-[50%] bg-white" @click.stop="">
      <!-- <button type="button" class="top-3 end-2.5 text-red-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
        </button> -->
      <div class="hidden md:flex items-end">
        <img class="w-[940px]" src="/m_image1.png"/>
      </div>
      <div class="p-3 md:p-5 lg:p-7 font-sans">
        <div class="flex justify-center">
          <img @click="emit('close')" class="mb-7 w-[150px]" src="/h_logo.png"/>
        </div>
        <p class="mb-3">Dear Friends,</p>
        <p class="mb-3">
          We founded Able Me with a shared vision and a deep sense of purpose—to empower individuals with disabilities to live life on their own terms. Every journey begins 
          with a belief in the power of inclusivity and accessibility, and this belief is at the heart of everything we do.
        </p>
        <p class="mb-3">
          We understand firsthand the challenges that come with navigating a world that isn't always designed with everyone in mind. We've seen the barriers and felt the frustrations.
          That's why we set out to create Able Me—a platform that goes beyond transportation services. It's a lifeline, a community, and a promise of independence.
        </p>
        <p class="mb-3">
          Empathy fuels our innovation. Every decision we make, from the technology we employ to the partnerships we forge, is rooted in our commitment 
          to making a meaningful impact in our communities.
        </p>
        <p class="mb-3">
          We are dedicated to continuous improvement, actively seeking feedback, and embracing new technologies to enhance our services. 
          Our journey doesn't end here—it evolves with each milestone and every user's story.
        </p>
        <p class="mb-3">
          We invite you to join us on this journey of empowerment and change. Together, let's create a world where accessibility is a given, 
          not a barrier. Together, let's redefine what's possible.
        </p>
        <p class="mb-3">
          With gratitude and determination,
        </p>
        <p class="">
          Angela Andrews and Deina Andrews
        </p>
        <p class="mb-3">
          Founders of Able Me
        </p>
      </div>
      <div class="hidden md:flex items-end">
        <img class="w-[900px]" src="/m_image2.png" />
      </div>
    </div>
  </div>  
</template>
<script setup>
const emit = defineEmits(['close'])
</script>