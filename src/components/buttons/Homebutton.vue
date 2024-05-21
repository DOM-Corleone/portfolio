<template>
    <router-link to="/"><a class="home_button"><ArrowLeftIcon class="arrows"/></a></router-link>
</template>

<script>
    import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

    export default {
        name: 'homebutton',
        components: { ArrowLeftIcon}
    } 
</script>

<style>
    .home_button{ 
        border-radius: 35px;
        position: fixed;
        height: 60px;
        width: 60px;
        margin: 50px;
        background-image: linear-gradient(#02594e, black);
    
        color: white;

        display: flex; /* or inline-flex */
        align-items: center; 
        justify-content: center;
    }

    .arrows {
        color: #FFFF;

        width: 30px;
        height: 30px;
    }

    @media only screen and (min-width: 290px) and (max-width: 390px) {
        .home_button{ 
        border-radius: 20px;
        position: fixed;
        height: 40px;
        width: 40px;
        margin: 40px;
        background-image: linear-gradient(#02594e, black);
    
        color: white;

        display: flex; /* or inline-flex */
        align-items: center; 
        justify-content: center;
    }

    .arrows {
        color: #FFFF;

        width: 20px;
        height: 20px;
    }
    }
</style>