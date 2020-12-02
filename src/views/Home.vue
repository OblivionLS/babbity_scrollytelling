<template>
  <img alt="Background" src="../assets/castle1.jpg" id="background" />
  <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang1" />
  <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang2" />

  <div class="hello">
    <h1>Babbitty Rabbitty and her Cackling Stump</h1>
  </div>
  <div class="content">
    <p>Hier steht der Content</p>
  </div>
  
  <div class="hills elements">
    <img src="../assets/hill.png" alt="Hill" class="hill hill1" />
    <div class="overlay" style="z-index:7"></div>
    <img src="../assets/hill2.png" alt="Hill" class="hill hill2" />
    <div class="overlay" style="z-index:9"></div>
  </div>

  <div class="character elements">
    <img src="../assets/koenig.png" alt="koenig" class="koenig">
  </div>

 
  <div class="schloss elements">
    <img src="../assets/Castle_shading.png" alt="castle" class="castle">
    <div class="overlay" style="z-index:40"></div>
  </div>

  <div class="front elements">
    <img src="../assets/garden4.png" alt="garden" class="garden">
    <div class="overlay" style="z-index:60"></div>
  </div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let screenWidth = window.innerWidth;
console.log(screenWidth);
let scrollAt;
scrollAt = 0;
console.log(scrollAt);

export default {
  mounted: function () {
    //=========================================================
    //Vorhang Animation
    //=========================================================
    gsap.to(".vorhang1", {
      scrollTrigger: {
        start: "top top",
        end: "+=500",
        pin: true,
        trigger: ".vorhang1",
        scrub: 1,
      },
      xPercent: 100,
    });

    gsap.to(".vorhang2", {
      scrollTrigger: {
        start: "top top",
        end: "+=500",
        pin: true,
        trigger: ".vorhang2",
        scrub: 1,
      },
      xPercent: -100,
    });
    scrollAt += 500;

    gsap.to(
      ".hill1",
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".hill1",
          scrub: 1,
          markers: true,
        },
        opacity:20,
        yPercent:-90,
        z:10,
      }
    );
    gsap.to(
      ".hill2",
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".hill2",
          scrub: 1,
          markers: true,
        },
        opacity:20,
        yPercent:-90,
        z:10,
      }
    );
    scrollAt += 500;

    gsap.to(
      ".castle",
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".castle",
          scrub: 1,
          markers: true,
        },
        opacity:20,
        yPercent:-120,
        z:10,
      }
    );
    gsap.to(
      ".garden",
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".garden",
          scrub: 1,
          markers: true,
        },
        opacity:20,
        yPercent:-170,
        z:10,
      }
    );
    scrollAt += 500;

gsap.to(
      ".koenig",
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".koenig",
          scrub: 1,
          markers: true,
        },
        opacity:20,
        yPercent:-210,
        z:10,
      }
    );
    scrollAt += 500;

    





  },
};
</script>

<style scoped>
#title {
  top: 0px;
}


.overscreen {
  width: 100%;
  height: 100%;
  z-index: 9;
  position: absolute;
  top: 0px;
  left: 0px;
}

.vorhang {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 50;
  position: absolute;
}

.elements {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0px;
  bottom: 0px;
}

.hills{
}

.hill {
  position: absolute;
  width: 100%;
  overflow: hidden;
  left: 0px;
}

.hill1{
  height: 65%;
  z-index: 6;
  bottom: -60%;
}
.hill2{
  height: 40%;
  z-index: 8;
  bottom: -40%;
}

.overlay {
  background-color: var(--overlay);
  height: 100%;
  width: 100%;
  position: absolute;
}



.character{
  z-index: 70 !important;
}
.koenig{
  position:absolute;
  bottom:-100%;
  right:20%;
  width:auto;
  height:50%;
}


.castle{
  right:0px;
  position:absolute;
  height:90%;
  width:auto;
  bottom:-100%;
  z-index: 8 !important;
}
.schloss{
  z-index: 21;
}

.garden{
  position:absolute;
  right:0px;
  bottom:-100%;
  width:100%;
  height:auto;
  z-index: 50;
}
.front{
  z-index: 50;
}

</style>