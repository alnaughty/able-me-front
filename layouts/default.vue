<template>
  <div class="font-sans !scroll-smooth">
    <download :class="drawer.modal ? 'modal-open' : 'modal-close'" class="hidden md:block modal w-screen h-screen" @close="drawer.modalClose"/>
    <small-download :class="drawer.modal ? 'modal-open' : 'modal-close'" class="md:hidden modal w-screen h-screen" @close="drawer.modalClose"/>
    <b-header class="hidden md:flex"/>
    <s-header class="sm:block md:hidden"/>
    <NuxtPage @click.capture="drawer.close"/>
    <b-footer/>
  </div>

</template>
<script setup>
const drawer = useDrawer()
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