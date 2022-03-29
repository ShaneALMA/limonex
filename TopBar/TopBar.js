const TopBar = document.querySelector('.topbar');

function checkTopBarAnimMore() {
  const checkAnim = localStorage.getItem('check-topbar-more');
  if(checkAnim === null) {
    TopBar.children[4].classList.add('check-anim-more');
  }
  return checkAnim;
}

function checkTopBarAnimInfo() {
  const checkAnim = localStorage.getItem('check-topbar-info');
  if(checkAnim === null) {
    TopBar.children[0].classList.add('check-anim-more');
  }
  return checkAnim;
}

checkTopBarAnimInfo();
checkTopBarAnimMore();
