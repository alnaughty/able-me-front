<template>
  <div class="z-30 absolute bg-white bg-opacity-90" @click.stop="setting.modalClose" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-center justify-center sm:items-center sm:p-0">
        <div class="rounded grid grid-cols-1 md:grid-cols-2 place-items-center w-[80%] lg:w-[70%] h-[50%] bg-white md:px-[2%] md:py-[1%]" @click.stop="">
          <div class="lg:pl-[10%]">
            <p class="text-4xl uppercase text-purple-30 font-bold">Download</p>
            <p class="text-4xl uppercase">our app</p>
            <p class="text-[16px]">Welcome to our all-inclusive transportation app, where convenience meets versatility! Whether you're ordering food, 
              purchasing medicine, booking a ride, or catching up on the latest blogs and news, everything is just a tap away.</p>
            <div class="flex w-full items-center">
              <img class="w-[100px] h-[34px]" src="/appstore.png"/>
              <img class="w-[120px]" src="/playstore.png"/>
            </div>
          </div>
          <div class="hidden md:block">
            <img src="/download_img.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const setting = useDrawer()
</script>