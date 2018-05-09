var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/firefox_new_2013.jpg');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
  var miNombre = prompt('Por favor, ingrese su nombre de usuario.');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Mozila es cool, ' + miNombre;
  if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
  }
  else{
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es cool,' + nombreAlmacenado;    
  }
}

miBoton.onclick = function(){
  estableceNombreUsuario();
}