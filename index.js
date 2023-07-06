/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ed2222" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.7776548495197786,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 9.744926547616142,
        size_min: 2.436231636904035,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#d22929",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 9620.472365193136,
        rotateY: 7936.889701284337
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: true, mode: "remove" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

// particlesJS("particles-js", {
//   particles: {
//     number: {
//       value: 350,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: "#ff0000",
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 5,
//       },
//       image: {
//         src: "img/github.svg",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "grab",
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 140,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   retina_detect: true,
// });


/* ---- stats.js config ---- */

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

//   CountDown Clock

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// let countDown = new Date('Sep 30, 2021 00:00:00').getTime()
// let x = setInterval(function () {

//     let now = new Date().getTime()
//     let distance = countDown - now;

//     // document.getElementById('days').innerText = Math.floor(distance / (day)),
//     // document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
//     // document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
//     // document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
//     document.getElementById('days').innerText = Math.floor(distance / (day))
//     document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour))
//     document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute))
//     document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second)
//     console.log("i am here")

//     //do something later when date is reached
//     //if (distance < 0) {
//     //  clearInterval(x);
//     //  'IT'S MY BIRTHDAY!;
//     //}

// }, second)

// // x();

//arpit countdown js
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ("0" + t.days).slice(-2);
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var deadline = new Date("Oct 13, 2019 10:00:00"); //.getTime()
initializeClock("clockdiv", deadline);

// function registration() {
//   window.location.href = "/register.html";
// }
