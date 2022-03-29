const Footer = document.querySelector('.footer');

function checkFooterAnimW() {
  const checkAnim = localStorage.getItem('check-footer-w');
  if(checkAnim === null) {
    Footer.children[2].children[1].classList.add('check-anim-more');
  }
  return checkAnim;
}

function checkFooterAnimF() {
  const checkAnim = localStorage.getItem('check-footer-f');
  if(checkAnim === null) {
    Footer.children[2].children[0].classList.add('check-anim-more');
  }
  return checkAnim;
}

checkFooterAnimF();
checkFooterAnimW();

function goToWhatsapp() {
  window.open('https://api.whatsapp.com/send?phone=+51931372806');
  if(checkFooterAnimW() === null) {
    Footer.children[2].children[1].classList.remove('check-anim-more');
    localStorage.setItem('check-footer-w','true');
  }
}

function goToFacebook() {
  window.open('https://m.facebook.com/limonex.johanes/');
  if (checkFooterAnimF() === null) {
    Footer.children[2].children[0].classList.remove('check-anim-more');
    localStorage.setItem('check-footer-f','true');
  }
}
