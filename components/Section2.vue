<template>
  <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 py-6 px-4">
    <img ref="animatedElement" :class="{'animate-fade-in-left': isVisible}" class="md:w-[370px] lg:w-[600px] !z-10" src="/image1.png"/>
    <div class="md:pr-20 mt-5 md:mt-0 z-10" ref="animatedElement" :class="{'animate-fade-in-right': isVisible}">
      <p class="text-lg font-bold text-purple-30 md:mb-0 lg:mb-3 tracking-wider">ABOUT US</p>
      <p class="text-lg md:text-xl lg:text-4xl font-extrabold md:leading-7 mb-2 md:mb-1 lg:mb-4 tracking-wide uppercase">Revolutionizing PWD <br> Transportation Accessibility</p>
      <p class="lg:tracking-widest ">At Able Me, we are dedicated to revolutionizing transportation and accessibility for individuals with 
        disabilities Our mission is to empower every person to navigate their world with 
        independence and confidence, ensuring they have equal access to essential services and opportunities.
        <span v-if="!more" @click="readMore" class="text-purple-30 cursor-pointer"> Read more..</span>. 
        <span :class="more?'inline':'hidden'"> 
          <br><br>
          We envision a future where transportation barriers are a thing of the past, where everyone can move freely and safely, regardless of their abilities. Through innovation and dedication, 
          we strive to create a society where accessibility is a fundamental right, not a privilege.
          <br><br>
          At Able Me, empathy drives our innovation. We're not just building a service; we're building connections and fostering empowerment. 
          Every decision we make, from the technology we employ to the partnerships we forge, is rooted in our commitment to making a meaningful impact in the lives of our users.
        <span @click="more=!more" class="text-purple-30 cursor-pointer">Hide</span>
        </span>
      </p>
    </div>
  </div>
</template>
<script setup>
const more = ref(false)
const isVisible = ref(false)
const animatedElement = ref(null)
const observeElement = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  });
  console.log(observer)
  observer.observe(animatedElement.value);
}

const readMore = () => {
  console.log("test")
  more.value = !more.value
}

onMounted(() => {
  observeElement()
});
</script>