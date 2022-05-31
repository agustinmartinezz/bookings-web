window.addEventListener('DOMContentLoaded',onWindowLoad)

function onWindowLoad() {
  const navBarItem1 = document.getElementById('navBarItem1')
  const navBarItem2 = document.getElementById('navBarItem2')
  const navBarItem3 = document.getElementById('navBarItem3')
  const navBarItem4 = document.getElementById('navBarItem4')
  const navBarItem5 = document.getElementById('navBarItem5')
  const navBarItem6 = document.getElementById('navBarItem6')
  const navBarItem7 = document.getElementById('navBarItem7')
  const navBarItem8 = document.getElementById('navBarItem8')
  const navBarItem9 = document.getElementById('navBarItem9')

  navBarItem1.addEventListener('click',onItem1Click)
  function onItem1Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmModDisponibilidad')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmModDisponibilidad')
  }
  
  navBarItem2.addEventListener('click',onItem2Click)
  function onItem2Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmModificarReserva')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmModificarReserva')
  }

  navBarItem3.addEventListener('click',onItem3Click)
  function onItem3Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmCupoMaximo')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmCupoMaximo')
  }

  navBarItem4.addEventListener('click',onItem4Click)
  function onItem4Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmEstadisticaLocal')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmEstadisticaLocal')
  }

  navBarItem5.addEventListener('click',onItem5Click)
  function onItem5Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmEstadistica')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmEstadistica')
  }

  navBarItem6.addEventListener('click',onItem6Click)
  function onItem6Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmRealizarReserva')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmRealizarReserva')
  }

  navBarItem7.addEventListener('click',onItem7Click)
  function onItem7Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmCancelarReserva')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmCancelarReserva')
  }

  navBarItem8.addEventListener('click',onItem8Click)
  function onItem8Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmCalificarReserva')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmCalificarReserva')
  }

  navBarItem9.addEventListener('click',onItem9Click)
  function onItem9Click() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmReservasPendientes')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmReservasPendientes')
  }
}

function actualizarNavegacion(usuarioActivo) {

  let usuarioActivoTipo = usuarioActivo.tipo

  const navBarItem1 = document.getElementById('navBarItem1')
  const navBarItem2 = document.getElementById('navBarItem2')
  const navBarItem3 = document.getElementById('navBarItem3')
  const navBarItem4 = document.getElementById('navBarItem4')
  const navBarItem5 = document.getElementById('navBarItem5')
  const navBarItem6 = document.getElementById('navBarItem6')
  const navBarItem7 = document.getElementById('navBarItem7')
  const navBarItem8 = document.getElementById('navBarItem8')
  const navBarItem9 = document.getElementById('navBarItem9')

  switch (usuarioActivoTipo) {
    case 'L':
      navBarItem1.style.setProperty('display','block')
      navBarItem2.style.setProperty('display','block')
      navBarItem3.style.setProperty('display','block')
      navBarItem4.style.setProperty('display','block')
      navBarItem5.style.setProperty('display','none')
      navBarItem6.style.setProperty('display','none')
      navBarItem7.style.setProperty('display','none')
      navBarItem8.style.setProperty('display','none')
      navBarItem9.style.setProperty('display','none')
      break;
    case 'P':
      navBarItem1.style.setProperty('display','none')
      navBarItem2.style.setProperty('display','none')
      navBarItem3.style.setProperty('display','none')
      navBarItem4.style.setProperty('display','none')
      navBarItem5.style.setProperty('display','block')
      navBarItem6.style.setProperty('display','block')
      navBarItem7.style.setProperty('display','block')
      navBarItem8.style.setProperty('display','block')
      navBarItem9.style.setProperty('display','block')
      break;
    default:
      navBarItem1.style.setProperty('display','none')
      navBarItem2.style.setProperty('display','none')
      navBarItem3.style.setProperty('display','none')
      navBarItem4.style.setProperty('display','none')
      navBarItem5.style.setProperty('display','none')
      navBarItem6.style.setProperty('display','none')
      navBarItem7.style.setProperty('display','none')
      navBarItem8.style.setProperty('display','none')
      navBarItem9.style.setProperty('display','none')
  }
}