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

const chars = 'ABCDEFGHKLMNOPQRSTUVWXYZ';
function randomChar(length, lastChar) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(chars.charAt(Math.floor(Math.random() * chars.length)))
  }
  result.push(lastChar);
  return result
}//랜덤 알파뱃 보이는 기능

const timeline = gsap.timeline({ paused: true });
const timeline1 = gsap.timeline();
const nickname = document.getElementById('scramble');
const button = document.getElementById('button');


const text = nickname.dataset.text.split('');

const items = text.map((char, index) => {
  const span = document.createElement('span');
  span.style.position = 'relative'
  span.classList.add('box');

  const chars = randomChar(3, char);

  chars.forEach((char, index) => {
    const item = document.createElement('span');

    item.style.opacity = '0'
    item.innerText = char

    if (index < chars.length - 1) {
      item.style.position = 'absolute'
    } else {
      item.style.position = 'relative'
      item.classList.add('last');
    }
    span.appendChild(item);
  })

  return nickname.appendChild(span);
})


items.forEach((item, index) => {
  timeline1.to(item.children, {
    opacity: 1,
    stagger: {
      each: 0.2,
      onUpdate: function () {
        if (this.progress() > 0.6) {
          if (!this._targets[0].classList.contains('last')) {
            this._targets[0].style.opacity = '0'
          }
        }
      }
    }
  }, `index+=${index / 2}`)
})

timeline
  .add(timeline1.timeScale(15));


button.addEventListener('click', function () {
  this.classList.toggle('active')
  if (this.classList.contains('active')) {
    timeline.play()
  } else {
    timeline.reverse()
  }
})

/* $('#button').on('click', ()=>{
  $('#button').addClass('hide');
}) */

// ================================================introduction======================================

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
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    markers: true,
    pin: true,
  },
  // y: 300,
  rotate: 360,
  duration: 3,
});

// ========================slider================================
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




