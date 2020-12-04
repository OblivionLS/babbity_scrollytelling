<template>
   <h1 class="header-section">Scroll to construct a shoe</h1>

<section class="shoe">
  <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da29b46cb1403688b139_outsole.png" class="outsole piece" alt="outsole">
  <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84d9ecb32e46bc5f1f8a8a_component.png?" class="heel piece" alt="heel">
  <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da293b7f75e5a42bcacd_midsole.png?" class="midsole piece" alt="midsole">
</section>

<h1 class="header-section">Cool, right?</h1>




<header>
   <a href="https://greensock.com/scrolltrigger">
     <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
  </a> 
</header>
<p>Marcos page</p>
</template>

<script>
import { gsap } from "gsap";

gsap.timeline({
  scrollTrigger: {
    trigger: ".shoe",
    start: "center center",
    end: "bottom top",
    scrub: true,
    pin: true
  }
})
  .from(".midsole",  { y: innerHeight * 1.5 })
  .from(".outsole", { y: innerHeight * 1.5 });
</script>

<style scoped>
body { 
  background-color: #a62e91;
  color: white;
}


.shoe {
  position: relative;
  padding: 20px;
}
.piece:not(.outsole) {
  position: absolute;
  bottom: 7vw;
}
.midsole {
  width: 89%;
  left: 5%;
}
.heel {
  width: 41.8013857%;
  left: 6%;
}
.outsole {
  width: 100%;
  position: relative;
}

h1, h2, p, li {
  max-width: none;
}
</style>