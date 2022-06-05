class Usuario {
  constructor(usuario,contrasena,tipo,nombre) {
    this.usuario = usuario
    this.contrasena = contrasena
    this.tipo = tipo
    this.nombre = nombre
  }
}

class Local extends Usuario {
  constructor(usuario,contrasena,tipo,nombre,tipoLocal,permiteReservas,cupoMaximo,fotoLocal) {
    super(usuario,contrasena,tipo,nombre)
    this.tipoLocal = tipoLocal
    this.permiteReservas = permiteReservas
    this.cupoMaximo = cupoMaximo
    this.fotoLocal = fotoLocal
  }
}

class Reserva {
  constructor(idReserva,usuarioPersona,usuarioLocal,cuposReserva,estadoReserva,calificacionReserva) {
    this.idReserva = idReserva
    this.usuarioPersona = usuarioPersona
    this.usuarioLocal = usuarioLocal
    this.cuposReserva = cuposReserva
    this.estadoReserva = estadoReserva
    this.calificacionReserva = calificacionReserva
  }
}