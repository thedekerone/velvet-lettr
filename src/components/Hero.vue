<script setup>
import Button from './ui/Button.vue'
import Particles from './ui/Particles.vue'
</script>

<template>
  <div class="h-screen grid grid-cols-2 container mx-auto xl:px-16 px-4 items-center justify-between">
    <div class=" flex flex-col w-full  justify-center">
      <h2>
        <span class="font-bold text-secondary text-6xl lg:text-8xl">All-in-one</span>
        <span class="block lg:text-4xl text-xl text-secondary">Wedding Planning</span>
        <span class="block lg:text-5xl text-2xl text-primary-800 font-bold">Platform</span>
      </h2>

      <div>
        <p class="text-xl text-primary-200 mt-6 block">Create invitations, manage guests, and collect donations - all
          in one
          place
        </p>
      </div>

      <div class="mt-4">
        <Button text="Start Designing">
        </Button>
      </div>
    </div>
    <div class="w-full self-start">
      <img src="../assets/hero-image.png" class="block ml-auto" alt="Hero image letter design">
    </div>
  </div>
  <div>
    <Particles />
  </div>
</template>
