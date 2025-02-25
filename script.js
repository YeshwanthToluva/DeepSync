function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco()

document.getElementById("login").addEventListener("click", function() {
  window.location.href = "./login-form/login.html";
});
document.getElementById("FocusShield").addEventListener("click", function() {
  window.location.href = "./Time-Management/pomodoro-timer/index.html";
});
document.getElementById("register").addEventListener("click", function() {
  window.location.href = "./login-form/register.html";
});


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./frames/ship_000.jpg
  ./frames/ship_001.jpg
  ./frames/ship_002.jpg
  ./frames/ship_003.jpg
  ./frames/ship_004.jpg
  ./frames/ship_005.jpg
  ./frames/ship_006.jpg
  ./frames/ship_007.jpg
  ./frames/ship_008.jpg
  ./frames/ship_009.jpg
  ./frames/ship_010.jpg
  ./frames/ship_011.jpg
  ./frames/ship_012.jpg
  ./frames/ship_013.jpg
  ./frames/ship_014.jpg
  ./frames/ship_015.jpg
  ./frames/ship_016.jpg
  ./frames/ship_017.jpg
  ./frames/ship_018.jpg
  ./frames/ship_019.jpg
  ./frames/ship_020.jpg
  ./frames/ship_021.jpg
  ./frames/ship_022.jpg
  ./frames/ship_023.jpg
  ./frames/ship_024.jpg
  ./frames/ship_025.jpg
  ./frames/ship_026.jpg
  ./frames/ship_027.jpg
  ./frames/ship_028.jpg
  ./frames/ship_029.jpg
  ./frames/ship_030.jpg
  ./frames/ship_031.jpg
  ./frames/ship_032.jpg
  ./frames/ship_033.jpg
  ./frames/ship_034.jpg
  ./frames/ship_035.jpg
  ./frames/ship_036.jpg
  ./frames/ship_037.jpg
  ./frames/ship_038.jpg
  ./frames/ship_039.jpg
  ./frames/ship_040.jpg
  ./frames/ship_041.jpg
  ./frames/ship_042.jpg
  ./frames/ship_043.jpg
  ./frames/ship_044.jpg
  ./frames/ship_045.jpg
  ./frames/ship_046.jpg
  ./frames/ship_047.jpg
  ./frames/ship_048.jpg
  ./frames/ship_049.jpg
  ./frames/ship_050.jpg
  ./frames/ship_050.jpg
  ./frames/ship_051.jpg
  ./frames/ship_052.jpg
  ./frames/ship_053.jpg
  ./frames/ship_054.jpg
  ./frames/ship_055.jpg
  ./frames/ship_056.jpg
  ./frames/ship_057.jpg
  ./frames/ship_058.jpg
  ./frames/ship_059.jpg
  ./frames/ship_060.jpg
  ./frames/ship_061.jpg
  ./frames/ship_062.jpg
  ./frames/ship_063.jpg
  ./frames/ship_064.jpg
  ./frames/ship_065.jpg
  ./frames/ship_066.jpg
  ./frames/ship_067.jpg
  ./frames/ship_068.jpg
  ./frames/ship_069.jpg
  ./frames/ship_070.jpg
  ./frames/ship_071.jpg
  ./frames/ship_072.jpg
  ./frames/ship_073.jpg
  ./frames/ship_074.jpg
  ./frames/ship_075.jpg
  ./frames/ship_076.jpg
  ./frames/ship_077.jpg
  ./frames/ship_078.jpg
  ./frames/ship_079.jpg
  ./frames/ship_080.jpg
  ./frames/ship_081.jpg
  ./frames/ship_082.jpg
  ./frames/ship_083.jpg
  ./frames/ship_084.jpg
  ./frames/ship_085.jpg
  ./frames/ship_086.jpg
  ./frames/ship_087.jpg
  ./frames/ship_088.jpg
  ./frames/ship_089.jpg
  ./frames/ship_090.jpg
  ./frames/ship_091.jpg
  ./frames/ship_092.jpg
  ./frames/ship_093.jpg
  ./frames/ship_094.jpg
  ./frames/ship_095.jpg
  ./frames/ship_096.jpg
  ./frames/ship_097.jpg
  ./frames/ship_098.jpg
  ./frames/ship_099.jpg
  ./frames/ship_100.jpg
  ./frames/ship_101.jpg
  ./frames/ship_102.jpg
  ./frames/ship_103.jpg
  ./frames/ship_104.jpg
  ./frames/ship_105.jpg
  ./frames/ship_106.jpg
  ./frames/ship_107.jpg
  ./frames/ship_108.jpg
  ./frames/ship_109.jpg
  ./frames/ship_110.jpg
  ./frames/ship_111.jpg
  ./frames/ship_112.jpg
  ./frames/ship_113.jpg
  ./frames/ship_114.jpg
  ./frames/ship_115.jpg
  ./frames/ship_116.jpg
  ./frames/ship_117.jpg
  ./frames/ship_118.jpg
  ./frames/ship_119.jpg
  ./frames/ship_120.jpg
  ./frames/ship_121.jpg
  ./frames/ship_122.jpg
  ./frames/ship_123.jpg
  ./frames/ship_124.jpg
  ./frames/ship_125.jpg
  ./frames/ship_126.jpg
  ./frames/ship_127.jpg
  ./frames/ship_128.jpg
  ./frames/ship_129.jpg
  ./frames/ship_130.jpg
  ./frames/ship_131.jpg
  ./frames/ship_132.jpg
  ./frames/ship_133.jpg
  ./frames/ship_134.jpg
  ./frames/ship_135.jpg
  ./frames/ship_136.jpg
  ./frames/ship_137.jpg
`;

  return data.split("\n")[index];
}

const frameCount = 137;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()


var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})




function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas1()




  var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});
const frameCount = 136;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page7`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#0a3bce91`,
})