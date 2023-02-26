<template>
    <div>
        <HeroSection/>
        <DownloadSection/>
        <CoursesChoose/>
        <FooterSection/>
    </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import CoursesChoose from '../components/CoursesChoose.vue';
import DownloadSection from '../components/DownloadSection.vue';
import FooterSection from '../components/FooterSection.vue';
import { onMounted } from 'vue';

onMounted(() =>{
  window.scrollTo(0, 0)
})

</script>

<style lang="scss" scoped>


</style>