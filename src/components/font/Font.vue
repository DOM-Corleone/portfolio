<template>
  <div class="container_container">
    <section class="title_container">
          <h2 class="second_header">Frontendutvikler &</h2>
            <h2 class="second_header">Interaktiv designer</h2>
      </section>
    <div ref="container"  class="container"></div>
  </div>
</template>

<script>

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'

export default {
  name: 'font',
  mounted()
  {
    this.initScene();
  },
  methods: {
    initScene() {


//REFFERANSE TIL HTML
const container = this.$refs.container;

// HER SETTER MAN OPP SCENE, CAMERA OG RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, container.clientWidth / container.clientHeight, 0.5, 100);
camera.position.set(0, 0, 30);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

let tl = gsap.timeline()

//LOADER
const gltf = new GLTFLoader()
gltf.load('krøss.gltf', (gltf) => {

    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            const material = new THREE.MeshStandardMaterial({
                color: 0x02594E,
                roughness: 1,
                metalness: 0.1 
            });
            if (child.material.map) {
                material.map = child.material.map;
            }
            child.material = material;
        }
    });

  scene.add( gltf.scene );

gltf.scene.rotation.set(7.5, 6, 0)
gltf.scene.scale.set(0.060, 0.040, 0.080)

tl.to(gltf.scene.rotation, { y: 5.75, duration: 10, ease: "none" })
.to(gltf.scene.rotation, { y: 6.25, duration: 10, ease: "none", yoyo: true, repeat: -1 });

gltf.scene.position.x = 40;
gltf.scene.position.y = 10;

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(container.clientWidth, container.clientHeight)
container.appendChild(renderer.domElement);
window.addEventListener( 'resize', function (  )
{
  var width = container.clientWidth
  var height = container.clientHeight

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

let scaleFactor;
  if (width > 1024) {
    scaleFactor = 0.05;
    gltf.scene.position.x = 35;
    gltf.scene.position.y = 10;
  } else if (width > 768) {
    scaleFactor = 0.05;
    gltf.scene.position.x = 30;
    gltf.scene.position.y = 10;
  } else if (width > 468) {
    scaleFactor = 0.05;
    gltf.scene.position.x = 20;
    gltf.scene.position.y = 10;
  }

  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
  
})
})

let tl2 = gsap.timeline()

gltf.load('donut.gltf', (gltf) => {
  scene.add( gltf.scene );

  gltf.scene.rotation.set(6, 6.5, 2.2)
  gltf.scene.scale.set(0.5, 0.5, 0.5)

  tl2.to(gltf.scene.rotation, { y: 6.25, duration: 10, ease: "none" })
  .to(gltf.scene.rotation, { y: 6.75, duration: 10, ease: "none", yoyo: true, repeat: -1 });

  gltf.scene.position.x = -50;
  gltf.scene.position.y = -20;

  gltf.scene.traverse((child) => {
        if (child.isMesh) {
            const material = new THREE.MeshStandardMaterial({
                color: 0x02594E,
                roughness: 1,
                metalness: 0.1 
            });
            if (child.material.map) {
                material.map = child.material.map;
            }
            child.material = material;
        }
    });

    renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(container.clientWidth, container.clientHeight)
container.appendChild(renderer.domElement);
window.addEventListener( 'resize', function (  )
{
  var width = container.clientWidth
  var height = container.clientHeight

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

let scaleFactor;
  if (width > 1024) {
    scaleFactor = 0.5;
    gltf.scene.position.x = -50;
    gltf.scene.position.y = -20;
  } else if (width > 768) {
    scaleFactor = 0.5;
    gltf.scene.position.x = -40;
    gltf.scene.position.y = -20;
  } else if (width > 468) {
    scaleFactor = 0.5;
    gltf.scene.position.x = -30;
    gltf.scene.position.y = -20;
  }

  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
  
  })
})

let tl3 = gsap.timeline()

gltf.load('sylinder.gltf', (gltf) => {
  scene.add( gltf.scene );

  gltf.scene.rotation.set(0.3, 0, 0)
  gltf.scene.scale.set(0.3, 0.3, 0.3)

  tl3.to(gltf.scene.rotation, { y: -0.05, duration: 10, ease: "none" })
  .to(gltf.scene.rotation, { y: 0.55, duration: 10, ease: "none", yoyo: true, repeat: -1 });

  gltf.scene.position.x = 10;
  gltf.scene.position.y = -70;

  gltf.scene.traverse((child) => {
        if (child.isMesh) {
            const material = new THREE.MeshStandardMaterial({
                color: 0x02594E,
                roughness: 1,
                metalness: 0.1 
            });
            if (child.material.map) {
                material.map = child.material.map;
            }
            child.material = material;
        }
    });



})

let tl4 = gsap.timeline()

gltf.load('second.gltf', (gltf) => {
  scene.add( gltf.scene );

  gltf.scene.rotation.set(0.1, 0, 0.2)
  gltf.scene.scale.set(0.1, 0.1, 0.1)

  tl4.to(gltf.scene.rotation, { y: -0.85, duration: 10, ease: "none" })
  .to(gltf.scene.rotation, { y: 0.325, duration: 10, ease: "none", yoyo: true, repeat: -1 });

  gltf.scene.position.x = -30;
  gltf.scene.position.y = 15;

  gltf.scene.traverse((child) => {
        if (child.isMesh) {
            const material = new THREE.MeshStandardMaterial({
                color: 0x02594E,
                roughness: 1,
                metalness: 0.1 
            });
            if (child.material.map) {
                material.map = child.material.map;
            }
            child.material = material;
        }
    });

})
// SLUTT PÅ LOAD FUNCTION


const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

const dirLight = new THREE.DirectionalLight( 0xefefff, 3 );
dirLight.position.set( 0, 5, 5 );
scene.add( dirLight );

//ANIMERER
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();

// camera.position.z = 50;

    }
  }
}

</script>

<style>

.container_container {
  position: relative;
  height: 100vh;
  width: 100vw;
	
}

.container {
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.title_container {
  
  /* position the div in center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

@keyframes boxAnimation {
0% {
  transform: translateY(70%);
  opacity: 0;
}
100% {
  transform: translateY(0%);
  opacity: 1;
}
}

.second_header {
margin: 0;
justify-content: center;

color: #02594E;

font-size: 70px;
font-family: 'POIAeronautTrial-Regular' ;
font-feature-settings: "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss12" 1, "ss01" 1, "ss03" 1, "ss04" 1, "ss05" 1, "ss08" 1, "ss10" 1, "ss11" 1;


letter-spacing: 1px;
}

/* MEDIA QUERYS */

@media only screen and (min-width: 290px) and (max-width: 390px) {

  .container_container {
    width: 100%;
    height: 100%;
  }

  .title_container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    width: 100%;
    height: 80%;
  }

  .second_header {
  margin: 0;
  justify-content: center;
  font-family: 'POIAeronautTrial-Regular' ;
  font-feature-settings: "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss12" 1, "ss01" 1, "ss03" 1, "ss04" 1, "ss05" 1, "ss08" 1, "ss10" 1, "ss11" 1;

  letter-spacing: 1px;

  font-size: 30px;
  }
}

@media only screen and (min-width: 390px) and (max-width: 540px) {
  .second_header {
  font-size: 40px;
  text-align: center;
  }
}

@media only screen and (min-width: 540px) and (max-width: 820px) {

}

@media only screen and (min-width: 820px) and (max-width: 920px) {

}

</style>

