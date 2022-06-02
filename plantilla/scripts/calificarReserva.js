function calificarReservaLoaded() {
  const calificarReservaFrame = document.getElementById('frmCalificarReserva')
  const frmCalificarReserva = calificarReservaFrame.contentDocument

  const calificarReservaStar1 = frmCalificarReserva.getElementById('calificarReservaStar1')
  const calificarReservaStar2 = frmCalificarReserva.getElementById('calificarReservaStar2')
  const calificarReservaStar3 = frmCalificarReserva.getElementById('calificarReservaStar3')
  const calificarReservaStar4 = frmCalificarReserva.getElementById('calificarReservaStar4')
  const calificarReservaStar5 = frmCalificarReserva.getElementById('calificarReservaStar5')

}


function calificarReservaStar1Click() {
  calificarReservaStar1.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar2.setAttribute('src','img/estrella.png')
  calificarReservaStar3.setAttribute('src','img/estrella.png')
  calificarReservaStar4.setAttribute('src','img/estrella.png')
  calificarReservaStar5.setAttribute('src','img/estrella.png')
}
function calificarReservaStar2Click() {
  calificarReservaStar1.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar2.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar3.setAttribute('src','img/estrella.png')
  calificarReservaStar4.setAttribute('src','img/estrella.png')
  calificarReservaStar5.setAttribute('src','img/estrella.png')
}
function calificarReservaStar3Click() {
  calificarReservaStar1.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar2.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar3.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar4.setAttribute('src','img/estrella.png')
  calificarReservaStar5.setAttribute('src','img/estrella.png')
}
function calificarReservaStar4Click() {
  calificarReservaStar1.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar2.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar3.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar4.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar5.setAttribute('src','img/estrella.png')
}
function calificarReservaStar5Click() {
  calificarReservaStar1.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar2.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar3.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar4.setAttribute('src','img/estrella_dorada.png')
  calificarReservaStar5.setAttribute('src','img/estrella_dorada.png')
}

function recargarReservasCalificar() {
  const calificarReservaFrame = document.getElementById('frmCalificarReserva')
  const frmCalificarReserva = calificarReservaFrame.contentDocument

  const calificarReservaCbo = frmCalificarReserva.getElementById('calificarReservaCbo')

  let reservas = []

    //Vacio el combo de reservas para cargarlo nuevamente
    while (calificarReservaCbo.options.length > 0) {                
      calificarReservaCbo.remove(0);
    }

    //Guardo en array las reservas finalizadas del usuario activo
    reservas = RESERVAS_APP.filter((value) => {
      if (value.usuarioPersona == USUARIO_ACTIVO[0].usuario) {
        return value.estadoReserva == 'F' ? true : false
      }
    })

    reservas.forEach((value) => {
      let option = document.createElement('option')
      let nombreLocal = ''
      option.value = value.usuarioLocal //El value del option va a ser el usuario del local

      USUARIOS_APP.forEach((value) => { //Busco en los usuarios el local y guardo el nombre
        if (value.usuario == option.value) {
          nombreLocal = value.nombre
        }
      })
      option.text = nombreLocal //El text del option va a ser el nombre del local

      //Solo cargo las reservas que no tengan calificacion .-Calificacion en valor 0  
      if (value.calificacionReserva == 0) {
        calificarReservaCbo.appendChild(option)
      }
      
    })
}