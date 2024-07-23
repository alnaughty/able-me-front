<template>
  <div class="font-sans">
    <b-header class="hidden md:flex"/>
    <s-header class="sm:block md:hidden"/>
    <NuxtPage @click.capture="drawer.close"/>
    <b-footer class="hidden md:flex"/>
  </div>

</template>
<script setup>
const drawer = useDrawer()
</script>