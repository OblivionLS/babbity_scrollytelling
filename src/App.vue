<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
  </div>
  <router-view />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
body{
  overflow: hidden;
}
:root {
  --text: rgb(245, 245, 245);
  --overlay: rgba(118, 160, 196, 0.151);

  --invisible: rgba(30, 0, 255, 0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#background {
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  background-color: black;
  filter: blur(8px);
}

#nav {
  font-family: "Brush Script MT";
  font-weight: normal;
  font-size: 1.5em;
  top:0px;
  z-index: 5;
  padding: 0px 30px 30px 30px;
}

#nav a {
  text-decoration: none;
  text-align: center;
  font-size: 1.5em;
  padding-right: 2%;
  position: relative;
  z-index: 100;
  color: #e1bc29;
  transition: 0.2s all;
}

#nav a.router-link-exact-active {
  z-index: 100;
  font-weight:bold;
  font-size: 2em;
  color: #e1bc29;
  font-weight: bold;
}

h1 {
  font-family: "Brush Script MT";
  font-size: 3.5em;
  font-weight: normal;
  padding-bottom: 2%;
  position: absolute;
  z-index: 90;
  color:var(--text);
  text-align: center;
  width:100%;
  top:20%;
  position:absolute;
}

p{
  color:var(--text);
  text-align: center;
  width:100%;
  top: 35%;
  position:absolute;
  z-index: 90;
}
</style>
