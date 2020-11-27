<template>
 
  <div class="square">
  </div>
  <div class="circle">
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted: function(){
    gsap.from('.square', {duration:4, scale: 2}),
    gsap.to('.circle', {x: 500, duration: 3}),
    gsap.fromTo('.circle',{opacity:0 }, {opacity: 1 , x: 500 , duration: 2 }),
    gsap.fromTo('.square', {opacity:0, x:500}, { opacity:1, x: 1 , duration: 2 })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.square{
  background-color: blue;
  height: 5em;
  width: 5em;
}
.circle{
  background-color:red;
  height: 5em;
  width: 5em;
  border-radius: 100%
}
</style>
