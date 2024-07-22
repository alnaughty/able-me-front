<template>
  <div class="w-full bg-[url('/map.png')] bg-cover md:py-5 lg:py-20 bg-opacity-0">
    <div class="h-full grid sm:grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
      <div class="md:w-[361px] lg:w-[616px]">
        <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">TRY OUR <span class="text-purple"> INCLUSIVE </span> TRANSPORTATION APP</h1>
        <div class="md:w-[80%] lg:w-[70%]">
          <p class="text-purple md:text-[15px] lg:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div class="w-full">
            <input class="focus:border-purple focus:outline-none border-2 border-purple rounded md:w-[70%] lg:w-[60%] md:h-[30px] lg:h-[35px] uppercase text-xs" 
            placeholder="Enter your business email" type="text"/>
            <button class="text-white bg-purple md:px-1 lg:px-4 py-1 rounded md:h-[30px] lg:h-[36px] -ml-2 text-sm">Contact Us</button>
          </div>

        </div>
      </div>
      <div class="w-full h-full grid place-items-center">
        <img class="!z-10 md:w-[300px] lg:w-[600px]" src="/phone.png" />
      </div>
    </div>

    <div class="grid grid-cols-2 place-items-center py-5 md:pr-10 lg:pr-20">
      <div class="w-full place-items-start md:pl-[20px] lg:pl-[110px]">
        <img class="lg:w-[330px] md:w-[200px]" src="/partners.png"/>
      </div>
      <div class="w-full grid place-items-end">
        <p class="text-[16px] text-purple font-medium"> Follow Our Social Media Account</p>
        <div class="flex justify-end gap-2">
          <img class="!cursor-pointer w-[30px] h-[30px]" src="/p_facebook.png"/>
          <img class="cursor-pointer w-[30px] h-[30px]" src="/p_intagram.png"/>
          <img class="cursor-pointer w-[30px] h-[30px]" src="/p_twitter.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>