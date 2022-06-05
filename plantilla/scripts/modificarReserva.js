function modificarReservaLoaded() {
  const modificarReservaFrame = document.getElementById('frmModificarReserva')
  const frmModificarReserva = modificarReservaFrame.contentDocument

  const modificarReservaCbo = frmModificarReserva.getElementById('modificarReservaCbo')
  const modificarReservaChkPen = frmModificarReserva.getElementById('modificarReservaChkPen')
  const modificarReservaChkFin = frmModificarReserva.getElementById('modificarReservaChkFin')
  const modificarReservaBtn = frmModificarReserva.getElementById('modificarReservaBtn')

  modificarReservaCbo.addEventListener('click',modificarReservaCboClick)
  function modificarReservaCboClick() {
    recargarChksReserva()
  }

  modificarReservaChkPen.addEventListener('click',modificarReservaChkPenClick)
  function modificarReservaChkPenClick() {
    modificarReservaChkPen.checked = true
    modificarReservaChkFin.checked = false
  }

  modificarReservaChkFin.addEventListener('click',modificarReservaChkFinClick)
  function modificarReservaChkFinClick() {
    modificarReservaChkPen.checked = false
    modificarReservaChkFin.checked = true
  }

  modificarReservaBtn.addEventListener('click',modificarReservaBtnClick)
  function modificarReservaBtnClick() {
    
  }
}

function recargarModificarReservas() {
  const modificarReservaFrame = document.getElementById('frmModificarReserva')
  const frmModificarReserva = modificarReservaFrame.contentDocument

  const modificarReservaCbo = frmModificarReserva.getElementById('modificarReservaCbo')

  let reservas = []

  //Vacio el combo de reservas para cargarlo nuevamente
  while (modificarReservaCbo.options.length > 0) {
    modificarReservaCbo.remove(0);
  }

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
    option.value = value.idReserva //El value del option va a ser el id de la reserva

    USUARIOS_APP.forEach((value2) => { 
      //Busco en los usuarios la persona y guardo el nombre
      if (value2.usuario == value.usuarioPersona) {
        nombrePersona = `${option.value} - ${value2.nombre}`
      }
    })
    option.text = nombrePersona //El text del option va a ser el id de la reserva + nombre de la persona

    modificarReservaCbo.appendChild(option)

  })
}

function recargarChksReserva() {
  const modificarReservaFrame = document.getElementById('frmModificarReserva')
  const frmModificarReserva = modificarReservaFrame.contentDocument

  const modificarReservaCbo = frmModificarReserva.getElementById('modificarReservaCbo')
  const modificarReservaChkPen = frmModificarReserva.getElementById('modificarReservaChkPen')
  const modificarReservaChkFin = frmModificarReserva.getElementById('modificarReservaChkFin')

  let encontreReserva = false
  let indice = 0
  do {
    //Busco la reserva que esta seleccionada en el combo
    if (RESERVAS_APP[indice].idReserva == modificarReservaCbo.options[modificarReservaCbo.selectedIndex].value) {
      switch (RESERVAS_APP[indice].estadoReserva) {
        case 'P': //Segun su estado marco los checkbox
          modificarReservaChkPen.checked = true
          modificarReservaChkFin.checked = false
          break;
        case 'F': //Segun su estado marco los checkbox
          modificarReservaChkPen.checked = false
          modificarReservaChkFin.checked = true
          break;
      }
      encontreReserva = true
    }
    indice += 1
  } while (!encontreReserva)
}