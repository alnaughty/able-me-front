<template>
  <div class="font-sans !scroll-smooth">
    <b-header class="hidden md:flex"/>
    <s-header class="sm:block md:hidden"/>
    <NuxtPage @click.capture="drawer.close"/>
    <b-footer/>
  </div>

</template>
<script setup>
const drawer = useDrawer()
</script>