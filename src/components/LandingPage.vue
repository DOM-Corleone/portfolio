<template>
  <section class="container_landing">
      <Font></Font>
</section>
</template>

<script>
import Font from './font/Font.vue'

export default {
  name: 'landing_page',
  components: {
    Font,
  }
}
</script>

<style scoped>
.container_landing {
  height: 100.25vh;
  width: 100vw;
  background-color: #D9D9D9;
}

.article_landing {
  margin: 20%;
  width: 115vh;
}

.article_landing h3 {
  margin: 0;
  font-size: 4vh;

  color: #04090F;
} 

.article_landing h1 {
  margin: 0;

  font-size: 8vw;
  letter-spacing: 0.2vw;

  background: linear-gradient(269deg, #F2FF00 -2.37%, #04090F 79.05%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.image_landing {
  width: 100%;
  height: 100%;
}




@media (max-width: 440px) {
    
  .article_landing h3 {
  margin: 0;
  font-size: 2vh;

  color: #04090F;
} 

.article_landing h1 {
  margin: 0;

  font-size: 8vw;
  letter-spacing: 0.2vw;

  background: linear-gradient(269deg, #F2FF00 -2.37%, #04090F 90.05%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} 

}

</style>
