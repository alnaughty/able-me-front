<template>
  <div class="grid grid-cols-2 place-items-center w-full h-[900px] md:px-[10%]">
    <div class="lg:pl-[10%]" ref="animatedDownload" :class="{'animate-fade-in-left': isVisible}">
      <p class="text-4xl uppercase text-purple font-bold">Download</p>
      <p class="text-4xl uppercase">our app</p>
      <p class="text-[16px]">Welcome to our all-inclusive transportation app, where convenience meets versatility! Whether you're ordering food, 
        purchasing medicine, booking a ride, or catching up on the latest blogs and news, everything is just a tap away.</p>
      <div class="flex w-full items-center">
        <img class="w-[100px] h-[34px]" src="/appstore.png"/>
        <img class="w-[120px]" src="/playstore.png"/>
      </div>
    </div>
    <div ref="animatedDownload" :class="{'animate-fade-in-down': isVisible}">
      <img src="/download_img.png"/>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'black'
})

const isVisible = ref(false)
const animatedDownload = ref(null)
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
  observer.observe(animatedDownload.value);
}

onMounted(() => {
  observeElement()
});

</script>