<template>
  <div class="w-full bg-[url('/map.png')] bg-cover md:py-5 lg:py-20 bg-opacity-0 px-4 md:px-0 md:pl-5">
    <div class="h-full grid sm:grid-cols-1 md:grid-cols-2 gap-12 place-items-center ">
      <div class="w-full md:w-[361px] lg:w-[95%] animate-fade-in-left">
        <h1 class="hidden md:block text-2xl md:text-4xl lg:text-6xl font-bold">TRY OUR <span class="text-purple-30"> INCLUSIVE <br> </span> TRANSPORTATION <br> APP</h1>
        <h1 class="md:hidden text-[30px] md:text-4xl lg:text-6xl font-bold leading-9">TRY OUR <br> <span class="text-purple-30"> INCLUSIVE </span> <br> TRANSPORTATION <br> APP</h1>
        <div class="md:w-[80%] lg:w-[70%] mt-5 md:mt-0 lg:mt-3">
          <p class="text-purple-30 text-[16px] tracking-tighter font-medium mb-2 md:mb-0">Partner with Able Me and be part of the <br>movement towards a more inclusive <br> world.</p>
          <div class="w-full lg:mt-3">
            <input class="focus:border-purple focus:outline-none border-2 border-purple rounded w-[70%] h-[35px] md:w-[70%] lg:w-[60%] md:h-[30px] lg:h-[35px] uppercase text-xs" 
            placeholder="Enter your business email" type="text"/>
            <button class="text-white bg-purple-30 md:px-1 lg:px-4 py-1 rounded h-[36px] w-[30%] lg:w-[35%] md:h-[30px] lg:h-[36px] -ml-2 text-sm">Contact Us</button>
          </div>

        </div>
      </div>
      <div class="w-full h-full grid md:place-items-center -mt-7 md:mt-0 animate-fade-in-right">
        <!-- <img class="md:hidden w-[250px] mb-5" src="/partners.png"/> -->
        <img class="!z-10 md:w-[300px] lg:w-[600px]" src="/phone.png" />
      </div>
    </div>
    <div class="hidden md:grid grid-cols-1 place-items-center py-5 md:pr-10 lg:pr-20 ">
      <!-- <div class="w-full place-items-start md:pl-[20px] lg:pl-[110px] animate-fade-in-up">
        <img class="lg:w-[330px] md:w-[200px]" src="/partners.png"/>
      </div> -->
      <div class="hidden w-full md:grid place-items-start animate-fade-in-up md:pl-[20px]">
        <p class="text-[16px] text-[#4B4B4B] font-medium"> Follow Our Social Media Account</p>
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