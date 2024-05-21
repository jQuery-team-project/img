gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".main-model", {
  scale: 1,
  scrollTrigger: {
    trigger: ".main_img_wrapper",
    start: "top 80vh",
    end: "1800px 50%",
    scrub: true,
    markers: false,
    pin: true,
  },
  duration: 5,
  ease: "power4.out"
})
// ===============================================main=========================================
/* gsap.to(".male-model", {
  scrollTrigger: {
    trigger: ".male-model",
    start: "center center",
    // end: "1800px 50%",
    scrub: true,
    markers: false,
    pin: true,
  },
  duration: 5,
  // ease: "power4.out"
}) */

//===============================================gallery=========================================


document.addEventListener("DOMContentLoaded", () => {

  gsap.utils.toArray(".write-in-text").forEach((text) => {
      gsap.fromTo(text, 
          { 
              opacity: 0, 
              text: ""
          }, 
          { 
              opacity: 1,
              duration: 2, 
              text: text.getAttribute("data-text"),
              ease: "power2.inOut",
              scrollTrigger: {
                  trigger: text,
                  start: "top 95%",
                  end: "top 50%",
                  toggleActions: "play none none reset"
              }
          }
      );
  });
});

// ================================================introduction======================================

gsap.to(".container1", {
  scrollTrigger: {
    trigger: ".container1",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: 200,
  duration: 3,
});

gsap.to(".text.text1", {
  scrollTrigger: {
    trigger: ".container1",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: -150,
  duration: 3,
});


// ================================================best-collection======================================

const total = document.querySelector(".horizontal_scroll");
console.log(total.offsetWidth)

function getScrollAmount() {
  let totalWidth = total.scrollWidth;
  return -(totalWidth - window.innerWidth);
}

const tween = gsap.to(total, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});


ScrollTrigger.create({
  trigger: ".hsWrapper",
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,//사이즈 조절시 새로고침
  markers: false
});

// ========================horizontal================================
gsap.to(".sun", {
  scrollTrigger: {
    trigger: ".product_slide",
    start: "top 50%",
    scrub: true,
    markers: true,
  },
  rotate: 360,
  duration: 3,
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-in-text").forEach((text) => {
      gsap.fromTo(text, 
          { opacity: 0 }, 
          { 
              opacity: 1, 
              duration: 2, 
              ease: "power2.inOut",
              scrollTrigger: {
                  trigger: text,
                  start: "top 80%",
                  end: "top 50%",
                  toggleActions: "play none none none"
              }
          }
      );
  });
});

// ========================slider================================

gsap.to(".bg", {
  scrollTrigger: {
    trigger: ".forest",
    start: "top 50%",
    scrub: 1
  },
  scale: 10.5
})
gsap.to(".ballerina", {
  scrollTrigger: {
    trigger: ".forest",
    start: "top 50%",
    scrub: 1
  },
  scale: 0.8
})
gsap.to(".curtain-left", {
  scrollTrigger: {
    trigger: ".forest",
    start: "top 50%",
    scrub: 1
  },
  x: -500
})
gsap.to(".curtain-right", {
  scrollTrigger: {
    trigger: ".forest",
    start: "top 50%",
    scrub: 1
  },
  x: 500
})
gsap.to(".rabbit", {
  scrollTrigger: {
    trigger: ".forest",
    start: "top 50%",
    scrub: 1
  },
  scale:0.5
})
gsap.to(".logo_text", {
  scrollTrigger: {
    trigger: ".forest",
    start: "top bottom",
    scrub: 1
  },
  y: -300
})
 
// ========================forest================================


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ========================swiper================================




