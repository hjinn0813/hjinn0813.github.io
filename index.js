/* Text typing animation */
const content = '안녕하세요! \n 주니어 프론트엔드 개발자, \n 조혜진입니다. :)';
const text = document.querySelector('.greeting');
let isAdding = true;
let i = 0;
// 문자열 접근을 위한 인덱스

function playAnim() {
  setTimeout(function () {
    text.innerText = content.slice(0, i);
    if (isAdding) {
      // adding text
      if (i > content.length) {
        // no more text to add
        isAdding = false;
        setTimeout(function () {
          playAnim();
        }, 100);
        return;
      } else {
        i++;
      }
    } else {
      // removing text
      if (i === 0) {
        // no more text to remove
        isAdding = true;
      } else {
        i--;
      }
    }
    // call itself
    playAnim();
  }, 120);
}
// 타이핑 스크립트 호출
playAnim();

/* header scroll event */
gsap.registerPlugin(ScrollTrigger);
const headerEl = document.querySelector('#header');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    const scrolled = window.scrollY;

    if (scrolled > 400) {
      gsap.to(headerEl, { y: -70, duration: 0.3 });
    } else {
      gsap.to(headerEl, { y: 0, duration: 0.3 });
    }
  }, 300)
);

/* to top btn */
const toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}
