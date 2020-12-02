<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/">Main</router-link>
    <router-link to="/inspiration">Mood</router-link>
    <router-link to="/dominik">Dominik</router-link>
    <router-link to="/marco">Marco</router-link>
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
  --overlay: rgba(118, 160, 196, 0.151);
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
  z-index: 50;
  font-size: 2em;
  color: #e1bc29;
  font-weight: bold;
}

h1 {
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
  top: 30%;
  position:absolute;
  z-index: 90;
}
</style>
