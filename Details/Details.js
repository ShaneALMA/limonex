const Details = document.createElement('div');
Details.className = 'details';

const emoComp = ["Linaza", "Cebada", "Uña de Gato", "Boldo", "Chancapiedra", "Alfalfa (opcional)", "Amargo / Hercampuri (opcional)", "Dulce y Limón (al gusto)"]

function showDetails(emo) {
  Details.innerHTML = '';
  Details.innerHTML = `
  <div class="cont">
      
    <div class="img" 
      style=${emo.img}></div>
    
    <h2>${emo.name}</h2>
      
    <div class="content">
        
      <h3>Contenido:</h3>
        
      <div>
        
      </div>
        
    </div>
      
    <div class="benefits">
        
      <h3>Propiedades:</h3>
        
      <div>
          
      </div>
        
    </div>
      
    <div class="bottom">
        
      <h3 
        onclick="closeDetails()"
        class="close">
        cerrar
      </h3>
        
      <h3 class="price">
        ${emo.price}
      </h3>
        
    </div>
      
  </div>
    
  <span></span>
  `
  
  emo.content.forEach(cont => {
    Details.children[0].children[2].children[1].innerHTML += `
    <label>${cont}</label>`
  });
  
  if(emo.name !== 'Emoliente Clásico') {
    emoComp.forEach(cont => {
    Details.children[0].children[2].children[1].innerHTML += `
    <label class="comp">
      ${cont}
    </label>`
  });
  }
  
  emo.properties.forEach(prop => {
    Details.children[0].children[3].children[1].innerHTML += `
    <label>${prop}</label>`
  });
  
  document.body.appendChild(Shadow);
  document.body.appendChild(Details);
}

function closeDetails() {
  document.body.removeChild(Details);
  document.body.removeChild(Shadow);
}

async function getEmoliente(emo) {
  const data = await fetch(`Assets/DB/${emo.get}.json`);
  const emoliente = await data.json();
  showDetails(emoliente);
}
