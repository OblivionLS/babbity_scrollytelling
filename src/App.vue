<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/">Main</router-link>
    <router-link to="/inspiration">Mood</router-link>
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
:root {
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

#background {
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  background-color: black;
}

#nav {
  z-index: 5;
  padding: 30px;
}

#nav a {
  font-size: 1.5em;
  padding-left: 2%;
  position: relative;
  z-index: 50;
  /* font-weight: bold; */
  color: #e1bc29;
  transition: 0.2s all;
}

#nav a.router-link-exact-active {
  z-index: 5;
  font-size: 2em;
  color: #e1bc29;
}

h1 {
  position: absolute;
  z-index: 10;
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
  top: 30%;
  position:absolute;
  z-index: 5;
}
</style>
