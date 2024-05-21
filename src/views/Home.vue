<template>
    <div id="scroll-container">
    <TopNavBar></TopNavBar>
    <LandingPage class="snap"/>
    <AboutPage class="snap" id="about"/>
    <ProjectPage class="snap" id="projects" />
    <FooterMenu class="snap"/>
    </div>
</template>

<script>
import TopNavBar from '../components/navigation/TopNavBar.vue';
import LandingPage from '../components/LandingPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProjectPage from '../components/ProjectPage.vue';
import FooterMenu from '../components/navigation/FooterMenu.vue';

export default {
  components: {
    TopNavBar,
    ProjectPage,
    LandingPage,
    AboutPage,
    FooterMenu,
  }
}
</script>

<style>

#scroll-container{
    height: 100vh;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

.snap{
  scroll-snap-align: start;
}


</style>