<template>
  <div class="w-full bg-[url('/map.png')] bg-cover py-20 bg-opacity-0">
    <div class="h-full grid sm:grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
      <div class="w-[616px]">
        <h1 class="text-6xl font-bold">TRY OUR <span class="text-purple"> INCLUSIVE </span> TRANSPORTATION APP</h1>
        <div class="w-[70%]">
          <p class="text-purple text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div class="w-full">
            <input class="focus:border-purple focus:outline-none border-2 border-purple rounded w-[60%] h-[35px] text-center uppercase text-sm" 
            placeholder="Enter your business email" type="text"/>
            <button class="text-white bg-purple px-4 py-1 rounded h-[36px] -ml-2">Contact Us</button>
          </div>

        </div>
      </div>
      <div class="w-full h-full grid place-items-center">
        <img class="!z-10" src="/phone.png" width="600px"/>
      </div>
    </div>

    <div class="grid grid-cols-2 place-items-center py-5 pr-20">
      <div class="w-full place-items-start pl-[110px]">
        <img src="/partners.png" width="330px"/>
      </div>
      <div class="w-full grid place-items-end">
        <p class="text-[16px] text-purple font-medium"> Follow Our Social Media Account</p>
        <div class="flex justify-end gap-2">
          <img class="cursor-pointer" src="/p_facebook.png"/>
          <img class="cursor-pointer" src="/p_intagram.png"/>
          <img class="cursor-pointer" src="/p_twitter.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>