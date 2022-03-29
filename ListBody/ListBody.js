const ListBody = document.querySelector('.list-body');

function newItem(data) {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
  <div class="img" 
    style=${data.img}></div>
      
  <label>
    ${data.name}
  </label>
      
  <label>${data.price}</label>
  
  <span></span>
  `;
  if(data.get !== undefined) {
    item.addEventListener('click', () => {
      getEmoliente(data);
      if(checkListItemAnim() === null) {
        localStorage.setItem('check-list-item','true');
        ListBody.children[0].classList.remove('check-anim-list-item');
      }
    });
  }
  ListBody.appendChild(item);
  if(data.get === 'clasico') {
    checkListItemAnim();
  }
}

async function getEmolientes() {
  const data = await fetch('Assets/DB/emolientes.json');
  const emolientes = await data.json();
  ListBody.innerHTML = '';
  emolientes.forEach(emo => {
    newItem(emo);
  });
}

getEmolientes();

async function getPicarones() {
  const data = await fetch('Assets/DB/picarones.json');
  const picarones = await data.json();
  ListBody.innerHTML = '';
  picarones.forEach(pica => {
    newItem(pica);
  });
}

function checkListItemAnim() {
  const checkAnim = localStorage.getItem('check-list-item');
  if(checkAnim === null) {
    ListBody.children[0].classList.add('check-anim-list-item');
  }
  return checkAnim;
}
