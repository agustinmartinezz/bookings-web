function recargarTablaReservasPendientes() {
  const reservasPendientesFrame = document.getElementById('frmReservasPendientes')
  const frmReservasPendientes = reservasPendientesFrame.contentDocument

  const reservasPendientesTable = frmReservasPendientes.getElementById('reservasPendientesTable')
  
  vaciarTabla(reservasPendientesTable)

  RESERVAS_APP.forEach((value) => {
    //Cargo en la tabla las reservas pendientes del usuario logeado

    if (USUARIO_ACTIVO[0].usuario == value.usuarioPersona && value.estadoReserva == 'P') {
      let row  = reservasPendientesTable.insertRow();
      let cellFoto = row.insertCell()
      let cellPersona = row.insertCell()
      let cellLocal = row.insertCell()
      let cellCupos = row.insertCell()
      let cellEstado = row.insertCell()
      
      let fotoLocal = USUARIOS_APP.filter((value2) => {return value.usuarioLocal == value2.usuario ? true : false})[0].fotoLocal

      cellFoto.innerHTML = `<img src="${fotoLocal}" class="contenedorImg">`
      cellPersona.innerHTML = USUARIO_ACTIVO[0].nombre

      //Para obtener el nombre del local filtro el usuario que coincida con el local de la reserva en la que estoy parado
      //como va a devolver un solo valor puedo hacer [0].nombre y me queda el nombre de ese usuario
      cellLocal.innerHTML = USUARIOS_APP.filter((value2) => {return value.usuarioLocal == value2.usuario ? true : false})[0].nombre

      cellCupos.innerHTML = value.cuposReserva

      //Solo van a ser reservas pendientes pero una mejora podria ser mostrar todas las reservas
      switch (value.estadoReserva) {
        case 'P':
          cellEstado.innerHTML = 'Pendiente'
          break
        case 'F':
          cellEstado.innerHTML = 'Finalizada'
          break
      }
     
    }
  })
}

function vaciarTabla(reservasPendientesTable) {
  let tableRows = reservasPendientesTable.getElementsByTagName('tr');
  let rowCount = tableRows.length;
  //Obtengo la cantidad de filas que tiene la tabla y si tiene mas de una elimino todas las que no sean el cabezal
  if (rowCount > 1) {
    for (let x=rowCount-1; x>0; x--) {
      reservasPendientesTable.deleteRow(x)
    }
  }
}