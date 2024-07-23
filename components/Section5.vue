<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-[120px] md:px-20 md:place-items-center">
    <img class="z-10 md:hidden" src="/image3.png"/>
    <div>
      <p class="md:text-2xl lg:text-4xl font-bold uppercase mb-7 md:mb-4">A Letter from the  <span class="text-purple">Founders</span> of Able Me</p>
      <p class="text-[16px] lg:text-[18px] leading-relaxed">We founded Able Me with a shared vision and a deep sense 
        of purpose—to empower individuals with disabilities to live life on 
        their own terms. Every journey begins with a belief in the power 
        of inclusivity and accessibility, and this belief is at the heart of everything we do. 
        <span v-if="!more" @click="more=!more" class="text-purple cursor-pointer">Read more...</span>
        </p>
        <p :class="more?'block':'hidden'" class="text-[16px] lg:text-[18px] leading-relaxed mt-4">
        We understand firsthand the challenges that come with 
        navigating a world that isn't always designed with everyone in 
        mind. We've seen the barriers and felt the frustrations. That's 
        why we set out to create Able Me—a platform that goes beyond 
        transportation services. It's a lifeline, a community, and a 
        promise of independence.
        <span @click="more=!more" class="text-purple cursor-pointer">Hide</span>
      </p>
    </div>
    <img class="z-10 hidden md:block" src="/image3.png"/>
  </div>
</template>
<script setup>
const more = ref(false)
</script>