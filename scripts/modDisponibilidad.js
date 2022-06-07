function modDisponibilidad() {
  const modDisponibilidadFrame = document.getElementById('frmModDisponibilidad')
  const frmModDisponibilidad = modDisponibilidadFrame.contentDocument

  const habReservasBtn = frmModDisponibilidad.getElementById('habReservasBtn')
  const deshabReservasBtn = frmModDisponibilidad.getElementById('deshabReservasBtn')
  const cupoMaximoTxt = frmModDisponibilidad.getElementById('cupoMaximoTxt')

  toggleDisponibilidadBtn(habReservasBtn,deshabReservasBtn)

  habReservasBtn.addEventListener('click',habReservasBtnClick)
  function habReservasBtnClick() {
    let encontreUsuario = false
    let indice = 0
    do {
      if(USUARIOS_APP[indice].usuario == USUARIO_ACTIVO[0].usuario) {
        USUARIOS_APP[indice].permiteReservas = 'S'
        encontreUsuario = true
      }
      indice += 1
    } while(!encontreUsuario)
    USUARIO_ACTIVO[0].permiteReservas = 'S'
    toggleDisponibilidadBtn(habReservasBtn,deshabReservasBtn)
  }

  deshabReservasBtn.addEventListener('click',deshabReservasBtnClick)
  function deshabReservasBtnClick() {
    let encontreUsuario = false
    let indice = 0
    do {
      if (USUARIOS_APP[indice].usuario == USUARIO_ACTIVO[0].usuario) {
        USUARIOS_APP[indice].permiteReservas = 'N'
        encontreUsuario = true
      }
      indice += 1
    } while(!encontreUsuario)
    USUARIO_ACTIVO[0].permiteReservas = 'N'
    toggleDisponibilidadBtn(habReservasBtn,deshabReservasBtn)
  }

  cupoMaximoTxt.innerHTML = `Cupo máximo: ${USUARIO_ACTIVO[0].cupoMaximo}`
}

function toggleDisponibilidadBtn(habReservasBtn,deshabReservasBtn) { 
  if (checkDisponibilidad() == 'S') {
    habReservasBtn.disabled = true
    deshabReservasBtn.disabled = false
  }else {
    habReservasBtn.disabled = false
    deshabReservasBtn.disabled = true
  }
}

function checkDisponibilidad() {
  let permiteReservas = USUARIO_ACTIVO[0].permiteReservas
  return permiteReservas
}

function modCupoMaximoLoaded() {
  const modCupoMaximoFrame = document.getElementById('frmCupoMaximo')
  const frmCupoMaximo = modCupoMaximoFrame.contentDocument

  const cupoMaximoBtn = frmCupoMaximo.getElementById('cupoMaximoBtn')
  const cupoMaximoTxt = frmCupoMaximo.getElementById('cupoMaximoTxt')

  cupoMaximoBtn.addEventListener('click',cupoMaximoBtnClick)

  function cupoMaximoBtnClick() {
    let nuevoCupo = Number(cupoMaximoTxt.value)
    let encontreUsuario = false
    let indice = 0
    let reservasPend = 0

    reservasPend = RESERVAS_APP.filter((value) => { return value.usuarioLocal == USUARIO_ACTIVO[0].usuario && value.estadoReserva == 'P' ? true : false})
    if (reservasPend == 0) {
      if (nuevoCupo && nuevoCupo > 0) {
        do {
          if (USUARIOS_APP[indice].usuario == USUARIO_ACTIVO[0].usuario) {
            USUARIOS_APP[indice].cupoMaximo = nuevoCupo
            encontreUsuario = true
          }
          indice += 1
        } while (!encontreUsuario) 
        USUARIO_ACTIVO[0].cupoMaximo = nuevoCupo
        cupoMaximoTxt.value = ''
        modDisponibilidad() //Llamo para modificar el texto del cupo maximo 
        estadisticaLocalLoaded()
        alert('Cupo máximo del local modificado correctamente')
      } else {
        alert('Ingrese un cupo máximo válido')
      }
    }else {
      alert('El local cuenta con reservas pendientes')
    }
  }
}