<template>
    <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang1" />
    <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang2" />
    
    <div class="rope elements">
        <img src="../assets/scene_all/rope.png" alt="Rope" class="rope rope1" />
        <div class="overla<" style="z-index: 100"></div>
    </div>

<figure>
    <figcaption>
        Audio 000_Test
    </figcaption>
    <audio id="sound" controls="controls">
        
        <source src="../assets/audio/002_Rabbity_Stump.mp3" type="audio/mp3" />
    /**
    This did not work
    <source src="../assets/audio/000_Test.mp3" type="audio/mp3" />
    */
    <code>audio</code>
    element.
    </audio>    
</figure>

<p>Marcos page</p>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        scrub: true,
      },
      xPercent: 100,
    });

    gsap.to(".vorhang2", {
      scrollTrigger: {
        start: "top top",
        end: "+=500",
        pin: true,
        trigger: ".vorhang2",
        scrub: true,
      },
      xPercent: -100,
    });
    scrollAt += 500;

    
    gsap.to(".rope1", {
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".rope1",
        scrub: true,
        markers: true,
      },
      opacity: 20,
      yPercent: -190,
      z: 10,
    });
 },
};
</script>

<style scoped>


figure {
    margin: 0;
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

.rope {
  position: absolute;
  width: 100%;
  overflow: hidden;
  left: 0px;
}

.rope1 {
  height: 20%;
  z-index: 6;
  bottom: -20%;
}
</style>