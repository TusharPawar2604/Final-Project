function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

function Page1Animation(){
  
  var allText = document.querySelectorAll(".page1-text h1")
  
  allText.forEach(function(elem){
    var clutter = "";
    var text = elem.textContent
    var splittedText = text.split("")
    splittedText.forEach(function(e){
      clutter+= `<span>${e}</span>`
    })
     elem.innerHTML = clutter
    })
  
    gsap.from(".page1-text h1 span",{
      y:300,
      delay:0.5,
      duration:0.6,
      stagger:0.1,
      opacity:0,
    })
  }

  var cursor = document.querySelector(".cursor")

  window.addEventListener("mousemove",function(dets){
    // cursor.style.left = dets.x + "px"
    // cursor.style.top = dets.y + "px"
    gsap.to(".cursor",{
      x:dets.x +"px",
      y:dets.y +"px",
      duration:0.2
    })
  })

var middleText = document.querySelector(".middle-text h1").textContent

var ello = middleText.split(" ")
var hello = "";
ello.forEach(function(dets){
  hello += `<span>${dets}</span>`
  document.querySelector(".middle-text h1").innerHTML = hello
})


// gsap.from(".middle-text h1 span",{
//   Y:10,
//   opacity:0,
//   stagger:0.1,
//   duration:0.6,
//   scrollTrigger:{
//     trigger:"#page2",
//     scroller:"#main",
//     markers:true,
//     start:"top 53%"
//   }
// })


locomotive()
Page1Animation()


