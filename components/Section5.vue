<template>
  <div class="relative">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-[120px] md:px-20 md:place-items-center">
      <img ref="animatedSection5" :class="{'animate-fade-in-down': isVisible}" class="z-10 md:hidden" src="/image3.png"/>
      <div ref="animatedSection5" :class="{'animate-fade-in-up': isVisible}">
        <p class="md:text-2xl lg:text-4xl font-bold uppercase mb-7 md:mb-4">A Letter from the  <span class="text-purple-30">Founders</span> of Able Me</p>
        <p class="text-[16px] lg:text-[18px] leading-relaxed">We founded Able Me with a shared vision and a deep sense 
          of purpose—to empower individuals with disabilities to live life on 
          their own terms. Every journey begins with a belief in the power 
          of inclusivity and accessibility, and this belief is at the heart of everything we do. 
        </p>
        <p class="text-[16px] lg:text-[18px] leading-relaxed mt-4">
          We understand firsthand the challenges that come with 
          navigating a world that isn't always designed with everyone in 
          mind. We've seen the barriers and felt the frustrations. That's 
          why we set out to create Able Me—a platform that goes beyond 
          transportation services. It's a lifeline, a community, and a 
          promise of independence.
          <span data-modal-target="popup-modal" data-modal-toggle="popup-modal" @click.stop="more=true" class="text-purple-30 cursor-pointer">Read more...</span>
          <!-- <span @click="more=!more" class="text-purple cursor-pointer">Hide</span> -->
        </p>
      </div>
      <img ref="animatedSection5" :class="{'animate-fade-in-down': isVisible}" class="z-10 hidden md:block" src="/image3.png"/>
    </div>
    
<div id="popup-modal" tabindex="-1" @click="hideModal" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-h-full h-full" @click.stop="hideModal">
      <founder-message :class="more ? 'animate-fade-in-up' : 'animate-fade-out-down'" @close="hideModal"/>
      <button :data-modal-hide="'popup-modal'" class="hidden"></button>
    </div>
</div>


  </div>
</template>
<script setup>
import { useFlowbite } from '~/composables/useFlowbite';
const more = ref(false)
const setting = useDrawer()
const isVisible = ref(false)
const animatedSection5 = ref(null)
const observeElement = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    });
  });
  console.log(observer)
  observer.observe(animatedSection5.value);
}

const hideModal = () => {
  more.value = false;
  setTimeout(() => {
    triggerHideModal()
  }, 900);
};

const triggerHideModal = () => {
  const event = new CustomEvent('click', {
    bubbles: true,
    cancelable: true
  });
  const button = document.querySelector('[data-modal-hide="popup-modal"]');

  if(more.value == false) { 
    if (button) {
      button.dispatchEvent(event);
    }
  }
};

onMounted(() => {
  observeElement()
  useFlowbite(() => {
    initFlowbite();
  })
});
</script>
<style scoped>
.modal {
  transition: all 1330ms ease-out;
}

.modal-open {
  transform: translateY(0%);
}
.modal-close {
  transform: translateY(-100%);
}
</style>