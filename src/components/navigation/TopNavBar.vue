<template>
    <section class="top_nav_bar">
        <ul class="top_nav_bar_container">
          <li class="projects_button" @click="scrollTo('#projects')">
              <a class="link_top">Prosjekter</a>
            </li>
            <li class="projects_button" @click="scrollTo('#about')">
              <a class="link_top">Om meg</a>
            </li>
          <!-- Endre klassenavn -->
            <li class="about_page"><a class="link_top" href="https://www.linkedin.com/in/benjamin-ulvevadet-a41bb8275/" target="_blank">
              <font-awesome-icon class="iconsTop" icon="fa-brands fa-linkedin-in" />
            </a>
            </li>
          <!-- Endre klassenavn -->
            <li class="projects_page"><a class="link_top" href="" target="_blank">
              <font-awesome-icon class="iconsTop" icon="fa-brands fa-github" />
            </a>
            </li>
            <li class="link_top">
              <Button></Button>
            </li>
        </ul>
    </section>

    <a href="#" class="hamburger_menu" @click="toggleMenu">
      <font-awesome-icon icon="fa-solid fa-bars" class="hamburger_icon" />
    </a>

    <div class="phone_menu_container" :class="{ 'active': isMenuOpen }">
      <span class="phone_menu_span">
        <ul class="phone_menu">
          <li class="menu_item" ><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon_list"/>LinkedIn</a></li>
          <li class="menu_item"><a href="#"><font-awesome-icon icon="fa-brands fa-github" class="icon_list"/>GitHub</a></li>
        </ul>
        <Button></Button>
      </span>
    </div>

</template>

<script>
import Button from '../buttons/Button.vue'

export default {
    name: 'nav_bar',
    components: {
      Button
    },
    data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
  }
}
}
</script>

<style>

/* DESKTOP LANDING */

.top_nav_bar {
  width: 100%;

  position: relative;
  z-index: 100;

  font-family: "DM Sans", sans-serif;
}

.top_nav_bar_container {
  width: 95%;
  height: 8vh;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  align-items: center;
  align-content: stretch;

  position: absolute;
}

.about_page, .projects_page, .link_top, .projects_button {

  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;

  text-decoration: none;
  list-style: none;
  color: black;

  cursor: pointer;
  
  font-size: 24px;
  margin-left: 1.5vw;

  box-shadow: inset 0 0 0 0 #F2FF00;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

.iconsTop {
  color: rgba(0, 0, 0, 0.40);
}

/* DESKTOP LANDING */

.hamburger_menu {
  margin: 2.5%;
  display: none;

  background-color: white;

  width: 40px;
  height: 40px;

  border-radius: 30px;
}

.hamburger_icon {
  margin: auto;
  width: 50%;
  padding: 10px;

  height: 20px;
}

.phone_menu_container {
  display: none;
}

/*  MEDIA's  */

@media (max-width: 1024px) {
    .top_nav_bar {
      display: none;
    }

    .hamburger_menu {
      z-index: 150;
      position: absolute;
      display: block;
      color: black;
    }

    .phone_menu_container.active {
      display: block;

      position: absolute;
      z-index: 100;

      background-color: white;

      width: 100%;
      height: 100vh;
    }

    .phone_menu_span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      height: 100vh;
    }

    .phone_menu {
      padding: 0;
      list-style-type: none;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      width: 100%;
      height: 40vh;
    }

    .menu_item a {
      margin-left: 0;
      font-size: 3vh;
      color: black;
      text-decoration: none;

      font-family: "DM Sans", sans-serif;

    }

    .phone_button_container {
      margin-top: 5vh;
    }

    .btn_contact {
      height: 10vh;
      width: 55vw;

      font-size: 2.5vh;
    }

    .icon_list {
      margin-right: 2vw;
      color: black;
    }
    
}
</style>