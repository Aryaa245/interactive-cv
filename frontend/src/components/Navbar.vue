<template>
  <header :class="['fixed top-0 w-full z-50 transition-all duration-500', isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-white']">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Arya Bayu</div>
      <ul class="flex space-x-6">
        <li><a href="#profil" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>

        <li><a href="#pendidikan" class="text-gray-600 hover:text-blue-500 transform hover:-translate- y-0.5 transition-all duration-300">Pendidikan</a></li>

        <li><a href="#skill" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Skill</a></li>
        <li><a href="#proyek" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>
        <li><a href="#kontak" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
