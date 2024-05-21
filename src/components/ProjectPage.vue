<template>
  <section class="section_project_container">
    <section class="section_project">

      <a>
        <router-link to="/project_1" class="projects_anchor">
        <div class="projects_card card1">
          <h1>1.</h1>
        </div>
        </router-link>
      </a>
      <a>
        <router-link to="/project_2" class="projects_anchor">
        <div class="projects_card card2">
          <h1>2.</h1>
        </div>
        </router-link>
      </a>
      <a>
        <router-link to="/project_3" class="projects_anchor">
        <div class="projects_card card3">
          <h1>3.</h1>
        </div>
      </router-link>
      </a>
    </section>
  </section>

</template>
  
  <script>
  
  export default {
    name: 'project_page',
  }

  </script>
  
  <style scoped>

  .section_project {
    background-color: #d9d9d9;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100.25vh;
    margin: 0;
    overflow-x: auto; 
  }

  .projects_anchor {
    text-decoration: none;
    color: #FFFF;
  }

  .projects_card {
    width: 400px;
    height: 550px; 
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    transform-origin: center;
    transform: scale(1) translateZ(0);
    transition: 
      filter 200ms linear,
      transform 200ms linear;
  }

  .projects_anchor:hover .projects_card{
  transform: scale(1.05) translateZ(0);
  }

  .card3 {
    background-image: url("../assets/images/Picture1.png");
    background-size: cover;
  }

  .card2 {
    background-image: url("../assets/images/mockupSykkel.jpeg");
    background-size: cover;
  }

  .card1 {
    background-image: url("../assets/images/Picture2.png");
    background-size: cover;
  }

  @media (max-width: 440px) {
    .section_project {
    background-color: black;
    justify-content: flex-start; 
    height: 100vh;
    margin: 0;
    white-space: nowrap; 
  }

  .projects_anchor {
    text-decoration: none;
  }

  .projects_card {
    width: 250px; 
    height: 400px; 
  }
  }

  h1, p {
    font-family: "DM Sans", sans-serif;
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    .section_project {
      justify-content: center; 
      flex-wrap: nowrap;
    }

    .projects_card {
    width: 150px;
    height: 250px; 
    background-color: #D9D9D9;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    transform-origin: center;
    transform: scale(1) translateZ(0);
    transition: 
      filter 200ms linear,
      transform 200ms linear;
  }

  }

  h1 {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10%;

  font-size: 6vh;
  }

  p {
    font-size: 3vh;
  }
  
</style>
