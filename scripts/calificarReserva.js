function calificarReservaLoaded() {
  const calificarReservaFrame = document.getElementById('frmCalificarReserva')
  const frmCalificarReserva = calificarReservaFrame.contentDocument

  const calificarReservaStars = frmCalificarReserva.querySelectorAll('.calificarReservaImg')
  const calificarReservaCbo = frmCalificarReserva.getElementById('calificarReservaCbo')
  const calificarReservaBtn = frmCalificarReserva.getElementById('calificarReservaBtn')

  calificarReservaBtn.addEventListener('click',calificarReservaBtnClick)

  function calificarReservaBtnClick() {
    //Valido que no tenga el combo de reservas vacio
    if (calificarReservaCbo.options.length > 0) {
      let calificacion = 5
      let idReserva = calificarReservaCbo.options[calificarReservaCbo.selectedIndex].value

      //Obtengo la calificacion fijandome que estrellas NO estan doradas
      for (i=4;i>=0;i--) {
        if (calificarReservaStars[i].getAttribute('src') == 'img/estrella.png') {
          calificacion -= 1
        }
      }
      //Si la calificacion no es nula, es decir, toco alguna estrella
      if (calificacion > 0) {
        RESERVAS_APP.forEach((value) => {
          if (value.idReserva == idReserva) {
            //Ingreso la calificacion y recargo datos de la pantalla
            value.calificacionReserva = calificacion
            alert('Calificacion ingresada correctamente. Gracias!')
            recargarReservasCalificar()
            calificarReservaStarClear()
          }
        })
      } else {
        alert('La calificacion minima es 1')
      }
      } else {
        alert('Debe seleccionar una reserva')
      }
  }
}

function calificarReservaStarClear() {
  const calificarReservaFrame = document.getElementById('frmCalificarReserva')
  const frmCalificarReserva = calificarReservaFrame.contentDocument
  
  const calificarReservaStar1 = frmCalificarReserva.getElementById('calificarReservaStar1')
  const calificarReservaStar2 = frmCalificarReserva.getElementById('calificarReservaStar2')
  const calificarReservaStar3 = frmCalificarReserva.getElementById('calificarReservaStar3')
  const calificarReservaStar4 = frmCalificarReserva.getElementById('calificarReservaStar4')
  const calificarReservaStar5 = frmCalificarReserva.getElementById('calificarReservaStar5')

  calificarReservaStar1.setAttribute('src','img/estrella.png')
  calificarReservaStar2.setAttribute('src','img/estrella.png')
  calificarReservaStar3.setAttribute('src','img/estrella.png')
  calificarReservaStar4.setAttribute('src','img/estrella.png')
  calificarReservaStar5.setAttribute('src','img/estrella.png')
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
      option.value = value.idReserva //El value del option va a ser el id de la reserva

      USUARIOS_APP.forEach((value2) => { //Busco en los usuarios el local y guardo el nombre
        
        if (value2.usuario == value.usuarioLocal) {
          nombreLocal = `${option.value} - ${value2.nombre}`
        }
      })
      option.text = nombreLocal //El text del option va a ser el id de la reserva + nombre del local

      //Solo cargo las reservas que no tengan calificacion .-Calificacion en valor 0  
      if (value.calificacionReserva == 0) {
        calificarReservaCbo.appendChild(option)
      }
      
    })
}