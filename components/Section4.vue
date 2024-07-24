<template>
  <div class="mt-2 md:mt-0 lg:-mt-40 relative grid md:place-items-center bg-[url('/image2.png')] bg-cover h-[500px] h-[600px]">
    <div class="md:text-center ml-4 mt-20 md:-mt-80 lg:-mt-60" ref="animatedSection4" :class="{'animate-fade-in-down': isVisible}">
      <p class="text-[18px] md:text-[24px] text-purple-10 font-bold">OUR OFFERS</p>
      <p class="hidden md:block text-xl font-bold text-white tracking-wide uppercase md:text-center mb-3">Providing a comprehensive <br> range of services</p>
      <p class="md:hidden text-lg font-bold text-white tracking-wide uppercase md:text-center mb-3">Providing a <br> comprehensive range of services</p>
      <p class="text-[14px] md:text-center text-white">Able Me provides a comprehensive range of services tailored to meet the <br> diverse needs of our users</p>
    </div>
    
    <div class="absolute flex lg:justify-center -bottom-20 gap-4 md:left-0 lg:gap-12 w-screen md:w-[100%] overflow-x-auto lg:overflow-hidden md:px-4 lg:px-12"
      ref="animatedSection4" :class="{'animate-fade-in': isVisible}"
    >
      <div class="bg-white rounded-lg p-5 lg:p-10 shadow-2xl min-w-[250px] md:min-w-[100px] md:max-w-[195px] lg:max-w-[350px]">
        <img class="mb-2 w-[90px] md:w-[50px] lg:w-[150px]" src="/meter.png"/>
        <p class="font-bold uppercase mb-2">Accessible <br> Transportation</p>
        <p class="md:text-[14px] lg:text-[16px]">Vehicles equipped with ramps and lifts for wheelchair accessibility.</p>
      </div>
      <div class="bg-white rounded-lg p-5 lg:p-10 shadow-2xl min-w-[250px] md:min-w-[100px] md:max-w-[195px] lg:max-w-[350px]">
        <img class="mb-2 w-[90px] md:w-[50px] lg:w-[150px]" src="/food.png"/>
        <p class="font-bold uppercase mb-2">Food Delivery</p>
        <p class="md:text-[14px] lg:text-[16px]">Convenient delivery of groceries and meals, accommodating various dietary requirements.</p>
      </div>
      <div class="bg-white rounded-lg p-5 lg:p-10 shadow-2xl min-w-[250px] md:min-w-[100px] md:max-w-[195px] lg:max-w-[350px]">
        <img class="mb-2 w-[90px] md:w-[50px] lg:w-[150px]" src="/medicine.png"/>
        <p class="font-bold uppercase mb-2">Medicine Pickup and Drop</p>
        <p class="md:text-[14px] lg:text-[16px]">Secure and timely delivery of prescriptions and medical supplies. </p>
      </div>
      <div class="bg-white rounded-lg p-5 lg:p-10 shadow-2xl min-w-[250px] md:min-w-[100px] md:max-w-[195px] lg:max-w-[350px]">
        <img class="mb-2 w-[90px] md:w-[50px] lg:w-[150px]" src="/box.png"/>
        <p class="font-bold uppercase mb-2">Parcel Assistance</p>
        <p class="md:text-[14px] lg:text-[16px]">Reliable handling and delivery of parcels and packages.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const isVisible = ref(false)
const animatedSection4 = ref(null)
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
  observer.observe(animatedSection4.value);
}

onMounted(() => {
  observeElement()
});
</script>