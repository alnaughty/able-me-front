<template>
  <div>
    <div
      :class="drawer.open ? 'opacity-25':'opacity-100'"
      class=" top-0 left-0 w-full px-4"
      @click.stop=""
    >
      <div class="flex justify-between items-center">
        <button @click="tog()" class="text-black text-2xl font-bold">&#9776;</button>
        <img class="w-[180px]" src="/h_logo.png"/>
        <img @click="router.push({path:'/download'})" src="/download.png" class="w-[20px] h-[20px]"/>
      </div>
    </div>
    <nav
      :class="drawer.open ? 'navbar-open' : 'navbar-close'"
      class="navbar w-[80%] absolute text-white bg-purple top-0 h-screen z-20"
    >
      <div class="flex pr-2 justify-end">
        <button @click="drawer.close" class="p-2 text-xl font-bold">&#9747;</button>
      </div>
      <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
      <ul class="list-none text-center">
        <li class="my-8">
          <a href="/">Home</a>
        </li>
        <li class="my-8">
          <a href="/#about-us">About Us</a>
        </li>
        <li class="my-8">
          <a href="/#offers">Our Offers</a>
        </li>
        <li class="my-8">
          <a href="/#founder">Founders</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
const router = useRouter()
const drawer = useDrawer()
const tog = () => {
  drawer.changeOpen()
}

const handleScroll = () => {
  drawer.close()
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>