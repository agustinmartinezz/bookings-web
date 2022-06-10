function estadisticaLocalLoaded() {
  const estadisticaFrame = document.getElementById('frmEstadisticaLocal')
  const frmEstadisticaLocal = estadisticaFrame.contentDocument

  const porcentajeOcupacionLocal = frmEstadisticaLocal.getElementById('porcentajeOcupacionLocal')
  const estadisticaLocalPendientes = frmEstadisticaLocal.getElementById('estadisticaLocalPendientes')
  const estadisticaLocalFinalizadas = frmEstadisticaLocal.getElementById('estadisticaLocalFinalizadas')
  const estadisticaLocalTotales = frmEstadisticaLocal.getElementById('estadisticaLocalTotal')

  const estadisticaLocalStar1 = frmEstadisticaLocal.getElementById('estadisticaLocalStar1')
  const estadisticaLocalStar2 = frmEstadisticaLocal.getElementById('estadisticaLocalStar2')
  const estadisticaLocalStar3 = frmEstadisticaLocal.getElementById('estadisticaLocalStar3')
  const estadisticaLocalStar4 = frmEstadisticaLocal.getElementById('estadisticaLocalStar4')
  const estadisticaLocalStar5 = frmEstadisticaLocal.getElementById('estadisticaLocalStar5')

  const calificarReservaBtn = frmEstadisticaLocal.getElementById('calificarReservaBtn')

  calificarReservaBtn.addEventListener('click',calificarReservaBtnClick)
  function calificarReservaBtnClick() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmEstadisticaGeneral')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmEstadisticaGeneral')
    cargarPromediosGeneral()
  }

  let calificacionesLocal = 0
  let sumaCalificacionesLocal = 0
  let cantReservasFinLocal = 0
  let cantReservasPenLocal = 0
  let cantReservasTotLocal = 0
  let porcentajeOcupacion = 0
  
  //Cuento las reservas pendientes que tiene el local
  cantReservasFinLocal = RESERVAS_APP.filter((value) => {return value.usuarioLocal == USUARIO_ACTIVO[0].usuario && value.estadoReserva == 'P' ? true : false}).length

  //Calculo el porcentaje que representa en el cupo maximo del local
  porcentajeOcupacion = (cantReservasFinLocal / USUARIO_ACTIVO[0].cupoMaximo) * 100
  porcentajeOcupacionLocal.value = porcentajeOcupacion.toFixed(2)

  estadisticaLocalPendientes.value = cantReservasFinLocal

  cantReservasPenLocal = RESERVAS_APP.filter((value) => {return value.usuarioLocal == USUARIO_ACTIVO[0].usuario && value.estadoReserva == 'F' ? true : false}).length
  estadisticaLocalFinalizadas.value = cantReservasPenLocal

  cantReservasTotLocal = RESERVAS_APP.filter((value) => {return value.usuarioLocal == USUARIO_ACTIVO[0].usuario ? true : false}).length
  estadisticaLocalTotales.value = cantReservasTotLocal

  RESERVAS_APP.forEach((value) => {
    if (value.usuarioLocal == USUARIO_ACTIVO[0].usuario && value.calificacionReserva > 0) {
      calificacionesLocal += 1
      sumaCalificacionesLocal += value.calificacionReserva
    }
  })

  switch (Math.round(sumaCalificacionesLocal / calificacionesLocal)) {
    case 1:
      estadisticaLocalStar1.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar2.setAttribute('src','img/estrella.png')
      estadisticaLocalStar3.setAttribute('src','img/estrella.png')
      estadisticaLocalStar4.setAttribute('src','img/estrella.png')
      estadisticaLocalStar5.setAttribute('src','img/estrella.png')
      break;
    case 2:
      estadisticaLocalStar1.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar2.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar3.setAttribute('src','img/estrella.png')
      estadisticaLocalStar4.setAttribute('src','img/estrella.png')
      estadisticaLocalStar5.setAttribute('src','img/estrella.png')
      break;
    case 3:
      estadisticaLocalStar1.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar2.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar3.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar4.setAttribute('src','img/estrella.png')
      estadisticaLocalStar5.setAttribute('src','img/estrella.png')
      break;
    case 4:
      estadisticaLocalStar1.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar2.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar3.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar4.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar5.setAttribute('src','img/estrella.png')
      break;
    case 5:
      estadisticaLocalStar1.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar2.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar3.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar4.setAttribute('src','img/estrella_dorada.png')
      estadisticaLocalStar5.setAttribute('src','img/estrella_dorada.png')
      break;
  }
}

function cargarPromediosGeneral() {
  const estadisticaGeneralFrame = document.getElementById('frmEstadisticaGeneral')
  const frmEstadisticaGeneral = estadisticaGeneralFrame.contentDocument

  const estadisticaGeneralTable = frmEstadisticaGeneral.getElementById('estadisticaGeneralTable')

  vaciarTabla(estadisticaGeneralTable)

  let locales = USUARIOS_APP.filter((value) => {
    return value.tipo == 'L' ? true : false
  })

  locales.forEach((value) => {
    let encontre = false
    let indice = 0

    while (!encontre && indice < RESERVAS_APP.length) {
      //Si el local que estoy recorriendo tiene al menos una reserva calificada
      if (RESERVAS_APP[indice].usuarioLocal == value.usuario && RESERVAS_APP[indice].calificacionReserva > 0) {
        encontre = true //Encontre una reserva con calificacion para el local
      }
      indice +=1
    }
    if (encontre) {
      let row  = estadisticaGeneralTable.insertRow();
      
      let cellFoto = row.insertCell()
      let cellLocal = row.insertCell()
      let cellPromCali = row.insertCell()

      let calificacionesLocal = 0
      let sumaCalificacionesLocal = 0

      let fotoLocal = USUARIOS_APP.filter((value2) => {return value.usuario == value2.usuario ? true : false})[0].fotoLocal

      cellFoto.innerHTML = `<img src="${fotoLocal}" class="contenedorImg">`

      cellLocal.innerHTML = value.nombre


      RESERVAS_APP.forEach((value2) => {
        if (value.usuario == value2.usuarioLocal && value2.calificacionReserva > 0) {
          calificacionesLocal += 1
          sumaCalificacionesLocal += value2.calificacionReserva
        }
      cellPromCali.innerHTML = Math.round(sumaCalificacionesLocal / calificacionesLocal)
    })
  }}
  )
}
