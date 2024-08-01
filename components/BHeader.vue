<template>
  <div>
    <div class="w-full flex justify-between md:px-[2%] lg:px-16">
      <img src="/h_logo.png"/>
      <div class="grid grid-cols-4 md:gap-4 lg:gap-12 place-items-center cursor-pointer">
        
        <a href="/">Home</a>
        <a href="/#about-us">About Us</a>
        <a href="/#offers">Our Offers</a>
        <a href="/#founder">Founders</a>
      </div>
      <div class="grid place-items-center">
        <button @click="setting.modalOpen" class="text-purple-30 px-4 py-1 rounded border-2 border-purple-30 animate-bounce">Download</button>
      </div>
    </div>
    
  </div>
</template>
<script setup>
const router = useRouter()
const setting = useDrawer()
</script>