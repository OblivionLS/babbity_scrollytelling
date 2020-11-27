<template>
  <h1>Inspiration</h1>
  <div id="background"></div>
  <div class="window">
  <iframe width="1600" height="900" src="https://miro.com/app/embed/o9J_ld1J6sg=/?pres=1&frameId=3074457352043663518" frameBorder="10" scrolling="no" allowFullScreen></iframe>
  </div>
  <h2>in case the miro board doesn't work for you</h2>
  <img src="../assets/moodboard1.png" alt="moodboard">
  <img src="../assets/moodboard2.png" alt="moodboard">
  <img src="../assets/moodboard3.png" alt="moodboard">
  <img src="../assets/moodboard4.png" alt="moodboard">
  <img src="../assets/moodboard5.png" alt="moodboard">

  
  <div class="box a"></div>
  <div class="box b"></div>
  <div class="box c"></div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default{
  mounted(){
     gsap.utils.toArray(".box").forEach((anim) => {
      gsap.from(anim, {
        scrollTrigger: {
          start: "bottom bottom",
          end: "top center",
          scrub: 1,
          trigger: anim,
          toggleActions: "restart pause resume reset",
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
  }
}

</script>

<style scoped>
h1{
    top:0px;
    position:absolute;
}
h2{
  margin-top: 10%;
  position:relative;
  color: var(--text);
}

img{
  height:50%;
  margin-right:2%;
  overflow:hidden;
  position:relative;
  z-index:4;
  margin-bottom: 3%;
}

.window {
  position: relative;
}
</style>