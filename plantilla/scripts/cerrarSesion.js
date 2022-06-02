window.addEventListener('load',onWindowLoad)

function onWindowLoad() {
  const cerrarSesionBtn = document.getElementById('cerrarSesionBtn')
  cerrarSesionBtn.addEventListener('click',cerrarSesion)

  function cerrarSesion(){
    //Para cerrar sesion oculto la pantalla activa, muestro la de login y elimino los datos de usuario activo
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
  const usernameTxt = document.getElementById('username')

  let display = cerrarSesionBtn.style.getPropertyValue('display')
  switch (display) {
    case 'block':
      cerrarSesionBtn.style.setProperty('display','none')
      usernameTxt.style.setProperty('display','none')
      usernameTxt.innerHTML = 'Usuario:'
      break;
    case 'none':
      cerrarSesionBtn.style.setProperty('display','block')
      usernameTxt.style.setProperty('display','block')
      USUARIO_ACTIVO.forEach((value) => {
        usernameTxt.innerHTML += value.usuario
      })
      break;
  }
}