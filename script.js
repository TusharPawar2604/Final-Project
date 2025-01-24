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

  document.addEventListener("mousemove",function(dets){
    // cursor.style.left = dets.x + "px"
    // cursor.style.top = dets.y + "px"
    gsap.to(".cursor",{
      x:dets.x +"px",
      y:dets.y +"px",
      duration:0.2
    })
  })

function Page2TextAnimation(){
  var middleText = document.querySelector(".middle-text h1").textContent

var ello = middleText.split(" ")
var hello = "";
ello.forEach(function(dets){
  hello += `<span> ${dets} </span>`
  document.querySelector(".middle-text h1").innerHTML = hello
})


gsap.from(".middle-text h1 span",{
  x:10,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"top 53%",
    end:" top 80%"
  }
})
}

function cursorImageTextAnimation(){
  var allImages = document.querySelectorAll(".image-div")
var text = ""
allImages.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    text = elem.getAttribute("data-text")
    cursor.innerHTML = `<h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5>`
    gsap.to(cursor ,{
      width:"200px",
      height:"30px",
      fontSize:"22px"
    })
    gsap.from(".cursor h5",{
      opacity:0,
      delay:0.2
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(cursor ,{
      width:"20px",
      height:"20px",

    })
    cursor.innerHTML = `<h5></h5>`
  })
})
}

function strechLine(){
  var string = document.querySelectorAll("#string")
  var myPath = d="M 10 80 Q 500 80 990 80";
  var finalPath = d="M 10 80 Q 500 80 990 80"
  string.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
      myPath = `M 10 80 Q ${dets.x} ${dets.y} 990 80`
      gsap.to("#main svg path",{
          attr:({d:myPath}),
          ease: "elastic.out(1,0.2)",
          duration:1.5,
      })
  })
  elem.addEventListener("mouseleave",function(dets){
      gsap.to("#main svg path",{
          attr:({d:finalPath}),
          ease: "elastic.out(1,0.2)",
          duration:1.5,
  
      })
  })
  })
}


function movingimages(){
  

var elementContainer = document.querySelector("#element-container")

elementContainer.addEventListener("mouseenter", function () {
    gsap.to("#moving-image", {
        opacity: 1
    })
})

elementContainer.addEventListener("mouseleave", function () {
    gsap.to("#moving-image", {
        opacity: 0
    })
})

var allElements = document.querySelectorAll(".element")
var movingImageDiv = document.querySelector("#moving-image")
var moveImg = document.querySelector("#moving-image img")


allElements.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        let image = elem.getAttribute("data-image")
        gsap.to(moveImg,{
            attr:{src:image},
        })
    })
    elementContainer.addEventListener("mousemove",function(dets){
        gsap.to("#moving-image",{
            left:`${dets.x - elementContainer.getBoundingClientRect().x}`,
            top:`${dets.y - elementContainer.getBoundingClientRect().y}`,
            duration:3,
            ease:"power1.out"
        })
        
    })
})
}
function colorChangingEffect(){
  var pinky = document.querySelector('#pink-wala-div-color')

var page6 = document.querySelector('#page6')

var blue = document.querySelector('#blue-wala-div-color')

pinky.addEventListener("mouseenter",function(){
  gsap.to(page6,{
        backgroundColor:'pink'
  })})
  pinky.addEventListener("mouseleave",function(){
    gsap.to(page6,{
          backgroundColor:'#F1EEE4'
    })})
    blue.addEventListener("mouseenter",function(){
      gsap.to(page6,{
            backgroundColor:'lightblue'
      })})
      pinky.addEventListener("mouseleave",function(){
        gsap.to(page6,{
              backgroundColor:'#F1EEE4'
        })})
}


function pinkBlueDivImageMoveAnimation (){
  
  var page6_first = document.querySelector("#page6-first")
  var ghumne_wali_image = document.querySelector("#ghumne-wali-image")
  var ghumne_wali_image_Img = document.querySelector("#ghumne-wali-image img")

  page6_first.addEventListener("mouseenter", function () {
      gsap.to(ghumne_wali_image, {
          opacity: 1
      })
  })
  page6_first.addEventListener("mouseleave", function () {
      gsap.to(ghumne_wali_image, {
          opacity: 0
        })
      })
      var pink_wala_div_color = document.querySelector("#pink-wala-div-color")
      var blue_wala_div_color = document.querySelector("#blue-wala-div-color")

  pink_wala_div_color.addEventListener("mouseenter",function(dets){
    let image = pink_wala_div_color.getAttribute('data-image')
    gsap.to(ghumne_wali_image_Img,{
              attr:{src:image},
            })
           page6_first.addEventListener("mousemove",function(dets){
              gsap.to(ghumne_wali_image,{
                left:`${dets.x - page6_first.getBoundingClientRect().x}`,
                top:`${dets.y - page6_first.getBoundingClientRect().y}`,
                duration:3,
                      ease:"power1.out"
                  })
                  
              })
  })
  
  blue_wala_div_color.addEventListener("mouseenter",function(dets){
    let image = blue_wala_div_color.getAttribute('data-image')
    gsap.to(ghumne_wali_image_Img,{
              attr:{src:image},
            })
           page6_first.addEventListener("mousemove",function(dets){
              gsap.to(ghumne_wali_image,{
                left:`${dets.x - page6_first.getBoundingClientRect().x}`,
                      top:`${dets.y - page6_first.getBoundingClientRect().y}`,
                      duration:3,
                      ease:"power1.out"
                  })
                  
              })
  })
  
}



function lineAndCursorWalaMarqeeAnimation(){
  if (window.innerWidth > 768) { // Check if the screen width is greater than 768px (typical mobile screen width)
    window.addEventListener("wheel", function(dets){
      if(dets.deltaY > 0){
        gsap.to("#hello",{
          transform : "translateX(-50%)" ,
          ease : "none" ,
          repeat : -1 ,
          duration :5
        })
        gsap.to("#hello img",{
        rotate : 180 
        })
    
      }
      else{
        gsap.to("#hello",{
          transform : "translateX(0%)" ,
          ease : "none" ,
          repeat : -1 ,
          duration :5
        })
        gsap.to("#hello img",{
          rotate : 0
          })
      }
    })
  }
}
  
  
// gsap.from("#page3 h1",{
//   y:100,
//   duration:0.5,
//   opacity:0,
//   stagger:0.3,
//  scrollTrigger:{
//   trigger:"#page3",
//   scroller:"#main",
//   markers:true,
//   start:"top 23.5%"
//  }
// })
  





 movingimages()
   strechLine()
   locomotive()
   Page1Animation()
   Page2TextAnimation()
   cursorImageTextAnimation()
 colorChangingEffect()
 pinkBlueDivImageMoveAnimation()
  lineAndCursorWalaMarqeeAnimation()



