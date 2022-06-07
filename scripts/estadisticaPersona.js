function estadisticaPersonaLoaded() {
  const estadisticaFrame = document.getElementById('frmEstadistica')
  const frmEstadistica = estadisticaFrame.contentDocument
  
  const estadisticaPersonaBtn = frmEstadistica.getElementById('estadisticaPersonaBtn')

  estadisticaPersonaBtn.addEventListener('click',estadisticaPBtnClick)

  function estadisticaPBtnClick() {
    let hideFrame = document.getElementById(PANTALLA_ACTIVA[0])
    let showFrame = document.getElementById('frmPorcentajesReservas')
    hideFrame.style.setProperty('display','none')
    showFrame.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmPorcentajesReservas')
    cargarPorcentajesReservas()
  }

}

function cargarPorcentajesReservas() {
  const estadisticaFrame = document.getElementById('frmPorcentajesReservas')
  const frmPorcentajesReservas = estadisticaFrame.contentDocument

  const porcentajesReservasTable = frmPorcentajesReservas.getElementById('porcentajesReservasTable')

  vaciarTabla(porcentajesReservasTable)

  let locales = USUARIOS_APP.filter((value) => {
    return value.tipo == 'L' ? true : false
  })

  locales.forEach((value) => {
    let encontre = false
    let indice = 0
    //Busco si el usuario tiene reserva para el local
    //Mientras no encuentre o tenga reservas para mirar
    while (!encontre && indice < RESERVAS_APP.length) {
      //Si el usuarioLocal de la reserva que estoy recorriendo es igual al de la reserva que estoy parado y el usuarioPersona coincide con el usuario activo en la aplicacion
      if (RESERVAS_APP[indice].usuarioLocal == value.usuario && RESERVAS_APP[indice].usuarioPersona == USUARIO_ACTIVO[0].usuario && RESERVAS_APP[indice].estadoReserva == 'F') {
        encontre = true //Encontre una reserva del local actual para el usuario activo
      }
      indice +=1
    }
    if (encontre) {
      let row  = porcentajesReservasTable.insertRow();

      let cellFoto = row.insertCell()
      let cellLocal = row.insertCell()
      let cellCantUsu = row.insertCell()
      let cantUsu = 0
      let cellCantTot = row.insertCell()
      let cantTot = 0
      let cellPorc = row.insertCell()


      let fotoLocal = USUARIOS_APP.filter((value2) => {return value.usuario == value2.usuario ? true : false})[0].fotoLocal

      cellFoto.innerHTML = `<img src="${fotoLocal}" class="contenedorImg">`

      cellLocal.innerHTML = value.nombre

      //Para contar las reservas que hizo el usuario en ese local tengo en cuenta todos los estados de reserva: 'P','F','C'
      cantUsu = RESERVAS_APP.filter((value2) => {return value2.usuarioPersona == USUARIO_ACTIVO[0].usuario && value2.usuarioLocal == value.usuario ? true : false}).length
      cellCantUsu.innerHTML = Number(cantUsu)

      //Para contar las reservas totales del local me fijo que coincida el usuarioLocal de la reserva que estoy recorriendo con el usuario del local que estoy recorriendo
      cantTot = RESERVAS_APP.filter((value2) => {return value2.usuarioLocal == value.usuario ?  true : false}).length
      cellCantTot.innerHTML = Number(cantTot)

      //Calculo el porcentaje correspondiente a las reservas del usuario
      cellPorc.innerHTML = ((Number(cantUsu) / Number(cantTot)) * 100).toFixed(2)
    }
  })
}

function cargarLocalFavorito() {
  const estadisticaFrame = document.getElementById('frmEstadistica')
  const frmEstadistica = estadisticaFrame.contentDocument

  const estadisticaPersonaText = frmEstadistica.getElementById('estadisticaPersonaText')

  //Filtro todas las reservas que tiene ingresadas el usuario
  let reservasUsuario = RESERVAS_APP.filter((value) => {return value.usuarioPersona == USUARIO_ACTIVO[0].usuario ? true : false})

  let localesReservas = [] //Array que va a tener los diferentes locales en los que el usuario hizo reserva
  let objReservasLocal = {} //Objeto para almacenar local y su respectiva cantidad de reservas del usuario
  let arrReservasLocales = [] //Array del objeto declarado arriba

  //Recorro reservas
  reservasUsuario.forEach((value) => {
    //Si todavia no lo ingrese en el array, lo ingreso
    if (!(localesReservas.includes(value.usuarioLocal))) {
      localesReservas.push(value.usuarioLocal)
      //Asigno valor a las propiedades del objeto
      objReservasLocal = {
        local:value.usuarioLocal,
        cntReservas:0,
      }
      //Guardo el objeto en el array
      arrReservasLocales.push(objReservasLocal)
    }
  })

  //Para cada local filtro las reservas que corresponden al mismo
  arrReservasLocales.forEach((value) => {
    let totReservasLocal = reservasUsuario.filter((value2) => {return value.local == value2.usuarioLocal ? true : false})
    value.cntReservas = totReservasLocal.length
  })

  //Limpio el objeto que almacena local y cantidad de reservas
  objReservasLocal = {
    local:'',
    cntReservas:0
  }
  arrReservasLocales.forEach((value) => {
    if (value.cntReservas > objReservasLocal.cntReservas) {
      objReservasLocal.local = value.local
      objReservasLocal.cntReservas = value.cntReservas
    }
  })
  estadisticaPersonaText.innerHTML = objReservasLocal.local

  //Muestro tambien si hay locales con la misma cantidad de reservas
  arrReservasLocales.forEach((value) => {
    if (value.cntReservas == objReservasLocal.cntReservas && value.local !== objReservasLocal.local) {
      estadisticaPersonaText.innerHTML += `, ${value.local}`
    }
  })
}