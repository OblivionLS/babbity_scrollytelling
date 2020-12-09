<template>
  <img alt="Background" src="../assets/castle1.jpg" id="background" />

  <div class="hello">
    <h1>Babbitty Rabbitty and her Cackling Stump</h1>
    <p>Make sure you're sound is on to listen to the story</p>
  </div>
  <div class="content"></div>
  <div class="button">
    <button v-on:click="scrollDown" id="button" class="btn">Klick Me</button>
  </div>
  <audio id="audio_1">
    <source src="../assets/audio/111_Part_01.mp3" type="audio/mpeg" />
  </audio>

  <audio id="audio_2">
    <source src="../assets/audio/112_Part_02.mp3" type="audio/mpeg" />
  </audio>

  <audio id="audio_3">
    <source src="../assets/audio/113_Part_03.mp3" type="audio/mpeg" />
  </audio>

  <div class="scene1" style="z-index: 2" id="scene1">
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

    <div class="front elements">
      <div class="tree"></div>
    </div>

    <div class="elements wand">
      <div class="wand">
        <img src="../assets/break.png" alt="break effect" class="break" />
        <img src="../assets/twig.png" alt="wand" class="wandimg" />
      </div>
    </div>
  </div>

  <div class="scene2" id="scene2">
    <div class="elements">
      <img
        src="../assets/dorf.png"
        alt="Village"
        class="village"
        id="village"
      />
    </div>

    <div class="elements character" id="muggle">
      <img
        src="../assets/muggle.png"
        alt="Muggle"
        class="muggle"
        style="transform: scaleX(-1)"
      />
    </div>
  </div>
  <div class="scene3" id="scene3"></div>
  <div class="scene4" id="scene4" style="z-index: 90">
    <div class="elements character">
      <img src="../assets/muggle.png" alt="muggleRight" class="muggle2" />
    </div>
  </div>
  <div class="scene5"></div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let scrollAt;
scrollAt = 0;
let parts = [1, 3500, 5500, 8500];
let speed = [0, 10, 20, 10];
let index = 1;
let audioPlay = false;

//var lastScene = 0;
//var activeScene = 1;
var nextScene = 1;
//var pathAudio = "../assets/audio/";

export default {
  mounted: function () {
    //=========================================================
    //Button Animation
    //=========================================================
    for (let i = 1; i < parts.length; i++) {
      gsap.fromTo(
        ".btn",
        { yPercent: 0, opacity: 1 },
        {
          scrollTrigger: {
            start: parts[i],
            end: "+=500",
            trigger: ".btn",
            scrub: 1,
            markers: {
              startColor: "var(--invisible)",
              endColor: "var(--invisible)",
            },
          },

          yPercent: 100,
          opacity: 0,
        }
      );
      gsap.fromTo(
        ".btn",
        { yPercent: 100, opacity: 0 },
        {
          scrollTrigger: {
            start: parts[i] - 500,
            end: "+=500",
            trigger: ".btn",
            scrub: 1,
            markers: {
              startColor: "var(--invisible)",
              endColor: "var(--invisible)",
            },
          },

          yPercent: 0,
          opacity: 1,
        }
      );
    }

    //=========================================================
    //Vorhang Animation / Scene 1
    //=========================================================

    //Scene 1 -> foolish king that want's to be the only wizard

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

    //fist button animation.
    gsap.fromTo(
      ".btn",
      { yPercent: 0, opacity: 1 },
      {
        scrollTrigger: {
          start: 100,
          end: "+=500",
          trigger: ".btn",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },

        yPercent: 100,
        opacity: 0,
      }
    );

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
      scale: 1,
      opacity: 1,
      yPercent: -100,
    });

    scrollAt += 500;

    gsap.fromTo(
      ".castle",
      {
        scale: 1,
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

    tl.fromTo(
      ".koenig",
      { opacity: 0, xPercent: 0, rotate: 0 },
      {
        opacity: 1,
        xPercent: -100,
        rotate: 5,
      }
    )
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
    console.log(scrollAt);

    let tlk = gsap.timeline({
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

    tlk.fromTo(
      "koenig",
      {
        xPercent: -280,
        rotate: 0,
      },
      {
        xPercent: -280,
        yPercent: "-=1",
        rotate: 10,
      }
    );

    //King wiggle
    for (let i = 0; i <= 6; i++) {
      if (i <= 3) {
        tlk
          .to(".koenig", {
            xPercent: -280,
            yPercent: "-=1",
            rotate: 10,
          })
          .to(".koenig", {
            xPercent: -280,
            yPercent: "-=1",
            rotate: -10,
          });
      } else {
        tlk
          .to(".koenig", {
            xPercent: -280,
            yPercent: "+=1",
            rotate: 10,
          })
          .to(".koenig", {
            xPercent: -280,
            yPercent: "+=1",
            rotate: -10,
          });
      }
    }
    scrollAt += 700;

    //insert witch hunter army here

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
        opacity: 0,
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
        opacity: 0,
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
        opacity: 0,
        xPercent: 300,
        yPercent: -100,
        rotate: 360,
      }
    );

    scrollAt += 700;

    //=============================================================================
    // Fade In Scene 2
    //=============================================================================

    //Only one who dares to teach the king magic is the Muggle

    let tlVillage = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".village",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    //witch hunter army running through village?

    tlVillage
      .fromTo(
        ".village",
        {
          opacity: 0,
          yPercent: 0,
        },
        {
          opacity: 1,
          yPercent: -100,
        }
      )
      .to(".village", {
        opacity: 1,
        xPercent: 50,
      });
    scrollAt += 500;

    let tl1 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".muggle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    tl1.fromTo(
      ".muggle",
      { opacity: 0, xPercent: 0, rotate: 0, scale: 0.7 },
      {
        opacity: 1,
        xPercent: -100,
        yPercent: -5,
        rotate: 5,
        scale: 1,
      }
    );
    for (let i = 0; i < 6; i++) {
      tl1
        .to(".muggle", {
          xPercent: "-=20",
          yPercent: 5,
          rotate: -5,
        })
        .to(".muggle", {
          xPercent: "-=20",
          yPercent: -5,
          rotate: 5,
        });
    }
    //wiggle thing in the middle
    for (let i = 0; i <= 6; i++) {
      if (i <= 3) {
        tl1
          .to(".muggle", {
            xPercent: -280,
            yPercent: "-=4",
            rotate: 10,
          })
          .to(".muggle", {
            xPercent: -280,
            yPercent: "-=4",
            rotate: -10,
          });
      } else {
        tl1
          .to(".muggle", {
            xPercent: -280,
            yPercent: "+=4",
            rotate: 10,
          })
          .to(".muggle", {
            xPercent: -280,
            yPercent: "+=4",
            rotate: -10,
          });
      }
    }

    //leaving again
    for (let i = 0; i < 10; i++) {
      if (i <= 6) {
        tl1
          .to(".muggle", {
            xPercent: "-=20",
            yPercent: 5,
            rotate: -5,
          })
          .to(".muggle", {
            xPercent: "-=20",
            yPercent: -5,
            rotate: 5,
          });
      } else {
        tl1
          .to(".muggle", {
            xPercent: "-=20",
            yPercent: -5,
            rotate: 5,
            opacity: "-=0.2",
          })
          .to(".muggle", {
            xPercent: "-=20",
            yPercent: 5,
            rotate: -5,
            opacity: "-=0.2",
          });
      }
    }

    scrollAt += 800;

    //=============================================================================
    // Fade out Scene 2
    //=============================================================================

    let tlVillage2 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".village",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    tlVillage2.to(".village", {
      opacity: 0,
      yPercent: 0,
      xPercent: 0,
    });
    scrollAt += 500;
    //=============================================================================
    // Fade in Scene 3
    //=============================================================================

    //Muggle presents himself to the king and gets his gold etc.

    let tlCastle = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=1000",
        trigger: ".castle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });
    tlCastle.fromTo(
      ".castle",
      {
        opacity: 0,
        scale: 0.5,
        yPercent: 0,
      },
      {
        scale: 1,
        opacity: 1,
        yPercent: -100,
      }
    );
    tlCastle.to(".castle", {
      scale: 4,
      yPercent: "-= 100",
    });

    scrollAt += 500;

    //Auftritt König
    gsap.fromTo(
      "koenig",
      {
        opacity: 0,
        scale: 1,
        xPercent: 0,
        yPercent: 5,
        rotate: 360,
      },
      {
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
        opacity: 0,
        scale: 1,
        xPercent: -200,
        yPercent: 5,
        rotate: 0,
      }
    );
    scrollAt += 500;
    gsap.to(".koenig", {
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
      opacity: 1,
      scale: 1,
      xPercent: -200,
      yPercent: 5,
      rotate: 0,
    });
    scrollAt += 500;

    //Auftritt Muggle
    gsap.to(".muggle", {
      scrollTrigger: {
        start: scrollAt - 500,
        end: "+=500",
        trigger: ".muggle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
      opacity: 0,
      xPercent: -100,
      yPercent: -5,
      rotate: 0,
    });
    gsap.fromTo(
      ".muggle",
      {
        opacity: 0,
        xPercent: -100,
        yPercent: 0,
        rotate: 0,
      },
      {
        scrollTrigger: {
          start: scrollAt,
          end: "+=500",
          trigger: ".muggle",
          scrub: 1,
          markers: {
            startColor: "var(--invisible)",
            endColor: "var(--invisible)",
          },
        },
        opacity: 0,
        xPercent: -100,
        yPercent: 0,
        rotate: 0,
        scale: 0.7,
      }
    );
    scrollAt += 500;

    let tl3 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".muggle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });
    tl3.fromTo(
      ".muggle",
      {
        opacity: 0,
        xPercent: -100,
        yPercent: 0,
        rotate: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        xPercent: -100,
        yPercent: 0,
        rotate: 0,
        scale: 0.7,
      }
    );

    for (let i = 0; i < 6; i++) {
      tl3.to(".muggle", {
        opacity: 1,
        xPercent: "-=5",
        yPercent: 0,
        rotate: 5,
        scale: 0.7,
      });
      tl3.to(".muggle", {
        opacity: 1,
        xPercent: "-=5",
        yPercent: 8,
        rotate: -5,
        scale: 0.7,
      });
    }
    tl3.to(".muggle", {
      opacity: 1,
      xPercent: "-=0",
      yPercent: 10,
      rotate: 0,
      scale: 0.7,
    });
    scrollAt += 500;

    console.log(scrollAt);

    //=============================================================================
    // Fade out Scene 3
    //=============================================================================
    let tlc = gsap.timeline({
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
    });
    tlc.to(".castle", {
      opacity: 0,
      scale: 1,
      yPercent: 0,
    });
    //king
    let tl4 = gsap.timeline({
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
    tl4.to(
      ".koenig",

      {
        opacity: 0,
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        rotate: 0,
      }
    );

    //muggle
    let tl5 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".muggle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });
    tl5.to(".muggle", {
      opacity: 0,
      xPercent: 0,
      yPercent: 0,
      rotate: 0,
      scale: 1,
    });
    scrollAt += 500;
    //=============================================================================
    // Fade in Scene 4
    //=============================================================================

    //Muggle gets a twig instead of a wand

    let tl6 = gsap.timeline({
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
    });

    tl6.to(".garden", {
      opacity: 1,
      yPercent: -90,
    });

    let tl7 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".tree",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });
    tl7.to(".tree", {
      opacity: 1,
      xPercent: 100,
    });

    let tl8 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".wandimg",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    tl8.to(".wandimg", {
      x: window.innerWidth,
    });

    scrollAt += 500;

    let tl9 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=500",
        trigger: ".muggle",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    tl9.fromTo(
      ".muggle2",
      {
        yPercent: 0,
        xPercent: 0,
        rotation: 0,
        opacity: 0,
      },
      {
        xPercent: -100,
        yPercent: 5,
        opacity: 1,
      }
    );

    for (let i = 0; i < 8; i++) {
      tl9.to(".muggle2", {
        xPercent: "-=10",
        yPercent: -5,
      });
      tl9.to(".muggle2", {
        xPercent: "-=10",
        yPercent: 0,
      });
    }
    scrollAt += 500;

    let tl10 = gsap.timeline({
      scrollTrigger: {
        start: scrollAt,
        end: "+=50",
        trigger: ".break",
        scrub: 1,
        markers: {
          startColor: "var(--invisible)",
          endColor: "var(--invisible)",
        },
      },
    });

    
    tl10.to(".wandimg",{
      rotation:20,
      xPercent: 10
    })

    tl10.to(".break",{
      opacity:1,
    });


    //=============================================================================
    // Fade in Scene 5
    //=============================================================================

    //Dancing arround in the garden when babbity appears
  },

  methods: {
    scrollDown: function () {
      console.log("Go Down");
      var elem = document.getElementById("scene" + nextScene);
      console.log(elem);
      if (elem != null) {
        gsap.to(window, { duration: speed[index], scrollTo: parts[index] });
        //lastScene = activeScene;
        //activeScene = nextScene;
        var snd = document.getElementById("testAudio");
        index = index + 1;
        nextScene = nextScene + 1;
        if (audioPlay == false) {
          snd.play();
          audioPlay = true;
        }
      } else {
        console.log("End of the Story");
        console.log(elem);
      }
      console.log("this is the Scrollpoint" + scrollAt);
    },
  },
};
</script>

<style scoped>
.wand {
  z-index: 75;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
}

.break {
  position: absolute;
  width: 10%;
  height: auto;
  left: 5%;
  top: 40%;
  z-index: 76;
  opacity: 0;
}

.wandimg {
  position: absolute;
  width: 10%;
  height: auto;
  left: -90%;
  top: 40%;
  opacity: 1;
}

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

.village {
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 100%;
  width: 200%;
  height: 150%;
}

.muggle {
  opacity: 0;
  height: 70%;
  position: absolute;
  right: -20%;
  bottom: 0%;
}

.character#muggle {
  transform: scaleX(-1);
}

.button {
  position: fixed;
  z-index: 100;
  bottom: 0%;
  margin: auto;
  width: 100%;
}

button {
  padding: 1em 3em;
  background-color: rgba(0, 0, 0, 0.493);
  color: white;
  border: none;
  font-size: 1.5em;
  text-align: center;
  margin: auto;
  position: absolute;
  width: 40%;
  margin-right: -20%;
  right: 50%;
  bottom: 0px;
  opacity: 1;
}

button:focus {
  border: none;
  outline: none;
}

.elements .tree {
  background-image: url("../assets/Tree1_white.png");
  background-size: auto 100%;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: absolute;
  top: 0px;
  left: -100%;
  z-index: 90;
  opacity: 0;
}

.muggle2 {
  height: 70%;
  position: absolute;
  right: -10%;
  bottom: 5%;
}
</style>