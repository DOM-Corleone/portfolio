<template>
    <section class="container_cv">
    <article class="article_cv"></article>
    <section class="banner_wrapper">
    <div class="banner_cv">
      <article class="articles article_1">
      <h1>Spond</h1>
      <p>Kundeservice</p>
      <p>2018 - 2020</p>
      </article>

        <ArrowRightIcon class="arrows" />
      
      <article class="articles article_2">
      <h1>Villa Paradiso</h1>
      <p>Servitør</p>
      <p>2022 - 2023</p>
      </article>

        <ArrowRightIcon class="arrows" />
      
      <article class="articles article_3">
      <h1>InXight</h1>
      <p>UX-Designer & Utvikler</p>
      <p>2023 - 2023</p>
      </article>
      
    </div>
    </section>
  </section>
  </template>
  
  <script>
  import { ArrowRightIcon } from "@heroicons/vue/24/outline";

  export default {
    name: 'cv_page',
    components: { ArrowRightIcon}
  }
  </script>
  
  <style scoped>
.container_cv {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: normal;
  align-content: stretch;

  height: 100vh;
  background-color: #D9D9D9;
}

.article_cv {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.banner_wrapper {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.banner_cv {
  background-color: black;
  height: 30vh;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
}


.arrows{
  height: 7vh;
  width: 7vh;

  color: white;
}

.articles {
  color: white; 
}

.articles h1,
.articles p {
  margin: 0;
  text-align: center;
}

</style>