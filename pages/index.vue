<template>
  <div class="m-0 p-0 font-sans">
    <img class="absolute top-40 right-0 !z-0 md:w-[85%] lg:w-[65.5%] hidden md:block" src="/sline.png" />
    <section-1/>
    <section-2 id="about-us"/>
    <section-3 />
    <section-4 id="offers"/>
    <section-5 id="founder"/>
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'ABLE ME',
  ogTitle: 'ABLE ME',
  description: 'At Able Me, we are dedicated to revolutionizing transportation and accessibility for individuals with disabilities. Our mission is to empower every person to navigate their world with independence and confidence, ensuring they have equal access to essential services and opportunities.',
  ogDescription: 'At Able Me, we are dedicated to revolutionizing transportation and accessibility for individuals with disabilities. Our mission is to empower every person to navigate their world with independence and confidence, ensuring they have equal access to essential services and opportunities.',
  ogImage: '/h_logo.png',
})

const drawer = useDrawer()
</script>