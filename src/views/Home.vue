<template>
  <img alt="Background" src="../assets/castle1.jpg" id="background" />

  <div class="hello">
    <h1>Babbitty Rabbitty and her Cackling Stump</h1>
  </div>
  <div class="content"></div>

<div class="scene1" style="z-index:2">
  <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang1" />
  <img src="../assets/Vorhang1.png" alt="Vorhang" class="vorhang vorhang2" />

    <div class="hills elements">
    <img src="../assets/hill.png" alt="Hill" class="hill hill1" />
    <div class="overlay" style="z-index: 7"></div>
    <img src="../assets/hill2.png" alt="Hill" class="hill hill2" />
    <div class="overlay" style="z-index: 9"></div>
  </div>

  <div class="character elements">
    <img src="../assets/koenig.png" alt="koenig" class="koenig" />
  </div>

  <div class="schloss elements">
    <div class="overlay" style="z-index: 40"></div>
    <img src="../assets/Castle_shading.png" alt="castle" class="castle" />
  </div>

  <div class="front elements">
    <img src="../assets/garden_shaded.png" alt="garden" class="garden" />
    <div class="overlay" style="z-index: 900"></div>
  </div>
</div>
<div class="scene2">
  <div class="hills elements">
  <img src="../assets/dorf.png" alt="Village" class="village"></div>
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

export default {
  mounted: function () {
    //=========================================================
    //Vorhang Animation
    //=========================================================
    gsap.to(".vorhang1", {
      scrollTrigger: {
        start: "top top",
        end: "+=500",
        pin: true,
        trigger: ".vorhang1",
        scrub: 1,
      },
      xPercent: 100,
    });

    gsap.to(".vorhang2", {
      scrollTrigger: {
        start: "top top",
        end: "+=500",
        pin: true,
        trigger: ".vorhang2",
        scrub: 1,
      },
      xPercent: -100,
    });
    scrollAt += 500;

    gsap.to(".hill1", {
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".hill1",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
      opacity: 20,
      yPercent: -90,
      z: 10,
    });
    gsap.to(".hill2", {
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".hill2",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
      opacity: 20,
      yPercent: -90,
      z: 10,
    });
    scrollAt += 500;

    gsap.to(".castle", {
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".castle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
      scale:1,
      opacity: 1,
      yPercent: -100,
    });

    scrollAt += 500;

    gsap.fromTo(
      ".castle",
      {
        scale:1,
        yPercent: -100,
      },
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".castle",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },
        scale: 2.5,
        yPercent: "-170",
      }
    );

    //  scrollAt += 500;

    gsap.to(".garden", {
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".garden",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
      opacity: 1,
      yPercent: -90,
    });
    scrollAt += 500;

    //======================================================
    //King moving
    //=====================================================

    let tl = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".koenig",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    tl.fromTo(".koenig",{opacity:0, xPercent:0, rotate:0,}, {
      opacity:1,
      xPercent: -100,
      rotate: 5,
    })
      .to(".koenig", {
        xPercent: -120,
        rotate: -5,
      })
      .to(".koenig", {
        xPercent: -140,
        rotate: 5,
      })
      .to(".koenig", {
        xPercent: -160,
        rotate: -5,
      })
      .to(".koenig", {
        xPercent: -180,
        rotate: 5,
      })
      .to(".koenig", {
        xPercent: -200,
        rotate: -5,
      })
      .to(".koenig", {
        xPercent: -220,
        rotate: 5,
      })
      .to(".koenig", {
        xPercent: -240,
        rotate: -5,
      })
      .to(".koenig", {
        xPercent: -260,
        rotate: 5,
      })
      .to(".koenig", {
        xPercent: -280,
        rotate: 0,
      });
    scrollAt += 800;


//============================================================
//Fadeout Scene 1
//==========================================================
    gsap.fromTo(
      ".garden",
      {
        yPercent: -90,
      },
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=700",
          trigger: ".garden",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },
        opacity:0,
        yPercent: 100,
      }
    );
    gsap.fromTo(
      ".castle",
      { scale: 2.5, yPercent: "-170" },
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=700",
          trigger: ".castle",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },
        opacity:0,
        scale: 0.5,
        yPercent: "+100",
      }
    );
    gsap.fromTo(
      ".koenig",
      { xPercent: -280, rotate: 0 },
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=700",
          trigger: ".koenig",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },
        opacity:0,
        xPercent: 300,
        yPercent: -100,
        rotate: 360,
      }
    );

    scrollAt += 700;


//=============================================================================
// Fade In Scene 2
//=============================================================================
gsap.to(".village",{
  scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".koenig",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },
        opacity:1,
        yPercent: -100,
})


  },
};
</script>

<style scoped>
#title {
  top: 0px;
}

.overscreen {
  width: 100%;
  height: 100%;
  z-index: 9;
  position: absolute;
  top: 0px;
  left: 0px;
}

.vorhang {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 50;
  position: absolute;
}

.elements {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0px;
  bottom: 0px;
}

.hill {
  position: absolute;
  width: 100%;
  overflow: hidden;
  left: 0px;
}

.hill1 {
  height: 65%;
  z-index: 6;
  bottom: -60%;
}
.hill2 {
  height: 40%;
  z-index: 8;
  bottom: -40%;
}

.overlay {
  background-color: var(--overlay);
  height: 100%;
  width: 100%;
  position: absolute;
}

.character {
  z-index: 70 !important;
}
.koenig {
  opacity: 0;
  position: absolute;
  bottom: 5%;
  right: -20%;
  width: auto;
  height: 50%;
}

.castle {
  opacity: 0;
  left: 2%;
  position: absolute;
  height: 90%;
  width: auto;
  bottom: -90%;
  z-index: 8 !important;
}
.schloss {
  z-index: 21;
}

.garden {
  opacity: 0;
  position: absolute;
  right: 0px;
  bottom: -90%;
  width: 100%;
  height: 90%;
  overflow: hidden;
  z-index: 50;
}
.front {
  z-index: 50;
}

.village{
  opacity: 0;
  position: absolute;
  left:0px;
  top:100%;
  width:100%;
  height:auto;
}
</style>