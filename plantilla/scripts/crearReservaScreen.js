window.addEventListener('load',onWindowLoad)

function onWindowLoad() {
  const realizarReservaFrame = document.getElementById('frmRealizarReserva')
  const frmRealizarReserva = realizarReservaFrame.contentDocument

  const realizarReservaCbo = frmRealizarReserva.getElementById('realizarReservaCbo')
  const realizarReservaCnt = frmRealizarReserva.getElementById('realizarReservaCnt')
  const realizarReservaBtn = frmRealizarReserva.getElementById('realizarReservaBtn')

  loadComboReservas()
  
  realizarReservaBtn.addEventListener('click',realizarReservaBtnClick)

  function realizarReservaBtnClick() {
    let cantReserva = Number(realizarReservaCnt.value)
    let usuarioActivo = USUARIO_ACTIVO[0]
    let usuarioLocal = realizarReservaCbo.options[realizarReservaCbo.selectedIndex].value

    if (validoReserva(usuarioActivo,usuarioLocal)) {
      if (cantReserva > 0) {
        if (validoDisponibilidad(cantReserva,usuarioLocal)) {
          // usuarioPersona,usuarioLocal,cuposReserva,estadoReserva,calificacionReserva
          let nuevaReserva = new Reserva(usuarioActivo.usuario,usuarioLocal,cantReserva,'P',0)
          RESERVAS_APP.push(nuevaReserva)
          alert('Reserva ingresada exitosamente')
        } else {
          alert('El local seleccionado no dispone del cupo necesario para su reserva')
        }
      } else {
        alert('La cantidad a reservar debe ser mayor a 0')
      }
    }
  }

  function loadComboReservas() {
    let locales = []

    //Cargo los locales en un array separado
    USUARIOS_APP.forEach(function (value, index) {
      switch (value.tipo) {
        case 'L':
          locales.push(USUARIOS_APP[index])
          break;
        case 'P':
          break;
      }
    })

    locales.forEach(function (value) {
      let option = document.createElement('option')
      option.value = value.usuario
      option.text = value.nombre
      realizarReservaCbo.appendChild(option)
    })
  }

  function validoReserva(usuarioActivo,usuarioLocal) {
    let result = true

    let datosLocal = USUARIOS_APP.filter(function (value) {
      return value.usuario == usuarioLocal ? true : false
    })
    
    //Si el local seleccionado permite reservas
    if (datosLocal[0].permiteReservas == 'S') {
      RESERVAS_APP.forEach(function (value) {
        //Si el usuario activo tiene reservas pendientes
        if (usuarioActivo.usuario == value.usuarioPersona && value.estadoReserva == 'P') {
          result = false
          alert('El usuario cuenta con otra reserva en estado pendiente')
        }
      })
    } else {
      result = false
      alert('El local no permite reservas en estos momentos')
    }

    return result
  }

  function validoDisponibilidad(cantReserva,usuarioLocal) {
    let cntCuposPendientes = 0

    let datosLocal = USUARIOS_APP.filter(function (value) {
      return value.usuario == usuarioLocal ? true : false
    })

    //Filtro las reservas pendientes del local seleccionado
    let reservasPendientes = RESERVAS_APP.filter(function (value) {
      if (value.estadoReserva == 'P') {
        return value.usuarioLocal == datosLocal[0].usuario ? true : false
      }
      return false
    })

    //Sumo los cupos de las reservas en pendiente
    reservasPendientes.forEach(function (value) {
      cntCuposPendientes += value.cuposReserva
    })
    console.log(Number(cntCuposPendientes),cantReserva,datosLocal[0].cupoMaximo)
    return Number(cntCuposPendientes) + cantReserva <= datosLocal[0].cupoMaximo ? true : false
  }
}


function updNomUsuarioCrearReserva() {
  const realizarReservaFrame = document.getElementById('frmRealizarReserva')
  const frmRealizarReserva = realizarReservaFrame.contentDocument
  console.log(frmRealizarReserva)
  const realizarReservaUser = frmRealizarReserva.getElementById('realizarReservaUser')
  realizarReservaUser.innerHTML = `usuario: ${USUARIO_ACTIVO[0].usuario}`
}