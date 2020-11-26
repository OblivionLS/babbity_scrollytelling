<template>
  <img alt="Background" src="./assets/castle1.jpg" id="background">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
:root{
  --text: rgb(245, 245, 245);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#background{
  height:100%;
  position: absolute;
  top:0px;
  left:0px;
  z-index: 0;
}
</style>
