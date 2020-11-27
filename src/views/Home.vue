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
  <div class="hills">
    <img src="../assets/hill.png" alt="Hill" class="hill hill1" />
    <div class="overlay"></div>
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

    gsap.fromTo(
      "hill1",
      {
        yPercent: -100,
        opacity: 50,
      },
      {
        scrollTrigger: {
          start: "top bottom",
          end: "+=100",
          trigger: ".hill",
          scrub: 1,
          pin: true,
        },
        opacity:100,
        yPercent:0,
      }
    );
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
  z-index: 9;
  position: absolute;
}

.hills {
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 6;
  position: fixed;
  left: 0px;
  bottom: 0px;
}

.hill {
  position: absolute;
  height: 50%;
  width: 100%;
  overflow: hidden;
  left: 0px;
  bottom: 0px;
  z-index: 6;
}

.overlay {
  background-color: var(--overlay);
  height: 100%;
  width: 100%;
  z-index: 7;
  position: absolute;
}
</style>