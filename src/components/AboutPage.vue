<template>
  <section class="container_landing" ref="sectionLanding">
  <article class="article_landing" v-if="visible">

      <div class="aboutBox_1">
        <h1 class="text_header">
          Litt om meg som utvikler
        </h1>
        <p class="text">
          Jeg er en nyutdannet interaktivdesigner, der jeg fokuserte på både softwareutvikling og design. Jeg har jobbet mye med koding både i egne prosjekter og på større skoleoppgaver, inkludert bachelorprosjekter. Jeg er dyktig i JavaScript og bruker VUE3 som rammeverk, og jeg er også kjent med React. Jeg er godt kjent med diverse biblioteker for frontendutvikling som Bootstrap, 3js og Chart.js. Jeg har også god erfaring med Java og C#. Akuratt nå lærer jeg meg TypeScript.
        </p> 
        <div class="icon_about_container">
        <font-awesome-icon icon="fa-brands fa-js" class="icon_about"/>
        <font-awesome-icon icon="fa-brands fa-vuejs" class="icon_about"/>
        <font-awesome-icon icon="fa-brands fa-css3-alt" class="icon_about"/>
        <font-awesome-icon icon="fa-brands fa-react" class="icon_about" />
        </div>
      </div>

      <div class="aboutBox_2">
      <h1 class="text_header">
        Litt om meg som designer
      </h1> 
      <p class="text">
        Jeg er utdannet Interaksjonsdesigner med spesialisering innen UX/UI-design. Jeg bruker verktøy som Figma, InDesign, InVision og Relume for å utvikle brukersentrerte løsninger. Min tilnærming til design handler om å sette brukeren i sentrum, forstå deres behov, atferd og mål gjennom grundig forskning og testing. Dette sikrer at løsningene jeg skaper ikke bare er estetisk tiltalende, men også funksjonelle og intuitive.
      </p>
        <div class="icon_about_container">
        <font-awesome-icon icon="fa-brands fa-figma" class="icon_about"/>
        <font-awesome-icon icon="fa-brands fa-invision" class="icon_about"/>
        </div>
      </div>
  </article>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const sectionLanding = ref(null)
const visible = ref(false);

const options = {
  threshold: 0
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(sectionLanding.value);
});

const handleIntersection = (entries) => { 
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      visible.value = true;
      console.log(entry)
    }
  });
};

</script>

<style scoped>
.container_landing{
  height: 100.25vh;
  width: 100vw;
  background-color: #02594E;

}

.article_landing {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100%;
  animation: 1.5s boxAnimation;
}

.aboutBox_1, .aboutBox_2 {
  border-top: 5px solid;
  
  margin: 2em;

  width: 500px;
  height: 500px;

  margin: 3em;

  color: #FFFFFF;

  font-size: 1.5em;
  font-family: 'POIPerianthTrial-Regular', serif;
}

.text {
    min-height: 350px;
    font-family: "Cardo", serif;
    letter-spacing: 1px;
    font-size: 20px;

    font-family: "DM Sans", sans-serif;
    
}

.icon_about_container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}

.icon_about {
  width: 25px;
  height: 25px;

  margin: 0.25em;
}


/* ANIMATION BOXES */

@keyframes boxAnimation {
0% {
  transform: translateY(15%);
  opacity: 0;
}
100% {
  transform: translateY(0%);
  opacity: 1;
}
}

/* MEDIAQUERYS FOR SMALLER DISPLAY */

@media only screen and (min-width: 290px) and (max-width: 390px) {
  .container_landing {
    background-color: #02594e;
  }

  .article_landing {
    overflow-x: auto;
    justify-content: flex-start;
    align-content: center;

  }

  .aboutBox_1, .aboutBox_2 {
  border-top: 5px solid #FFFF;
  margin: 1em;
  
  min-width: 325px;
  height: 600px;
  
  }

  .text {
    min-height: 400px;
    font-family: "Cardo", serif;
    letter-spacing: 1px;
    
    font-size: 1rem;
    line-height: 1.5;
}
}

@media only screen and (min-width: 390px) and (max-width: 540px) {

  .container_landing {
    background-color: #02594e;
  }

  .article_landing {
    overflow-x: auto;
    justify-content: flex-start;
    align-content: center;
  }

  .aboutBox_1, .aboutBox_2 {
  border-top: 5px solid #FFFF;
  margin: 1em;
  
  min-width: 325px;
  height: 600px;
  
  }

  .text {
    min-height: 400px;
    font-family: "Cardo", serif;
    letter-spacing: 1px;
    
    font-size: 1rem;
    line-height: 1.5;
}

}

@media only screen and (min-width: 540px) and (max-width: 820px) {

  .container_landing {
    background-color: #02594e;
  }

  .article_landing {
    overflow-x: auto;
    justify-content: flex-start;
    align-content: center;

  }

  .aboutBox_1, .aboutBox_2 {
  border-top: 5px solid #FFFF;
  margin: 1em;
  
  min-width: 325px;
  height: 600px;
  
  }

  .text {
    min-height: 400px;
    font-family: "Cardo", serif;
    letter-spacing: 1px;
    
    font-size: 1rem;
    line-height: 1.5;
}
}

@media only screen and (min-width: 820px) and (max-width: 920px) {

  .container_landing {
    background-color: #02594e;
  }

  .article_landing {
    overflow-x: auto;
    justify-content: flex-start;
    align-content: center;

  }

  .aboutBox_1, .aboutBox_2 {
  border-top: 5px solid #FFFF;
  margin: 1em;
  
  min-width: 325px;
  height: 600px;
  
  }

  .text {
    min-height: 400px;
    font-family: "Cardo", serif;
    letter-spacing: 1px;
    
    font-size: 1rem;
    line-height: 1.5;
}
}

/* MEDIAQUERYS FOR ROTATED */

@media (orientation: landscape) and (max-width: 1000px) {
  /* Add styles specific to landscape orientation and max-width 440px */
  .container_landing {
    grid-template-columns: repeat(2, 1fr);
  }
}

.aboutBox_container {
    display: flex;
    justify-content: center;
    width: 80%;
  }

@media (orientation: landscape) and (max-width: 1000px) {
  .section_project {
    justify-content: space-evenly;
  }
}

</style>
