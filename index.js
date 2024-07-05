// Text typing animation
const content = '안녕하세요! 주니어 프론트엔드 개발자 조혜진입니다.';
const text = document.querySelector('.greeting');
let i = 0;
// 문자열 접근을 위한 인덱스

function typing() {
  text.textContent += content[i++];
  // 하나씩 증가하며 추가

  if (i > content.length) {
    // 컨텐츠 길이보다 길어지면 초기화 후 재시작
    text.textContent = '';
    i = 0;
  }
}
setInterval(typing, 200);

// to top btn
const toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}
