<template>
  <nav class="w-full bg-red-200 flex items-center justify-between py-2 px-8">
    <h1 class="text-2xl font-bold text-center py-2">VelvetLettr</h1>
    <ul class="ml-auto w-full max-w-xs flex justify-between">
      <li><router-link class="text-black hover:text-red-500 hover:cursor-pointer" to="/">Home</router-link></li>
      <li><router-link class="text-black hover:text-red-500 hover:cursor-pointer" to="/about">About</router-link></li>
      <li><router-link class="text-black hover:text-red-500 hover:cursor-pointer" to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>
