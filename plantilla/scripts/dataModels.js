class Usuario {
  constructor(usuario,contrasena,tipo) {
    this.usuario = usuario
    this.contrasena = contrasena
    this.tipo = tipo
  }
}

class Persona extends Usuario {
  constructor(usuario,contrasena,tipo,nombrePersona) {
    super(usuario,contrasena,tipo)
    this.nombrePersona = nombrePersona
  }
}

class Local extends Usuario {
  constructor(usuario,contrasena,tipo,nombreLocal,tipoLocal,permiteReservas,cupoMaximo) {
    super(usuario,contrasena,tipo)
    this.nombreLocal = nombreLocal
    this.tipoLocal = tipoLocal
    this.permiteReservas = permiteReservas
    this.cupoMaximo = cupoMaximo
  }
}

class Reserva {
  constructor(usuarioPersona,usuarioLocal,cuposReserva,estadoReserva,calificacionReserva) {
    this.usuarioPersona = usuarioPersona
    this.usuarioLocal = usuarioLocal
    this.cuposReserva = cuposReserva
    this.estadoReserva = estadoReserva
    this.calificacionReserva = calificacionReserva
  }
}