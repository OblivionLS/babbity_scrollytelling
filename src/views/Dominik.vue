<template>
<p>Dominiks page</p>

<img src="../assets/babbity.png" class="babbity">
<img src="../assets/koenig.png" class="koenig">
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
    mounted: function(){
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
    }
}
</script>