function cancelarReservaLoaded() {
  const cancelarReservaFrame = document.getElementById('frmCancelarReserva')
  const frmCancelarReserva = cancelarReservaFrame.contentDocument

  const cancelarReservaCbo = frmCancelarReserva.getElementById('cancelarReservaCbo')
  const cancelarReservaBtn = frmCancelarReserva.getElementById('cancelarReservaBtn')

  cancelarReservaBtn.addEventListener('click',cancelarReservaBtnClick)
  function cancelarReservaBtnClick() {
    //Obtengo el usuario del local del combo
    let usuarioLocal = cancelarReservaCbo.options[cancelarReservaCbo.selectedIndex].value


    RESERVAS_APP.forEach((value) => {
      //Si la reserva corresponde a ese usuario y esa persona y esta en estado pendiente
      if (value.usuarioLocal == usuarioLocal && value.usuarioPersona == USUARIO_ACTIVO[0].usuario && value.estadoReserva == 'P') {
        value.estadoReserva = 'C' //Cancelo la reserva correspondiente
        alert('Reserva cancelada correctamente')

        //Vacio el combo de reservas para cargarlo nuevamente
        while (cancelarReservaCbo.options.length > 0) {                
          cancelarReservaCbo.remove(0);
        }    

        recargarReservas()
      }
    })
  }

}

function recargarReservasCancelar() {
  const cancelarReservaFrame = document.getElementById('frmCancelarReserva')
  const frmCancelarReserva = cancelarReservaFrame.contentDocument

  const cancelarReservaCbo = frmCancelarReserva.getElementById('cancelarReservaCbo')

  let reservas = []

    //Vacio el combo de reservas para cargarlo nuevamente
    while (cancelarReservaCbo.options.length > 0) {                
      cancelarReservaCbo.remove(0);
    }

    //Guardo en array las reservas pendientes del usuario activo
    reservas = RESERVAS_APP.filter((value) => {
      if (value.usuarioPersona == USUARIO_ACTIVO[0].usuario) {
        return value.estadoReserva == 'P' ? true : false
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
      cancelarReservaCbo.appendChild(option)
    })
}