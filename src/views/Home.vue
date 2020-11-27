<template>
  <img alt="Background" src="../assets/castle1.jpg" id="background" />
  <h1 id="title">Home Page</h1>
    <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang1" />
    <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang2" />

  <div class="hello">
    <h1>Babbitty Rabbitty and her Cackling Stump</h1>
  </div>
  <div class="content">
    <p>Hier steht der Content</p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let screenWidth = window.innerWidth;
console.log(screenWidth);

export default {
  mounted: function () {
    gsap.to(".vorhang1", {
      scrollTrigger:{start:"top top",
      end: "+=500",
      pin:true,
      trigger:".vorhang1",
      markers: true,
        scrub: 1,
      },
      xPercent:100,
      

    });

    gsap.to(".vorhang2", {
      scrollTrigger:{start:"top top",
      end: "+=500",
      pin:true,
      trigger:".vorhang2",
      markers: true,
        scrub: 1,
      },
      xPercent:-100,
    });

   
  },
};
</script>

<style scoped>
#title {
  top: 0px;
}

.box {
  margin-top: 25em;
  margin-bottom: 5em;
  width: 5em;
  height: 5em;
  background-color: blue;
  position: relative;
  z-index: 10;
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
  position:absolute;
}
</style>