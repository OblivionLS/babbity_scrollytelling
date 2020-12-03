<template>

<div class="scene" id="scene1">
    <img src="../assets/koenig.png" class="koenig">
    <button v-on:click="this.scrollDown">Down</button>
</div>

<div class="scene" id="scene2">
    <img src="../assets/babbity.png" class="babbity">
    <button v-on:click="scrollDown">Down</button>
</div>

<div class="scene" id="scene3">
    <button v-on:click="scrollDown">Down</button>
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

var lastScene = 0;
var activeScene = 1;
var nextScene = 2;

export default {

    methods: {
        scrollUP: function(){
            console.log("gooo ue!!!")
            console.log(lastScene);
        },
        scrollDown: function(){
            console.log("Es Got abe");
            lastScene = activeScene;
            var elem = document.getElementById("scene" + nextScene);
            elem.scrollIntoView({
                behavior: "smooth"
            });
            activeScene = nextScene;
            nextScene = nextScene + 1;
        }
    }

}

</script>

<style>
.scene{
    display: block;
}

#scene1{
    opacity: 100%;
}

#scene2{
    opacity: 100%;
}

#scene3{
    opacity: 0%;
}

</style>