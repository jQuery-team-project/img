gsap.registerPlugin(ScrollTrigger);

gsap.to(".main-model", {
  scale: 1,
  scrollTrigger: {
    trigger: ".main_img_wrapper",
    start: "top 80vh",
    end: "1800px 50%",
    scrub: true,
    markers: true,
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