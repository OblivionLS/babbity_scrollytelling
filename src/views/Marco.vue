<template>    
    <div class="rope elements">
        <img src="../assets/scene_all/rope.png" alt="Rope" class="rope rope1" />
        <div class="overla<" style="z-index: -6"></div>
    </div>

<figure>
    <figcaption>
        Audio 000_Test
    </figcaption>
    <audio id="sound" controls="controls">
        <source src="../assets/audio/100_full_audio.mp3" type="audio/mp3" />
    <code>audio</code>
    </audio>
</figure>

<p>Marcos page</p>


<h2>Tween timeScale</h2>
<button id="play">Play</button>
<button id="pause">Pause</button>
<div id="container">
  <div id="creature"></div>
</div>

</template>

<script>

import { gsap } from "gsap";
import { TweenLite } from "gsap/TweenLite";

var rotateCD,
    pauseTween,
    playBtn  = document.getElementById("play"),
    pauseBtn = document.getElementById("pause"),
    audio    = document.createElement("audio");

audio.loop = true;
audio.src  = "https://upload.wikimedia.org/wikipedia/en/d/d8/You_Spin_Me_Round_by_Dead_or_Alive.ogg";

rotateCD = new TweenMax("#creature", 0.3, {
  rotation: 360,
  ease: Linear.easeNone,
  repeat: -1,
  paused: true
})
.timeScale(0);

play.onclick = function() {
  rotateCD.play();
  TweenLite.to(rotateCD, 3, { timeScale: 1 });

  pauseTween && pauseTween.kill();
  if (audio.paused) TweenLite.set(audio, { volume: 0, playbackRate: 0.5 });
  TweenLite.to(audio, 3, { volume: 1, playbackRate: 1 });
  audio.play();
};

pause.onclick = function() {
  TweenLite.to(rotateCD, 3, { timeScale: 0, onComplete: function() { this.pause(); }});

  pauseTween && pauseTween.kill();
  pauseTween = TweenLite.to(audio, 3, {
    volume: 0,
    playbackRate: 0.5,
    onComplete: audio.pause,
    callbackScope: audio
  });
};



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
