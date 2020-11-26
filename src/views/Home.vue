<template>
  <img alt="Background" src="../assets/castle1.jpg" id="background" />
  <h1>Home Page</h1>
  <div class="box a"></div>
  <div class="box b"></div>
  <div class="box c"></div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function () {
    gsap.utils.toArray(".box").forEach((anim) => {
      gsap.from(anim, {
        scrollTrigger: {
          start: "bottom bottom",
          end: "top center",
          scrub: 1,
          trigger: anim,
        },
        x: 400,
       // rotation: 360,
      });
    });

      gsap.to(".b", {
        scrollTrigger: {
          start: "bottom bottom",
          end: "top center",
          markers: true,
          scrub: 1,
          trigger: ".b",
         //  toggleActions:"restart pause resume reset",
        },
        rotation: 360,
      });
  },
};
</script>

<style scoped>
h1 {
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

</style>