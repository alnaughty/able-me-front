<template>
  <div class="md:py-5">
    <div class="grid md:grid-cols-2 grid-cols-1 md:px-20 px-4">
      <div ref="animatedSection31" :class="{'animate-fade-in-left': isVisible1}">
        <p class="text-2xl lg:text-4xl mb-3 font-bold">What can we <span class="text-purple">promise?</span></p>
        <p class="md:text-[16px] lg:text-[18px] tracking-wide">Our promise is one of relentless innovation and empathy. We are committed  to continuously enhancing our services, actively seeking feedback, 
          and  embracing new technologies to better meet the evolving needs of our  community. This commitment drives us to go beyond expectations,  
          ensuring that every interaction with Able Me is a step towards a more  accessible and inclusive world.</p>
      </div>
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 md:pr-20 pr-4 pl-4 md:pl-0">
      <div class="lg:-mt-40" ref="animatedSection32" :class="{'animate-fade-in-up': isVisible2}">
        <img class="hidden md:block" src="/car.png"/>
      </div>
      <div class="mt-4 lg:mt-40" ref="animatedSection32" :class="{'animate-fade-in-right': isVisible2}">
        <p class="text-2xl lg:text-4xl mb-3 font-bold">What about our <span class="text-purple">Commitment?</span></p>
        <p class="md:text-[16px] lg:text-[18px] tracking-wide" >We are committed to excellence in service, safety, and customer satisfaction. Our   team is dedicated to delivering reliable, 
          compassionate, and personalized care to you,  ensuring your journey with Able Me is seamless and enjoyable.  <br> <br>
          Join us in our mission to transform transportation accessibility. Together, we can  create a world where everyone can thrive and live life to the fullest.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const isVisible1 = ref(false)
const isVisible2 = ref(false)
const animatedSection31 = ref(null)
const animatedSection32 = ref(null)
const observeElement = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible1.value = true;
        isVisible2.value = true;
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  });
  console.log(observer)
  observer.observe(animatedSection31.value);
  observer.observe(animatedSection32.value);
}

onMounted(() => {
  observeElement()
});
</script>