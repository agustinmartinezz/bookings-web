window.addEventListener('DOMContentLoaded',onWindowLoad)

function onWindowLoad() {
  const cerrarSesionBtn = document.getElementById('cerrarSesionBtn')
  cerrarSesionBtn.addEventListener('click',cerrarSesion)

  function cerrarSesion(){
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmLogin')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    USUARIO_ACTIVO.pop()
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmLogin')
    toggleCerrarSesion()
    actualizarNavegacion(USUARIO_ACTIVO)
  }
}

function toggleCerrarSesion() {
  const cerrarSesionBtn = document.getElementById('cerrarSesionBtn')

  let display = cerrarSesionBtn.style.getPropertyValue('display')
  switch (display) {
    case 'block':
      cerrarSesionBtn.style.setProperty('display','none')
      break;
    case 'none':
      cerrarSesionBtn.style.setProperty('display','block')
      break;
  }
}