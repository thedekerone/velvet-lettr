<script setup>
defineProps(['text'])
</script>


<template>
  <button type="button" class="bg-primary-800 hover:bg-primary-900 text-white font-bold py-2 px-4 rounded-2xl">
    {{ text }}
  </button>
</template>
