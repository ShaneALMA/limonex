const Info = document.createElement('div');
Info.className = 'info';
Info.innerHTML = `
<div class="cont">
      
  <h2>Atención</h2>
      
  <h3>Emolientes:</h3>
  <h4>De Lunes a Sábados:</h4>
  <p>
    Mañanas: 6:30 AM a 10:00 AM
    <br>
    Tardes: 5:30 PM a 8:30 PM
  </p>
      
  <h3>Picarones:</h3>
  <h4>Todos los Domingos:</h4>
  <p>
    Tarde: 3:00 PM a 7:30 PM
  </p>
  
  <div class="extra">
    " También le servimos en envases biodegradables para la conservación de nuestro planeta, el cual tiene un costo adicional de S/. 0.50 "
    <span>
      "Agradecemos su Preferencia 😃"
    </span>
  </div>
  
  <div onclick="closeInfo()" class="close">
    cerrar
  </div>
      
</div>
`

function showInfo() {
  document.body.appendChild(Info);
  if(checkTopBarAnimInfo() === null) {
    localStorage.setItem('check-topbar-info','true');
    TopBar.children[0].classList.remove('check-anim-more');
  }
}

function closeInfo() {
  document.body.removeChild(Info);
}
