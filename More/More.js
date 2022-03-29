const More = document.createElement('div');
More.className = 'more';
More.innerHTML = `
<label onclick="changeList(this)" 
  class="sel">
  Emolientes
</label>
    
<label onclick="changeList(this)">
  Picarones
</label>
    
<span onclick="closeMore()"></span>
`

function showMore() {
  document.body.appendChild(Shadow);
  document.body.appendChild(More);
  if(checkTopBarAnimMore() === null) {
    localStorage.setItem('check-topbar-more', 'true');
    TopBar.children[4].classList.remove('check-anim-more');
  }
}

function closeMore() {
  document.body.removeChild(More);
  document.body.removeChild(Shadow);
}

function changeList(elem) {
  const numEl = elem.parentNode.children.length - 1;
  for(let i = 0; i < numEl; i++){
    elem.parentNode.children[i].classList.remove('sel');
  }
  elem.classList.add('sel');
  switch(elem.innerText) {
    case 'Emolientes':
      getEmolientes();
      closeMore();
      TopBar.children[2].innerText = 'Emolientes';
      break;
    case 'Picarones':
      getPicarones();
      closeMore();
      TopBar.children[2].innerText = 'Picarones';
      if(checkMoreAnim() === null) {
        localStorage.setItem('check-more','true');
        More.children[1].classList.remove('check-more-label');
      }
      break;
    default:
      console.log('La lista no existe');
  }
}

function checkMoreAnim() {
  const checkAnim = localStorage.getItem('check-more');
  if(checkAnim === null) {
    More.children[1].classList.add('check-more-label');
  }
  return checkAnim;
}

checkMoreAnim();
