<template>
  <section class="button_container">
    <a class="link_mail"  href="mailto:benjamin_ulvevadet@hotmail.com"><button class="button-19" role="button">Kontakt meg</button></a>
  </section>
</template>

<script>
export default {
    name: 'button',
}
</script>

<style>

.button-19 {
  appearance: button;
  background-color: #003b33; 
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  
  font-family: 'POIAeronautTrial-Regular' ;
  font-feature-settings: "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss12" 1, "ss01" 1, "ss03" 1, "ss04" 1, "ss05" 1, "ss08" 1, "ss10" 1, "ss11" 1;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  width: 200px;
  height: 50px;
  
  
}

.button-19:after {
  background-clip: padding-box;
  background-color: #02594e;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:main,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

.button-19:active {
  border-width: 4px 0 0;
  background: none;
}

.link_mail{
  all: unset;
}

</style>


