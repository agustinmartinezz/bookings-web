function crearReservaLoaded() {
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
          //Creo una nueva instancia de una reserva para insertarla a los registros
          let nuevaReserva = new Reserva(usuarioActivo.usuario,usuarioLocal,cantReserva,'P',0)
          RESERVAS_APP.push(nuevaReserva)
          alert('Reserva ingresada exitosamente')
          
          recargarReservasCancelar() //Recargo el combo de reservas en la pantalla de CANCELAR RESERVAS
          recargarTablaReservasPendientes() //Recargo tabla en reservas pendientes
          realizarReservaCnt.value = ''
          
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
    locales = USUARIOS_APP.filter((value) => {
      return value.tipo == 'L' ? true : false
    })

    //Recorro el array de locales y los cargo en el combo
    locales.forEach(function (value) {
      let option = document.createElement('option')
      option.value = value.usuario
      option.text = value.nombre
      realizarReservaCbo.appendChild(option)
    })
  }

  function validoReserva(usuarioActivo,usuarioLocal) {
    let result = true

    //Cargo datosLocal con los datos del local seleccionado
    let datosLocal = USUARIOS_APP.filter(function (value) {
      return value.usuario == usuarioLocal ? true : false
    })
    
    //Si el local seleccionado permite reservas
    if (datosLocal[0].permiteReservas == 'S') {
      RESERVAS_APP.forEach(function (value) {
        //Si el usuario activo tiene reservas pendientes
        if (usuarioActivo.usuario == value.usuarioPersona && value.estadoReserva == 'P' && value.usuarioLocal == usuarioLocal) {
          result = false
          alert('El usuario cuenta con otra reserva en estado pendiente para ese local')
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

    return Number(cntCuposPendientes) + cantReserva <= datosLocal[0].cupoMaximo ? true : false
  }
}