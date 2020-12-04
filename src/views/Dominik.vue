<template>

<div class="scene" id="scene1">
    <img src="../assets/koenig.png" class="koenig">
    <button v-on:click="this.scrollDown">Down</button>
</div>

<div class="scene" id="scene2">
    <button v-on:click="this.scrollUP">UP</button>
    <img src="../assets/babbity.png" class="babbity">
    <button v-on:click="this.scrollDown">Down</button>
</div>

<div class="scene" id="scene3">
    <button v-on:click="this.scrollUP">Up</button>
    <img src="../assets/koenig.png" class="koenig">
</div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);


var lastScene = 0;
var activeScene = 1;
var nextScene = 2;
document.get

export default {

    methods: {
        scrollUP: function(){
            console.log("gooo ue!!!")
            var elem = document.getElementById("scene" + lastScene);
            if(elem != null){
                gsap.to(window, {duration: 2, scrollTo:"#scene" + lastScene});
                nextScene = activeScene;
                activeScene = lastScene;
                lastScene = lastScene - 1;
            }else{
                console.log("start of the story");
            }
            
        },
        scrollDown: function(){
            console.log("Go Down");
            var elem = document.getElementById("scene" + nextScene);
            if(elem != null){
                gsap.to(window, {duration: 2, scrollTo:"#scene"+nextScene});
                lastScene = activeScene;
                activeScene = nextScene;
                nextScene = nextScene + 1;
            }else{
                console.log("End of the Story");
            }
            
            

            
            console.log(elem);

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
    opacity: 100%;
}

</style>