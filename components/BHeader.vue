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
        <button @click="open=!open" class="text-purple px-4 py-1 rounded border-2 animate-bounce">Download</button>
      </div>
    </div>
    <download :class="open ? 'modal-open' : 'modal-close'" class="modal w-screen h-screen" @close="open=false"/>
  </div>
</template>
<script setup>
const router = useRouter()
const open = ref(false)
</script>
<style scoped>
.modal {
  transition: all 330ms ease-out;
}

.modal-open {
  transform: translateY(0%);
}
.modal-close {
  transform: translateY(-100%);
}
</style>