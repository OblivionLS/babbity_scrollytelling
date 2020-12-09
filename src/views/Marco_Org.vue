<template>    
    <div class="rope elements">
        <img src="../assets/scene_all/rope.png" alt="Rope" class="rope rope1" />
        <div class="overla<" style="z-index: -6"></div>
    </div>

<figure>
    <figcaption>
        Audio 000_Test
    </figcaption>
</figure>
<div class="button">
    <button id="paly" v-on:click="scrollDown">Play</button>
    <button id="pause" v-on:click="scrollDown">Pause</button>
</div>
<audio id="testAudio">
    <source src="../assets/audio/100_full_audio.mp3" type="audio/mpeg" @timeupdate="time = $event.target.currentTime" :current-time.prop="time">
</audio>
<p>Marcos page</p>



<h2>Time Bar</h2>
<progress id="seekbar" value="0" max="1" style="width:400px"></progress>



</template>

<script defer>
var snd;
var sndPlaying = false;
//var audioEl;
//var canvas;
//var ctrl;


export default {

  methods: {
    scrollDown: function () {
    
    snd =  document.getElementById("testAudio");
     if (sndPlaying) {
      snd.pause();
      sndPlaying = false;
      } else {
      snd.play();
      sndPlaying = true;
      }
    },
  },
}

</script>

<style scoped>


.figure {
    margin: 0;
}

.vorhang {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 50;
  position: absolute;
}

.rope {
  position: center;
  width: 100%;
  overflow: hidden;
  left: 0px;
}

.rope1 {
  height: 20%;
  z-index: -6;
  bottom: -20%;
}

body {
  background-color: #333;
  color: white;
}

#container {
  background-color: black;
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
}

#creature {
  background: url(https://www.greensock.com/_img/codepen/bezierCreature/creature_red.png);
  width: 27px;
  height: 29px;
  left: 87px;
  top: 87px;
  position: absolute;
}

button {
  padding: 10px;
  margin: 0 10px 10px 0;
}

h2 {
  font-family: sans-serif;
  font-weight: normal;
}
</style>
