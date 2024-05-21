<template>
    <Homebutton></Homebutton>
    <Project1></Project1>

    <FooterMenu></FooterMenu>
</template>

<script>
import Homebutton from '../components/buttons/Homebutton.vue';
import Project1 from '../components/Project1.vue';
import FooterMenu from '../components/navigation/FooterMenu.vue';

export default {
    components: { Project1, Homebutton, FooterMenu }
}
</script>

<style>

</style>

