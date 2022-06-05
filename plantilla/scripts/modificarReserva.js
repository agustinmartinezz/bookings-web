function modificarReservaLoaded() {
  const modificarReservaFrame = document.getElementById('frmModificarReserva')
  const frmModificarReserva = modificarReservaFrame.contentDocument

  //Al input no le asigno id y lo busco por etiqueta ya que si le asigno id, almacena los valores que ingreso y arruina el funcionamiento del datalist
  const modificarReservaSearch = frmModificarReserva.querySelector('input')
  const modificarReservaBtn = frmModificarReserva.getElementById('modificarReservaBtn')

  modificarReservaBtn.addEventListener('click',modificarReservaBtnClick)
  function modificarReservaBtnClick() {
    let txtReserva = modificarReservaSearch.value
    let posUltNum = txtReserva.indexOf(' ')
    
    let idReserva = Number(txtReserva.substring(0,posUltNum))
    
    if (idReserva && idReserva > 0) {
      let reserva = RESERVAS_APP.filter((value) => {return value.idReserva == idReserva && value.estadoReserva == 'P' && value.usuarioLocal == USUARIO_ACTIVO[0].usuario ? true : false})
      if (reserva.length == 1) {
        let encontreReserva = false
        let indice = 0

        do {
          console.log('a')
          if (RESERVAS_APP[indice].idReserva == reserva[0].idReserva) {
            console.log(RESERVAS_APP[indice].idReserva, reserva[0].idReserva)
            RESERVAS_APP[indice].estadoReserva = 'F'
            encontreReserva = true
            modificarReservaSearch.value = ''
            recargarModificarReservas()
            alert('Reserva finalizada correctamente!')
          }
          indice += 1
        } while (!encontreReserva && indice < RESERVAS_APP.length)

      } else {
        alert('El id ingresado no corresponde a una reserva pendiente')
      }
    } else {
      alert('Verifique haber ingresado un valor de la lista')
    }
  }
}

function recargarModificarReservas() {
  const modificarReservaFrame = document.getElementById('frmModificarReserva')
  const frmModificarReserva = modificarReservaFrame.contentDocument

  const modificarReservaCbo = frmModificarReserva.getElementById('modificarReservaCbo')

  let reservas = []

  //Vacio el combo de reservas para cargarlo nuevamente
  modificarReservaCbo.innerHTML = ''

  //Guardo en array las reservas pendientes del local
  reservas = RESERVAS_APP.filter((value) => {
    if (value.usuarioLocal == USUARIO_ACTIVO[0].usuario) {
      let condicionEstado = value.estadoReserva == 'P'
      return condicionEstado ? true : false
    }
  })

  reservas.forEach((value) => {
    let option = document.createElement('option')
    let nombrePersona = ''
    // option.value = value.idReserva //El value del option va a ser el id de la reserva

    USUARIOS_APP.forEach((value2) => { 
      //Busco en los usuarios la persona y guardo el nombre
      if (value2.usuario == value.usuarioPersona) {
        nombrePersona = `${value.idReserva} - ${value2.nombre}`
      }
    })
    // option.text = nombrePersona //El text del option va a ser el id de la reserva + nombre de la persona
    option.value = nombrePersona

    modificarReservaCbo.appendChild(option)
  })
}