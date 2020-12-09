<template>
<canvas id="progress" width="500" height="100"></canvas>
<audio id="audio" ontimeupdate="updateBar"
  src="../assets/audio/000_Test.mp3">
</audio>
<br>
<span id="current-time"></span> /
<span id="duration"></span>
<br>
<button id="audioControl" v-on:click="togglePlaying">Play</button>
</template>

<script defer>
var canvasWidth = 500;
var audioEl = document.getElementById("audio")
var canvas = document.getElementById("progress")
var ctrl = document.getElementById("audioControl")

audioEl.addEventListener('loadedmetadata', function() {
  var duration = audioEl.duration
  var currentTime = audioEl.currentTime
  document.getElementById("duration").innerHTML = this.convertElapsedTime(duration)
  document.getElementById("current-time").innerHTML = this.convertElapsedTime(currentTime)
  canvas.fillRect(0, 0, canvasWidth, 50);
});


export default {  
  methods:{

togglePlaying:function() {

  var play = ctrl.innerHTML === 'Play'
  var method

  if (play) {
    ctrl.innerHTML = 'Pause'
    method = 'play'
  } else {
    ctrl.innerHTML = 'Play'
    method = 'pause'
  }

  audioEl[method]()

},

convertElapsedTime: function(inputSeconds) {
  var seconds = Math.floor(inputSeconds % 60)
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  var minutes = Math.floor(inputSeconds / 60)
  return minutes + ":" + seconds
},

updateBar:function() {
  canvas.clearRect(0, 0, canvasWidth, 50)
  canvas.fillStyle = "#000";
  canvas.fillRect(0, 0, canvasWidth, 50)

  
  var currentTime = audioEl.currentTime
  var ElTime = this.convertElapsedTime(currentTime)
  var duration = audioEl.duration
  
  if (currentTime === duration) {
    ctrl.innerHTML = "Play"
  }
  
  document.getElementById("current-time").innerHTML = ElTime
  
  var percentage = currentTime / duration
  var progress = (canvasWidth * percentage)
  canvas.fillStyle = "#FF0000"
  canvas.fillRect(0, 0, progress, 50)
},
}
}


</script>

<style scoped>
* {
  text-align: center;
}
</style>