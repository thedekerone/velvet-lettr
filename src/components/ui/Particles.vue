<script setup>
import { ref } from 'vue'
import { getParticles } from '../../utils'

const numberOfParticles = 10
const particles = ref(getParticles(numberOfParticles))

setInterval(() => {
  particles.value = getParticles(numberOfParticles)
}, 10000)

</script>

<template>
  <div :key="index" v-for="(particle, index) in particles">
    <div
      :style="{ top: particle.position.y + 'px', left: particle.position.x + 'px', width: particle.size + 'px', height: particle.size + 'px', backgroundColor: particle.color }"
      class="rounded-full bg-primary-400 absolute -z-10 particle-animation"></div>
  </div>
</template>

<style scoped>
.particle-animation {
  animation: particles 10s infinite ease;
}

@keyframes particles {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  50% {
    opacity: 1;
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0px);
    opacity: 0;
  }
}
</style>
