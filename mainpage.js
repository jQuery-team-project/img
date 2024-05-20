gsap.registerPlugin(ScrollTrigger);

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
/* gsap.to(".male-model",{
  scrollTrigger: {
    trigger: ".male-model",
    start: "top 80vh",
    end: "1500px 50%",
    scrub: true,
    markers: true,
    pin: true,
  },
  duration: 3,
});
 */
// ================================================gallery======================================

 gsap.to(".container1", {
  scrollTrigger: {
    trigger: ".container1",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: 300,
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
  x: -300,
  duration: 3,
});

/* gsap.to(".container2", {
  scrollTrigger: {
    trigger: ".container2",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: 100,
  duration: 3,
});

gsap.to(".text2", {
  scrollTrigger: {
    trigger: ".container2",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: -200,
  duration: 3,
});

gsap.to(".container3", {
  scrollTrigger: {
    trigger: ".container3",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: 100,
  duration: 3,
});

gsap.to(".text3", {
  scrollTrigger: {
    trigger: ".container3",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: true,
  },
  x: -100,
  duration: 3,
}); */

// ================================================best-collection======================================

/* const total = document.querySelector(".horizontal_scroll");
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
  start: "50% top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,//사이즈 조절시 새로고침
  markers: false
}); */
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

// ========================mobile
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




